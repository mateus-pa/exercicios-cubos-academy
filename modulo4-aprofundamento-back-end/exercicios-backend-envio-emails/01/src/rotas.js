const express = require('express');

const rotas = express();

const newsletterController = require('./controllers/newsletter');

rotas.post('/usuarios', newsletterController.cadastrar);

rotas.post('/usuarios/enviar', newsletterController.enviarEmail);

module.exports = rotas;