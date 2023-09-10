const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listarProdutos = async function (req, res) {
    return res.status(200).json(produtos);
}

const buscarProdutoPorId = async function (req, res) {
    const { idProduto } = req.params;

    if (!parseInt(idProduto)) {
        return res.status(400).json({ mensagem: 'O id do produto precisa ser um número válido.' });
    }

    const produtoBuscado = produtos.find(await function (produto) {
        return produto.id === parseInt(idProduto);
    });

    if (!produtoBuscado) {
        return res.status(404).json({ mensagem: 'Este produto não existe.' });
    }

    return res.status(200).json(produtoBuscado);
}

const calcularFrete = async function (req, res) {
    const { idProduto, cep } = req.params;

    if (isNaN(cep)) {
        return res.status(400).json({ mensagem: 'O cep da entrega precisa ser apenas números.' });
    }

    if (!parseInt(idProduto)) {
        return res.status(400).json({ mensagem: 'O id do produto precisa ser um número válido.' });
    }

    if (cep.length !== 8) {
        return res.status(400).json({ mensagem: 'O cep precisa possuir 8 digitos.' });
    }

    const produtoBuscado = produtos.find(await function (produto) {
        return produto.id === parseInt(idProduto);
    });

    if (!produtoBuscado) {
        return res.status(404).json({ mensagem: 'Este produto não existe.' });
    }

    const estado = await getStateFromZipcode(cep);

    if (!estado) {
        return res.status(400).json({ mensagem: 'Cep inválido! Digite um cep existente.' });
    }

    if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
        const frete = produtoBuscado.valor * 0.10;
        return res.status(200).json({
            produtoBuscado,
            estado,
            frete
        });
    }

    if (estado === "SP" || estado === "RJ") {
        const frete = produtoBuscado.valor * 0.15;
        return res.status(200).json({
            produtoBuscado,
            estado,
            frete
        });
    }

    const frete = produtoBuscado.valor * 0.12;
    return res.status(200).json({
        produtoBuscado,
        estado,
        frete
    });
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    calcularFrete
}