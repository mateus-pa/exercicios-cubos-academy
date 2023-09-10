let populacaoInicial, possiveisAlvos, tempo, totalInfectados;

populacaoInicial = 1000;
possiveisAlvos = 4;
tempo = 7;

totalInfectados = populacaoInicial * (Math.pow(possiveisAlvos, tempo / 7));
console.log(totalInfectados);