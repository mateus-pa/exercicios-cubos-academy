const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let index = 0;

app.get('/', function (req, res) {
    if (index === jogadores.length) {
        index = 0;
    }
    res.send(`É a vez de ${jogadores[index]} jogar`);
    index++;
});

app.listen(3000);