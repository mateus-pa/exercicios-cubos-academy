const numeros = [54, 22, 14, 87, 10, 284];

let tem10 = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        tem10 = i;
        break;
    }
}

console.log(tem10);
