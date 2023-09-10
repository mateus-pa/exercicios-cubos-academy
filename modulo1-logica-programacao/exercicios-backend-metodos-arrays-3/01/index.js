const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

// ordem crescente
numeros.sort(function (a, b) {
    return a - b;
});

console.log(numeros);

// ordem decrescente
numeros.sort(function (a, b) {
    return b - a;
});

console.log(numeros);

// ordem crescente (padrão Unicode)
numeros.sort();
console.log(numeros);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// ordem crescente string
frutas.sort(function (a, b) {
    return a.localeCompare(b);
});

console.log(frutas);

// ordem decrescente string
frutas.sort(function (a, b) {
    return b.localeCompare(a);
});

console.log(frutas);

// ordem crescente string length
frutas.sort(function (a, b) {
    return a.length - b.length;
});

console.log(frutas);