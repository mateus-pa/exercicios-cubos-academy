let { alunos, identificadorAluno } = require('../dados/alunosdados');

const listarAlunos = function (req, res) {
    return res.status(200).json(alunos);
}

const buscarAlunoPorId = function (req, res) {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido.' });
    }

    const aluno = alunos.find(function (aluno) {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado.' });
    }

    return res.status(200).json(aluno);
}

const adicionarAluno = function (req, res) {
    const { nome, sobrenome, idade, curso } = req.body;

    if (nome === undefined) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório.' });
    }

    if (sobrenome === undefined) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório.' });
    }

    if (idade === undefined) {
        return res.status(400).json({ mensagem: 'A idade é obrigatória.' });
    }

    if (curso === undefined) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório.' });
    }

    const verificarVazios = function (string) {
        const array = string.split("");

        const stringVazio = array.every(function (caractere) {
            return caractere === "" || caractere === " ";
        });

        return stringVazio;
    }

    if (verificarVazios(nome)) {
        return res.status(400).json({ mensagem: 'O campo nome não pode estar vazio.' });
    }

    if (verificarVazios(sobrenome)) {
        return res.status(400).json({ mensagem: 'O campo sobrenome não pode estar vazio.' });
    }

    if (verificarVazios(curso)) {
        return res.status(400).json({ mensagem: 'O campo curso não pode estar vazio.' });
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'O aluno precisa ser maior de idade.' });
    }

    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201).send();
}

const removerAluno = function (req, res) {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(400).json({ mensagem: 'O ID do aluno a ser removido deve ser um número válido.' });
    }

    const aluno = alunos.find(function (aluno) {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno a ser removido não foi encontrado.' });
    }

    alunoFiltrado = alunos.filter(function (aluno) {
        return aluno.id === parseInt(id);
    });

    alunos = alunos.filter(function (aluno) {
        return aluno.id !== parseInt(id);
    });

    res.status(200).json(alunoFiltrado);
}

module.exports = {
    listarAlunos,
    buscarAlunoPorId,
    adicionarAluno,
    removerAluno
}