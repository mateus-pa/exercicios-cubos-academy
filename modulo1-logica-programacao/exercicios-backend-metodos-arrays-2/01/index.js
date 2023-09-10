const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function acharLivro(livros, nomeDoLivro) {
    const resultado = livros.findIndex(function (livro) {
        return livro === nomeDoLivro;
    });

    if (resultado === -1) {
        console.log("Livro não encontrado");
    } else {
        console.log(`O livro está na posição ${resultado + 1}`);
    }
}

acharLivro(livros, nomeDoLivro);