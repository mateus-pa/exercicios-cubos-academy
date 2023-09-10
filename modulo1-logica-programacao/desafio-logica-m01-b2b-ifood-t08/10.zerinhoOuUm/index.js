function solucao(jogadores) {
    const jogadasComUm = jogadores.filter(function (jogador) {
        return jogador.jogada === 1;
    });

    const jogadasComZero = jogadores.filter(function (jogador) {
        return jogador.jogada === 0;
    });

    if (jogadasComUm.length === 1) {
        console.log(jogadasComUm[0].nome);
    } else if (jogadasComZero.length === 1) {
        console.log(jogadasComZero[0].nome);
    } else {
        console.log("NINGUEM");
    }
}

function processData(input) {
    solucao(JSON.parse(input));
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