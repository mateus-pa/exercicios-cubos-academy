const express = require('express');
const empresasController = require('./controllers/empresas');

const rotas = express();

rotas.get('/empresas', empresasController.detalhar);

module.exports = rotas;