const jwt = require('jsonwebtoken');
const pool = require('../conexao');

const verificaLogin = async function (req, res, next) {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.status(401).json({ mensagem: 'Usuário não autorizado.' });
        }

        const token = authorization.split(' ')[1];

        const { id } = jwt.verify(token, process.env.JWT_PASSWORD);

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1;', [id]);

        if (rowCount === 0) {
            return res.status(401).json({ mensagem: 'Usuário não autorizado.' });
        }

        const { senha, ...usuario } = rows[0];

        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: 'erro interno no servidor' });
    }
}

const validaBodyPokemons = async function (req, res, next) {
    const { nome, habilidades } = req.body;

    try {
        if (!nome) {
            return res.status(400).json({ mensagem: 'O campo nome é obrigatório.' });
        }

        if (!habilidades) {
            return res.status(400).json({ mensagem: 'O campo habilidades é obrigatório.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'erro interno no servidor' });
    }

    next();
}

module.exports = {
    verificaLogin,
    validaBodyPokemons
}