function processData(input) {
    const entradaArray = input.trim().split("\n");
    const numFuncionarios = parseInt(entradaArray.shift());;

    const arrayObjCordenadas = entradaArray.map(function (coordenada) {
        const arrayCoordenada = coordenada.trim().split(" ");
        return {
            eixoX: arrayCoordenada[0],
            eixoY: arrayCoordenada[1]
        }
    });
    let maiorDistancia = 0;

    for (let i = 0; i < arrayObjCordenadas.length; i++) {
        for (let j = 0; j < arrayObjCordenadas.length; j++) {
            const calc = Math.pow((arrayObjCordenadas[i].eixoX - arrayObjCordenadas[j].eixoX), 2) + Math.pow((arrayObjCordenadas[i].eixoY - arrayObjCordenadas[j].eixoY), 2);
            const totalDistancia = Math.sqrt(calc, 2);

            if (totalDistancia > maiorDistancia) {
                maiorDistancia = totalDistancia;
            }
        }
    }

    console.log(maiorDistancia);
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