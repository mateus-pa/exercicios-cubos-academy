const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce(function (acumulador, elementoAtual) {
    let maior = acumulador;

    if (elementoAtual > maior) {
        maior = elementoAtual;
    }

    return maior;
});

console.log(maiorNumero);