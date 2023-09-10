let { livros, identificadorLivro } = require('../dados/biblioteca');

const listarLivros = function (req, res) {
    return res.status(200).json(livros);
}

const buscarLivroPorId = function (req, res) {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' })
    }

    const livroBuscado = livros.find(function (livro) {
        return livro.id === parseInt(id);
    });

    if (!livroBuscado) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' });
    }


    return res.status(200).json(livroBuscado);
}

const adicionarLivro = function (req, res) {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um título.' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um autor.' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um ano de publicação.' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir a numeração das páginas' });
    }

    const livro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano: Number(ano),
        numPaginas: Number(numPaginas)
    }

    livros.push(livro);

    return res.status(201).json(livro);
}

const substituirLivro = function (req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' });
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um título.' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um autor.' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir um ano de publicação.' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O livro precisa possuir a numeração das páginas' });
    }

    const livroBuscado = livros.find(function (livro) {
        return livro.id === parseInt(id);
    });

    if (!livroBuscado) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    }

    livroBuscado.titulo = titulo;
    livroBuscado.autor = autor;
    livroBuscado.ano = Number(ano);
    livroBuscado.numPaginas = Number(numPaginas);

    return res.status(200).json({ mensagem: "Livro substituído." });
}

const alterarLivro = function (req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' });
    }

    const livroBuscado = livros.find(function (livro) {
        return livro.id === parseInt(id);
    });

    if (!livroBuscado) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    }

    if (titulo) {
        livroBuscado.titulo = titulo;
    }

    if (autor) {
        livroBuscado.autor = autor;
    }

    if (ano) {
        livroBuscado.ano = Number(ano);
    }

    if (numPaginas) {
        livroBuscado.numPaginas = Number(numPaginas);
    }

    return res.status(200).json({ mensagem: "Livro alterado." });
}

const removerLivro = function (req, res) {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' });
    }

    const livroBuscado = livros.find(function (livro) {
        return livro.id === parseInt(id);
    });

    if (!livroBuscado) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    }

    livros = livros.filter(function (livro) {
        return livro.id !== parseInt(id);
    });

    return res.status(200).json({ mensagem: "Livro removido." });
}

module.exports = {
    listarLivros,
    buscarLivroPorId,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    removerLivro
}