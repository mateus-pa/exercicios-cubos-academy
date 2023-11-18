const express = require('express');

const rotas = express();

const {
    cadastrarAutor,
    buscarAutorPorId
} = require('./controllers/bibliotecaAutores');

const { cadastrarLivro, listarLivros } = require('./controllers/bibliotecaLivros');

rotas.post('/autor', cadastrarAutor);

rotas.get('/autor/:id', buscarAutorPorId);

rotas.post('/autor/:id/livro', cadastrarLivro);

rotas.get('/livro', listarLivros);

module.exports = rotas;