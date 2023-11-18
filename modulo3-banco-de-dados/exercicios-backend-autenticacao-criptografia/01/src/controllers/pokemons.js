const pool = require('../conexao');

const pokemons = {}

pokemons.cadastrar = async function (req, res) {
    const usuario = req.usuario;
    const { nome, apelido, habilidades, imagem } = req.body;

    try {
        const novoPokemon = await pool.query(`insert into
        pokemons
        (usuario_id, nome, habilidades, imagem, apelido)
        values ($1, $2, $3, $4, $5)
        returning *`, [usuario.id, nome, habilidades, imagem, apelido]);

        return res.status(201).json(novoPokemon.rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }

}

pokemons.atualizarApelido = async function (req, res) {
    const usuario = req.usuario;
    const { id } = req.params;
    const { apelido } = req.body;

    try {
        if (!apelido) {
            return res.status(400).json({ mensagem: 'O campo apelido é obrigatório para atualizar o pokemon.' });
        }

        const pokemonApelidoAtualizado = await pool.query(`update
        pokemons
        set apelido = $1
        where usuario_id = $2
        and id = $3
        returning apelido`, [apelido, usuario.id, parseInt(id)]);

        return res.status(201).json(pokemonApelidoAtualizado.rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }

}

pokemons.listar = async function (req, res) {
    const usuario = req.usuario

    try {
        const { rows } = await pool.query(`select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
    from pokemons p
    join usuarios u
    on p.usuario_id = u.id
    where p.usuario_id = $1`, [usuario.id]);

        for (const pokemon of rows) {
            pokemon.habilidades = pokemon.habilidades.split(', ');
        }

        return res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

pokemons.detalhar = async function (req, res) {
    const { id } = req.params;
    const usuario = req.usuario;

    try {
        const pokemonExiste = await pool.query(`select count(*)
        from pokemons
        where id = $1
        and usuario_id = $2`, [parseInt(id), usuario.id]);

        if (parseInt(pokemonExiste.rows[0].count) === 0) {
            return res.status(404).json({ mensagem: "Este pokemon não existe." });
        }

        const { rows } = await pool.query(`select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
        from pokemons p
        join usuarios u
        on p.usuario_id = u.id
        where p.usuario_id = $1
        and p.id = $2`, [usuario.id, parseInt(id)]);

        for (const pokemon of rows) {
            pokemon.habilidades = pokemon.habilidades.split(', ');
        }

        return res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

pokemons.excluir = async function (req, res) {
    const { id } = req.params;
    const usuario = req.usuario;

    try {
        const pokemonExiste = await pool.query(`select count(*)
        from pokemons
        where id = $1
        and usuario_id = $2`, [parseInt(id), usuario.id]);

        if (parseInt(pokemonExiste.rows[0].count) === 0) {
            return res.status(404).json({ mensagem: "Este pokemon não existe." });
        }

        const pokemonExcluido = await pool.query(`delete
        from pokemons
        where id = $1
        and usuario_id = $2
        returning *`, [parseInt(id), usuario.id]);

        return res.status(200).json(pokemonExcluido.rows[0]);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor" });
    }
}

module.exports = pokemons;