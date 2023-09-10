const express = require('express');

const app = express();

const { validadorSenha } = require('./intermediarios');
const rotas = require('./roteador');

app.use(express.json());

app.use(validadorSenha);

app.use(rotas);

app.listen(3000);