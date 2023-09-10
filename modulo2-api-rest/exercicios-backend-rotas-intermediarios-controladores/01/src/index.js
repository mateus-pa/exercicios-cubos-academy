const express = require('express');

const app = express();

const { somar, subtrair, multiplicar, dividir } = require('./controllers/calculadora');

app.get('/somar', somar);

app.get('/subtrair', subtrair);

app.get('/multiplicar', multiplicar);

app.get('/dividir', dividir);

app.listen(3000);