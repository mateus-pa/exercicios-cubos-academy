let { jogadores, indice } = require('../bancodedados');

const rodadas = function (req, res) {
    if (indice >= jogadores.length) {
        indice = 0;
    }

    res.send(`É a vez de ${jogadores[indice]} jogar!`);
    indice++;
}

const removerJogador = function (req, res) {
    const { indice } = req.query;
    const jogador = jogadores[indice];

    if (!jogador) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }

    if (jogador) {
        jogadores.splice(indice, 1);
        res.send(jogadores);
    }
}

const adicionarJogador = function (req, res) {
    let { nome, indice } = req.query;

    if (indice >= jogadores.length || indice < 0) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado`);
    }

    nome = nome.slice(0, 1).toUpperCase() + (nome.slice(1, nome.length)).toLowerCase();

    if (!indice) {
        jogadores.push(nome);
        res.send(jogadores);
    }

    if (indice < jogadores.length && indice >= 0) {
        jogadores.splice(indice, 0, nome);
        res.send(jogadores);
    }
}

module.exports = {
    rodadas,
    removerJogador,
    adicionarJogador
}