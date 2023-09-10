const express = require('express');

const rotas = express();

const { listarLivros, buscarLivroPorId, adicionarLivro, substituirLivro, alterarLivro, removerLivro } = require('./controllers/bibliotecaControllers');

rotas.get('/livros', listarLivros);

rotas.get('/livros/:id', buscarLivroPorId);

rotas.post('/livros', adicionarLivro);

rotas.put('/livros/:id', substituirLivro);

rotas.patch('/livros/:id', alterarLivro);

rotas.delete('/livros/:id', removerLivro);

module.exports = rotas;