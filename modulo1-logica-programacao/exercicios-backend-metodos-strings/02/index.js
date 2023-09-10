const cpf = "12309";
const cnpj = "12345678900";

if (cpf.length === 11) {
    let cpfFormatado = "";
    let slicePosition = 0;
    let posicaoAnterior;

    while (cpfFormatado.length !== 8) {
        posicaoAnterior = slicePosition;
        slicePosition += 3;
        cpfFormatado += cpf.slice(posicaoAnterior, slicePosition) + ".";
    }

    posicaoAnterior = slicePosition;
    slicePosition += 3;
    cpfFormatado += cpf.slice(posicaoAnterior, slicePosition);

    cpfFormatado += "-" + cpf.slice(-2);

    console.log(cpfFormatado);
} else {
    console.log("CPF Inválido");
}

if (cnpj.length === 14) {
    let cnpjFormatado = "";
    let slicePosition = 0;
    let posicaoAnterior;

    cnpjFormatado += cnpj.slice(0, 2);

    while (cnpjFormatado.length !== 10) {
        posicaoAnterior = slicePosition;
        slicePosition += 3;
        cnpjFormatado += "." + cnpj.slice(posicaoAnterior, slicePosition);
    }

    posicaoAnterior = slicePosition;
    slicePosition += 4;
    cnpjFormatado += "/" + cnpj.slice(posicaoAnterior, slicePosition);

    cnpjFormatado += "-" + cnpj.slice(-2);

    console.log(cnpjFormatado);
} else {
    console.log("CNPJ Inválido");
}