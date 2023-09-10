const numeros = [0, 122, 4, 6, 7, 8, 44];

function verificarTodosSaoPares(numeros) {
    const resultado = numeros.every(function (numero) {
        return numero % 2 === 0;
    });

    if (resultado) {
        console.log("array válido");
    } else {
        console.log("array inválido");
    }
}

verificarTodosSaoPares(numeros);