const { listarPokemons, detalharPokemon } = require('utils-playground');

let pagina = 1;

const listarColecaoPokes = async function (req, res) {
    try {
        let pokemons = await listarPokemons(pagina);

        if (!pokemons.results) {
            pagina = 1;
            pokemons = await listarPokemons(pagina);
        }

        pagina++;

        return res.status(200).json(pokemons.results);
    } catch (erro) {
        return res.status(erro.response.status).json({ erro: `${erro.message}` });
    }
}

const detalharPoke = async function (req, res) {
    let { path } = req.params;

    if (parseInt(path)) {
        path = parseInt(path);
    }

    if (!parseInt(path) && path !== path.toLowerCase()) {
        return res.status(400).json({ message: 'O caminho dessa URL precisa ser composto somente de caracteres minúsculos.' });
    }

    try {
        const pokemon = await detalharPokemon(path);

        const pokeSaida = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species
        };

        return res.status(200).json(pokeSaida);
    } catch (erro) {
        return res.status(erro.response.status).json({ erro: `${erro.message}` });
    }
}

module.exports = {
    listarColecaoPokes,
    detalharPoke
}