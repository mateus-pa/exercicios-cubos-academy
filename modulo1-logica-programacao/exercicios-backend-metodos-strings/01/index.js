const comentario = "Esse COVID é muito perigoso!";

const arrayPalavras = comentario.split(" ");
let mensagem = "Comentário autorizado";

for (let palavra of arrayPalavras) {
    if (palavra === "covid" || palavra === "pandemia" || palavra === ("covid").toUpperCase()
        || palavra === ("pandemia").toUpperCase() || palavra === ("covid").replace(("covid").charAt(0), ("covid").charAt(0).toUpperCase())
        || palavra === ("pandemia").replace(("pandemia").charAt(0), ("pandemia").charAt(0).toUpperCase())) {
        mensagem = "Comentário bloqueado por conter palavras proibidas";
        break;
    }
}

console.log(mensagem);