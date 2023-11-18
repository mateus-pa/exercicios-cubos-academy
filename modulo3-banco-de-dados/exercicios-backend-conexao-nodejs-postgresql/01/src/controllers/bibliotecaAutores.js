const pool = require('../conexao');
const { format } = require('date-fns');

const cadastrarAutor = async function (req, res) {
    const { nome, idade } = req.body;

    try {
        const query = 'insert into autores (nome, idade) values ($1, $2) returning *';
        const params = [nome, idade];

        if (!nome) {
            res.status(400).json({ mensagem: 'o campo nome é obrigatório.' });
        }

        const novoAutor = await pool.query(query, params);

        res.status(201).json(novoAutor.rows[0]);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

const buscarAutorPorId = async function (req, res) {
    const { id } = req.params;

    try {
        const query = 'select a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome, l.editora as livro_editora, l.data_publicacao from autores a right join livros l on a.id = l.autor_id where a.id = $1';
        const params = [id];

        const livrosAutorBuscado = await pool.query(query, params);

        if (livrosAutorBuscado.rowCount < 1) {
            res.status(404).json({ mensagem: 'livro não encontrado' });
        }

        for (let livro of livrosAutorBuscado.rows) {
            livro.data_publicacao = format(livro.data_publicacao, 'yyyy-MM-dd');
        }

        const autorLivro = {
            id: livrosAutorBuscado.rows[0].id,
            nome: livrosAutorBuscado.rows[0].nome,
            idade: livrosAutorBuscado.rows[0].idade
        }

        const livrosAutorFormatado = livrosAutorBuscado.rows.map(function (livro) {
            const { id, nome, idade, ...dadosLivro } = livro;
            return {
                ...dadosLivro
            }
        });

        const autorBuscadoFormatado = {
            ...autorLivro,
            livros: livrosAutorFormatado
        }


        res.status(200).json(autorBuscadoFormatado);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

module.exports = {
    cadastrarAutor,
    buscarAutorPorId
}