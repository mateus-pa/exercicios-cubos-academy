const instanciaAxios = require('../axios');
const fs = require('fs/promises');

const empresasController = {};

empresasController.detalhar = async function (req, res) {
    const { dominioEmpresa } = req.query;

    try {
        const { data: empresa } = await instanciaAxios.get(`/?domain=${dominioEmpresa}`);

        if (empresa && empresa.name) {
            const dadosEmpresas = JSON.parse(await fs.readFile('./src/dados/empresas.json'));

            dadosEmpresas.push(empresa);

            await fs.writeFile('./src/dados/empresas.json', JSON.stringify(dadosEmpresas, null, 2));
        }
        return res.status(200).json(empresa);
    } catch (error) {
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

module.exports = empresasController;