const cpf = "011.022.033-44";

let cpfFormatado = cpf;
while (cpfFormatado !== cpfFormatado.replace(".", "")) {
    cpfFormatado = cpfFormatado.replace(".", "");
    cpfFormatado = cpfFormatado.replace("-", "");
}

console.log(cpfFormatado);