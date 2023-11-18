const compiladorHtml = require('../utils/compiladorHtml');
const transport = require('./email');
const knex = require('../conexao');

const newsletterController = {}

newsletterController.cadastrar = async (req, res) => {
    const { nome, email } = req.body;

    try {
        if (!nome) {
            return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
        }

        if (!email) {
            return res.status(400).json({ mensagem: "O campo email é obrigatório." });
        }

        const emailExiste = await knex('usuarios').where({ email }).count();

        if (parseInt(emailExiste[0].count) !== 0) {
            return res.status(400).json({ mensagem: 'O e-mail informado já está sendo utilizado por outro usuário.', });
        }

        const novoUsuario = await knex('usuarios').insert({ nome, email }).returning('*');

        return res.status(201).json(novoUsuario);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

newsletterController.enviarEmail = async (req, res) => {
    const { titulo, texto } = req.body;

    try {
        if (!titulo) {
            return res.status(400).json({ mensagem: "O campo titulo é obrigatório." });
        }

        if (!texto) {
            return res.status(400).json({ mensagem: "O campo texto é obrigatório." });
        }

        const usuarios = await knex('usuarios');

        for (const usuario of usuarios) {
            const html = await compiladorHtml('./src/templates/newsletter.html',
                {
                    titulo,
                    texto,
                    nome: usuario.nome
                });

            transport.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${usuario.nome} <${usuario.email}>`,
                subject: titulo,
                html
            });
        }


        return res.status(200).json({ mensagem: "O email foi enviado com sucesso!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

module.exports = newsletterController;