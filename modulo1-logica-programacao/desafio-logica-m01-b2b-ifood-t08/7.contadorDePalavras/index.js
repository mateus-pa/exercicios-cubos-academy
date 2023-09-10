function solucao(texto) {
    let textoFormato = texto.trim().split(" ");

    textoFormato = textoFormato.filter(function (palavraTeste) {
        return palavraTeste !== "";
    });

    console.log(textoFormato.length);
}

function processData(input) {
    solucao(input)
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