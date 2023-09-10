function encontrarDonoDoPet(usuarios, petNome) {
    let donoNome = "";
    for (let usuario of usuarios) {
        for (let pet of usuario.pets) {
            if (pet.includes(petNome)) {
                donoNome = usuario.nome;
            }
        }
    }
    if (donoNome === "") {
        console.log(`Que pena ${petNome}, não encontramos seu dono(a)`);
    } else {
        console.log(`O dono(a) do(a) ${petNome} é o(a) ${donoNome}`);
    }

}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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
    }
]

encontrarDonoDoPet(usuarios, "Max");