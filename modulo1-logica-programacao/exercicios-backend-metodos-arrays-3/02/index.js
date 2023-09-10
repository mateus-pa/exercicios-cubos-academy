const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const cidadeMaisCaracteres = cidades.reduce(function (acumulador, elementoAtual) {
    let maiorLength = acumulador;

    if (elementoAtual.length > maiorLength.length) {
        maiorLength = elementoAtual;
    }

    return maiorLength;
});

console.log(cidadeMaisCaracteres);