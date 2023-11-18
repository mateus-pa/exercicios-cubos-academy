const pool = require('../bancodedados/conexao');

const validaEmailExiste = async (req, res, next) => {
    try {
        const emailExiste = await pool.query(
            'select count(*) from usuarios where email = $1;',
            [email]
        );

        if (parseInt(emailExiste.rows[0].count) !== 0) {
            return res
                .status(400)
                .json({
                    mensagem:
                        'O e-mail informado já está sendo utilizado por outro usuário.',
                });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mensagem: error.message });
    }

    next();
}


module.exports = validaEmailExiste;