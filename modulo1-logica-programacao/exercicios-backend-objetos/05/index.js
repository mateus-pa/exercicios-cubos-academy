const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

for (let i = 0; i < 4; i++) {
    const identificador = i + 1;
    let nomeDaAula;
    if (identificador === 1) {
        nomeDaAula = "Introdução a programação";
    } else if (identificador === 2) {
        nomeDaAula = "Variáveis";
    } else if (identificador === 3) {
        nomeDaAula = "Condicionais";
    } else {
        nomeDaAula = "Arrays";
    }

    curso.aulas[i] = {
        identificador: identificador,
        nomeDaAula: nomeDaAula
    }
}

console.log(curso);