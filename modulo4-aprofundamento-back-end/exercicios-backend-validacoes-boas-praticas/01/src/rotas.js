const express = require('express');

const rotas = express();

const usuariosControlador = require('./controladores/usuarios');
const categoriasControlador = require('./controladores/categorias');
const transacoesControlador = require('./controladores/transacoes');

const validaCorpoRequisicao = require('./intermediarios/validaCorpoRequisicao');
const validaLogin = require('./intermediarios/validaLogin');
const validaEmailExiste = require('./intermediarios/validaEmailExiste');

const usuariosSchema = require('./validacoes/usuariosSchema');
const loginSchema = require('./validacoes/loginSchema');
const transacoesSchema = require('./validacoes/transacoesSchema');

rotas.post('/usuario', validaCorpoRequisicao(usuariosSchema), validaEmailExiste, usuariosControlador.cadastrar);
rotas.post('/login', validaCorpoRequisicao(loginSchema), usuariosControlador.login);

rotas.use(validaLogin);

rotas.get('/usuario', usuariosControlador.detalhar);
rotas.put('/usuario', validaCorpoRequisicao(usuariosSchema), validaEmailExiste, usuariosControlador.atualizar);

rotas.get('/categoria', categoriasControlador.listar);

rotas.get('/transacao', transacoesControlador.listar);
rotas.get('/transacao/extrato', transacoesControlador.obterExtrato);
rotas.get('/transacao/:id', transacoesControlador.detalhar);
rotas.post('/transacao', validaCorpoRequisicao(transacoesSchema), transacoesControlador.cadastrar);
rotas.put('/transacao/:id', validaCorpoRequisicao(transacoesSchema), transacoesControlador.atualizar);
rotas.delete('/transacao/:id', transacoesControlador.remover);

module.exports = rotas;
