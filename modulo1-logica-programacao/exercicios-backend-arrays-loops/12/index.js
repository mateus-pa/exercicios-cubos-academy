const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5 && filaDeFora.length != 0) {
    const pessoa = filaDeFora.shift();
    filaDeDentro.push(pessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);