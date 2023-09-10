const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    if (usuario.pets.length === 0) {
        console.log(`Sou ${usuario.nome} e não tenho pets`);
    } else if (usuario.pets.length === 1) {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pet`);
    } else {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
    }
}