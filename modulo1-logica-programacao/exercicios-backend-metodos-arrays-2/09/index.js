const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const arrayFiltradoNumerosPositivos = numeros.filter(function (numero) {
    return numero > 0;
});

console.log(arrayFiltradoNumerosPositivos);