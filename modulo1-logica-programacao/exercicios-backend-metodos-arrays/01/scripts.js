const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// letra A - resposta
frutas.reverse();
const arrayInvertido = frutas.join(", ");

console.log(arrayInvertido);

// letra B - resposta
frutas.reverse();
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");

console.log(frutas);