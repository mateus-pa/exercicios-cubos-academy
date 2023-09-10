const express = require('express');

const rotas = express();

const { listarColecaoPokes, detalharPoke } = require('./controllers/pokedexControllers');

rotas.get('/pokemons', listarColecaoPokes);

rotas.get('/pokemons/:path', detalharPoke);

module.exports = rotas;
