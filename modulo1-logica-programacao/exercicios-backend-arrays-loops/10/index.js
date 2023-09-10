const numeros = [8, 11, 4, 1];

let maiorNumero = 0;
let diferenca;

// maior número
for (let numero of numeros) {
    if (maiorNumero === 0) {
        maiorNumero = numero;
    }
    if (maiorNumero < numero) {
        maiorNumero = numero;
    }
}

// menor número
let menorNumero = maiorNumero;
for (let numero of numeros) {
    if (menorNumero > numero) {
        menorNumero = numero;
    }
}

diferenca = maiorNumero - menorNumero;
console.log(diferenca);