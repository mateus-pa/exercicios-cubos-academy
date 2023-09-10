function solucao(numeros) {
    const valorS = numeros.reduce(function (acumulador, elementoAtual) {
        return acumulador + elementoAtual;
    });
    let indice = 1;
    let posicaoS = 1;
    while (posicaoS < valorS) {

        if (indice === numeros.length) {
            indice = 0;
        }
        posicaoS++;
        indice++;
        if (posicaoS === valorS) {
            console.log(indice);
        }
    }
}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10))
    }
    solucao(numeros)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});