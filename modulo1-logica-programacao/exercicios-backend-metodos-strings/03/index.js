const texto = "Aprenda programar do zero na Cubos Academy";

let textoFormatado = texto;

while (textoFormatado !== textoFormatado.replace(" ", "-")) {
    textoFormatado = textoFormatado.replace(" ", "-");
}

console.log(textoFormatado.toLowerCase());