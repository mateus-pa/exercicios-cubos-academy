function solucao(lista) {
    const maioresDeIdade = lista.filter(function (idade) {
        return idade >= 18;
    });

    if (maioresDeIdade.length === 0) {
        console.log("CRESCA E APARECA");
    } else {
        const menorIdade = maioresDeIdade.reduce(function (acumulador, elementoAtual) {
            let menorNumero = acumulador;

            if (elementoAtual < menorNumero) {
                menorNumero = elementoAtual;
            }

            return menorNumero;
        });

        console.log(menorIdade);
    }
}



function processData(input) {
    //Enter your code here
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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