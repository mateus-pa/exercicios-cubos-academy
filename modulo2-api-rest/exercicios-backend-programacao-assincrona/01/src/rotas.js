const express = require('express');

const rotas = express();

const { listarProdutos, buscarProdutoPorId, calcularFrete } = require('./controllers/produtosControllers');

rotas.get('/produtos', listarProdutos);

rotas.get('/produtos/:idProduto', buscarProdutoPorId);

rotas.get('/produtos/:idProduto/frete/:cep', calcularFrete);


module.exports = rotas;