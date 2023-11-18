const express = require('express');

const rotas = express();

const usuarios = require('./controllers/usuarios');
const pokemons = require('./controllers/pokemons');
const { verificaLogin, validaBodyPokemons } = require('./middlewares/verificaLogin');

rotas.post('/usuario/cadastro', usuarios.cadastro);
rotas.post('/usuario/login', usuarios.login);

rotas.use(verificaLogin);

rotas.post('/pokemon/cadastro', validaBodyPokemons, pokemons.cadastrar);
rotas.put('/pokemon/:id', pokemons.atualizarApelido);
rotas.get('/pokemon', pokemons.listar);
rotas.get('/pokemon/:id', pokemons.detalhar);
rotas.delete('/pokemon/:id', pokemons.excluir);

module.exports = rotas;