const express = require('express');

const router = express.Router();

const { listarImoveis, imovelPorId } = require('./controllers/imoveis');

router.get('/imoveis', listarImoveis);

router.get('/imoveis/:id', imovelPorId);

module.exports = router;