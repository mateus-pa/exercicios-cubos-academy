const fs = require('fs/promises');

const verificaCepNumerico = function (req, res, next) {
    const { cep } = req.params;

    if (!parseInt(cep)) {
        return res.status(400).json({ mensagem: 'O cep precisa ser composto apenas por números.' });
    }

    next();
}

const enderecoNaLista = async function (req, res, next) {
    const { cep } = req.params;

    try {
        const enderecosBuffer = await fs.readFile('./src/enderecos.json');

        const enderecos = JSON.parse(enderecosBuffer);

        const enderecoNaLista = enderecos.find(function (endereco) {
            const arrayCep = endereco.cep.split('');

            const arrayCepFormatado = arrayCep.filter(function (caractere) {
                return caractere !== '-';
            });

            const cepFormatado = arrayCepFormatado.join('');

            return cepFormatado === cep;
        });

        if (enderecoNaLista) {
            return res.status(200).json(enderecoNaLista);
        }

        next();
    } catch (erro) {
        return res.status(500).json({ erro: `${erro.message}` });
    }
}

module.exports = {
    verificaCepNumerico,
    enderecoNaLista
}