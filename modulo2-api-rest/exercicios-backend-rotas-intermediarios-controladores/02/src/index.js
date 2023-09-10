const express = require('express');

const app = express();

const { rodadas, removerJogador, adicionarJogador } = require('./controllers/jogo');

app.get('/', rodadas);

app.get('/remover', removerJogador);

app.get('/adicionar', adicionarJogador);

app.listen(8000);