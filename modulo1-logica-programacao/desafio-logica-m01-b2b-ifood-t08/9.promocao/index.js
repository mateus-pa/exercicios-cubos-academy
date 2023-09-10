function solucao(precos) {
    let menorValor = precos[0];
    let valorTotalAPagar = 0;

    for (let preco of precos) {
        valorTotalAPagar += preco;
        if (preco < menorValor) {
            menorValor = preco;
        }
    }

    if (precos.length >= 3) {
        valorTotalAPagar -= menorValor * 0.5;
    }

    console.log(valorTotalAPagar);
}



function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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