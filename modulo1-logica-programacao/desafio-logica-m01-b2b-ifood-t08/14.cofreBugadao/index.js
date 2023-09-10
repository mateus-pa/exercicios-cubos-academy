function processData(input) {
    const arrayInput = input.trim().split("\n");
    const senha = arrayInput[0];
    let senhaDigitada = arrayInput[1];

    let ordenadoCorretamente = true;
    for (let i = 0; i < senha.length; i++) {
        const verificadorIndice = senhaDigitada.indexOf(senha[i]);

        if (verificadorIndice === -1) {
            ordenadoCorretamente = false;
            break;
        } else {
            senhaDigitada = senhaDigitada.slice(verificadorIndice + 1);
        }
    }

    const mensagemOrdem = ordenadoCorretamente ? "SIM" : "NAO";
    console.log(mensagemOrdem);
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