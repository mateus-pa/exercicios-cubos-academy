const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = [];

for (let nome of nomes) {
    for (let letra of nome) {
        if (letra === "A" || letra === "a") {
            nomesComA.push(nome);
        }
        break;
    }
}

console.log(nomesComA);