let { convidados } = require('../dados/convidadosdados');

const listarConvidados = function (req, res) {
    const { nome } = req.query;

    if (nome) {
        const convidadoNaLista = convidados.find(function (convidadoNome) {
            return convidadoNome === nome;
        });

        if (convidadoNaLista) {
            return res.status(200).json({ mensagem: 'Convidado presente.' });
        }

        return res.status(200).json({ mensagem: 'O convidado buscado não está presente na lista.' });
    }

    return res.status(200).json(convidados);
}

const adicionarConvidado = function (req, res) {
    const { nome } = req.body;

    const convidadoNaLista = convidados.find(function (convidadoNome) {
        return convidadoNome === nome;
    });

    if (convidadoNaLista) {
        return res.status(400).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' });
    }

    convidados.push(nome);
    return res.status(201).json({ mensagem: 'Convidado adicionado.' });
}

const removerConvidado = function (req, res) {
    const { nome } = req.params;

    const convidadoNaLista = convidados.find(function (convidadoNome) {
        return convidadoNome === nome;
    });

    if (!convidadoNaLista) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' });
    }

    convidados = convidados.filter(function (convidado) {
        return convidado !== nome;
    });

    return res.status(200).json({ mensagem: 'Convidado removido.' });
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
}