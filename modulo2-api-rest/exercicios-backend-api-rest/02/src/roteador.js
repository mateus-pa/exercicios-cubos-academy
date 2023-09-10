const express = require('express');

const rotas = express();

const { listarConvidados, adicionarConvidado, removerConvidado } = require('./controllers/convidadosControllers');

rotas.get('/convidados', listarConvidados);

rotas.post('/convidados', adicionarConvidado);

rotas.delete('/convidados/:nome', removerConvidado);

module.exports = rotas;