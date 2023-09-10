function agruparCarros(nomeCarros, posicao) {
    const carrosSelecionados = nomeCarros.splice(posicao, 3);
    console.log(carrosSelecionados.join(" - "));
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

agruparCarros(nomes, posicao);