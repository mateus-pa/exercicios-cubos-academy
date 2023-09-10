const express = require('express');

const rotas = express();

const { listarAlunos, buscarAlunoPorId, adicionarAluno, removerAluno } = require('./controllers/alunoscontrollers');

rotas.get('/alunos', listarAlunos);

rotas.get('/alunos/:id', buscarAlunoPorId);

rotas.post('/alunos', adicionarAluno);

rotas.delete('/alunos/:id', removerAluno);

module.exports = rotas;