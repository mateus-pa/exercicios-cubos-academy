const bcrypt = require('bcrypt');
const pool = require('../conexao');
const jwt = require('jsonwebtoken');

const cadastro = async function (req, res) {
    const { nome, email, senha } = req.body;

    try {
        if (!nome) {
            return res.status(400).json({ mensagem: 'O campo nome é obrigatório.' });
        }

        if (!email) {
            return res.status(400).json({ mensagem: 'O campo email é obrigatório.' });
        }

        if (!senha) {
            return res.status(400).json({ mensagem: 'O campo senha é obrigatório.' });
        }

        const emailExiste = await pool.query('select count(*) from usuarios where email = $1;', [email]);

        if (emailExiste.rows[0].count !== 0) {
            return res.status(400).json({ mensagem: 'Este email já existe.' });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = await pool.query('insert into usuarios (nome, email, senha) values ($1, $2, $3) returning id, nome email;', [nome, email, senhaCriptografada]);

        return res.status(201).json(novoUsuario.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: 'erro interno no servidor' });
    }
}

const login = async function (req, res) {
    const { email, senha } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ mensagem: 'O campo email é obrigatório.' });
        }

        if (!senha) {
            return res.status(400).json({ mensagem: 'O campo senha é obrigatório.' });
        }

        const { rows, rowCount } = await pool.query('select * from usuarios where email = $1;', [email]);

        if (rowCount === 0) {
            return res.status(400).json({ mensagem: 'Senha ou email inválido.' });
        }

        const { senha: senhaUsuario, ...usuario } = rows[0];

        const senhaValida = await bcrypt.compare(senha, senhaUsuario);

        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Senha ou email inválido.' });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASSWORD, { expiresIn: '8h' });

        return res.status(200).json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: 'erro interno no servidor' });
    }
}

module.exports = {
    cadastro,
    login
}