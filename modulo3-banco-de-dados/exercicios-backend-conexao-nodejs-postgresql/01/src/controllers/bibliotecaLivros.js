const pool = require('../conexao');
const { format, parseISO } = require('date-fns');

const cadastrarLivro = async function (req, res) {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    try {
        const autorBuscado = await pool.query('select * from autores where id = $1', [id]);

        if (autorBuscado.rowCount < 1) {
            res.status(400).json({ mensagem: 'Digite o id de um autor válido.' });
        }

        const query = 'insert into livros (nome, genero, editora, data_publicacao, autor_id) values ($1, $2, $3, $4, $5) returning id, nome, genero, editora, data_publicacao';
        const params = [nome, genero, editora, data_publicacao, id];

        if (!nome) {
            res.status(400).json({ mensagem: 'o campo nome é obrigatório.' });
        }

        const novoLivro = await pool.query(query, params);

        novoLivro.rows[0].data_publicacao = format(parseISO(data_publicacao), 'yyyy-MM-dd');

        res.status(201).json(novoLivro.rows[0]);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

const listarLivros = async function (req, res) {
    try {
        const query = 'select l.id, l.genero, l.editora, l.data_publicacao, l.autor_id, a.nome, a.idade from livros l left join autores a on a.id = l.autor_id';

        const livroBuscado = await pool.query(query);

        if (livroBuscado.rowCount < 1) {
            res.status(404).json({ mensagem: 'livro não encontrado' });
        }

        for (let livro of livroBuscado.rows) {
            livro.data_publicacao = format(livro.data_publicacao, 'yyyy-MM-dd');
        }

        const livrosBuscadosFormatados = livroBuscado.rows.map(function (livro) {
            const { autor_id, nome, idade, ...dadosLivro } = livro;
            return {
                ...dadosLivro,
                autor: {
                    id: autor_id,
                    nome,
                    idade
                }
            }
        });


        res.status(200).json(livrosBuscadosFormatados);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

module.exports = {
    cadastrarLivro,
    listarLivros
}