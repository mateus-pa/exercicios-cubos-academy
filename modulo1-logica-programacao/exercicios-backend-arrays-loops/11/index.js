const original = [5, 7, 13, 17, 26, 34, 118, 245];

const arrayPrint = [];

for (let numero of original) {
    if (numero > 100 || (numero >= 10 && numero <= 20)) {
        arrayPrint.push(numero);
    }
}

console.log(arrayPrint);