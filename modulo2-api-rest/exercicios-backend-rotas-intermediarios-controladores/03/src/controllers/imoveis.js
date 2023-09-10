const { imoveis } = require('../dados/imoveis');

const listarImoveis = function (req, res) {
    res.send(imoveis);
}

const imovelPorId = function (req, res) {
    const { id } = req.params;

    const imovelProcurado = imoveis.find(function (imovel) {
        return imovel.id === Number(id);
    });

    res.send(imovelProcurado);
}

module.exports = {
    listarImoveis,
    imovelPorId
}