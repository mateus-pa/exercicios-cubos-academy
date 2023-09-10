function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];

    const cartaProcuradaIndex = cartas.findIndex(function (cartaBusca) {
        return carta === cartaBusca;
    });

    if (carta !== '3') {
        console.log(cartas[cartaProcuradaIndex + 1]);
    } else {
        console.log(cartas[0]);
    }
}

function processData(input) {
    solucao(input);
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