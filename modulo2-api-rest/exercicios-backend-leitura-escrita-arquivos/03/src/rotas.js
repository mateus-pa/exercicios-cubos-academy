const express = require('express');

const rotas = express();

const { buscaEndereco } = require('./controllers/enderecosControllers');

const { verificaCepNumerico, enderecoNaLista } = require('./middlewares/enderecosMiddlewares');

rotas.get('/enderecos/:cep', verificaCepNumerico, enderecoNaLista, buscaEndereco);

module.exports = rotas;