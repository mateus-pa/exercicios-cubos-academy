function dividirGrupos(nomes, tamanhoDoGrupo) {
    const grupos = [];
    const initialPosition = 0;
    // criação de grupos com 4 pessoas
    while (nomes.length >= tamanhoDoGrupo) {
        const grupo = nomes.splice(initialPosition, tamanhoDoGrupo);
        grupos.push(grupo);
    }
    // criação do último grupo com o resto dos nomes (menos de 4 pessoas)
    if (nomes.length > 0) {
        grupos.push(nomes);
    }
    // "print" dos grupos na tela
    for (let i = 0; i < grupos.length; i++) {
        const grupoString = grupos[i].join(", ");
        console.log(`Grupo ${i + 1}: ${grupoString}`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

dividirGrupos(nomes, tamanhoDoGrupo);