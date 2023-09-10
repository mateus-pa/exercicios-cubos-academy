const express = require('express');

const app = express();

let tempoSec = 0;
let contador;

// exibir
app.get('/', function (req, res) {
    let sec = 0;
    let min = 0;
    if (tempoSec <= 60) {
        sec = tempoSec;
    } else {
        min = Math.round(tempoSec / 60);
        sec = tempoSec % 60;
    }
    sec = String(sec).padStart(2, '0');
    min = String(min).padStart(2, '0');

    res.send(`Tempo atual do cronômetro: ${min} minutos e ${sec} segundos`);
});

// iniciar
app.get('/iniciar', function (req, res) {

    contador = setInterval(function () {
        tempoSec++;
    }, 1000);

    res.send("Cronômetro iniciado!");
});

// pausar
app.get('/pausar', function (req, res) {
    contador = clearInterval(contador);

    res.send("Cronômetro pausado!");
});

// continuar
app.get('/continuar', function (req, res) {

    contador = setInterval(function () {
        tempoSec++;
    }, 1000);

    res.send("Cronômetro continuando!");
});

// zerar
app.get('/zerar', function (req, res) {
    tempoSec = 0;

    res.send("Cronômetro zerado!");
});

app.listen(8000);