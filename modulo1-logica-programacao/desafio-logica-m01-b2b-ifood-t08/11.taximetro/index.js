function solucao(min, km) {
    let precoKilometroPercorrido = 0;
    let precoMinutoPercursoPercorrido = 0;

    const calculoMaisDe10Km = km > 10 ? true : false;
    const calculoMaisDe20Min = min > 20 ? true : false;

    if (calculoMaisDe10Km) {
        precoKilometroPercorrido = 10 * 70;
        precoKilometroPercorrido += (km - 10) * 50;
    } else {
        precoKilometroPercorrido = km * 70;
    }

    if (calculoMaisDe20Min) {
        precoMinutoPercursoPercorrido = 20 * 50;
        precoMinutoPercursoPercorrido += (min - 20) * 30;
    } else {
        precoMinutoPercursoPercorrido = min * 50;
    }

    const valorAPagar = precoKilometroPercorrido + precoMinutoPercursoPercorrido;
    console.log(valorAPagar);
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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