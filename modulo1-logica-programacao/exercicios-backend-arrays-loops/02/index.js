const letras = ["A", "a", "B", "C", "E", "e"];

let temLetraE = false;
let somaLetraE = 0;

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        temLetraE = true;
        somaLetraE++;
    }
}

if (temLetraE) {
    console.log(`Foram encontradas ${somaLetraE} letras "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}