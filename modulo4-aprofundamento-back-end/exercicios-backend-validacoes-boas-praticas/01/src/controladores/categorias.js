const pool = require('../bancodedados/conexao');

const categoriasControlador = {};

categoriasControlador.listar = async (req, res) => {

    try {
        const listaCategorias = await pool.query('select * from categorias');

        return res.status(200).json(listaCategorias.rows);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mensagem: error.message });
    }
}

module.exports = categoriasControlador;