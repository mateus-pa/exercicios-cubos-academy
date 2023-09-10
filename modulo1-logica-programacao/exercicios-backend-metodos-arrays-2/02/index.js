const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

function verificarTemCincoCaracteres(palavras) {
    const resultado = palavras.some(function (palavra) {
        return palavra.length === 5;
    });

    if (resultado) {
        console.log("existe palavra inválida");
    } else {
        console.log("array validado");
    }
}

verificarTemCincoCaracteres(palavras);