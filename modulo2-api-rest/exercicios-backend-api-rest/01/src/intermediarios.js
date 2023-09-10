const validadorSenha = function (req, res, next) {
    const { senha } = req.query;

    if (senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'O usuário não possui permissão de acesso.' });
    }

    next();
}

module.exports = {
    validadorSenha
}