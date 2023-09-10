const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const arrayFiltradoNomesIniciadosComA = nomes.filter(function (nome) {
    return nome.charAt(0) === "A" || nome.charAt(0) === "a";
});

console.log(arrayFiltradoNomesIniciadosComA);