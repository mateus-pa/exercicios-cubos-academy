const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = 0;

for (let numero of numeros) {
    if (maiorNumero < numero) {
        maiorNumero = numero;
    }
}

console.log(maiorNumero);