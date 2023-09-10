const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

let i = 0;

while (i < original.length) {
    if (original[i] % 2 === 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }

    i++;
}

console.log(pares);
console.log(impares);