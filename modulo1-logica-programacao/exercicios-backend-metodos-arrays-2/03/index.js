const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function verificarTemBebida(palavras) {
    const resultado = palavras.some(function (item) {
        return item === "cerveja" || item === "vodka";
    });

    if (resultado) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    }
}

verificarTemBebida(palavras);