const { buscarEndereco } = require('utils-playground');

const fs = require('fs/promises');

const bancodedados = require('../enderecos.json');

const buscaEndereco = async function (req, res) {
    const { cep } = req.params;
    try {
        const endereco = await buscarEndereco(cep);

        const enderecosBuffer = await fs.readFile('./src/enderecos.json');

        const enderecos = JSON.parse(enderecosBuffer);

        enderecos.push({
            id: bancodedados.length + 1,
            ...endereco
        });

        const enderecosString = JSON.stringify(enderecos);

        await fs.writeFile('./src/enderecos.json', enderecosString);

        return res.status(201).json(endereco);
    } catch (erro) {
        return res.status(500).json({ erro: `${erro.message}` });
    }
}

module.exports = {
    buscaEndereco
}
