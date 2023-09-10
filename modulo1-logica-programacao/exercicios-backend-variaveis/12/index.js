let taxaJuros, montante, capitalInicial, numMeses;

montante = 90_000;
capitalInicial = 60_000;
numMeses = 24;

taxaJuros = Math.pow(montante / capitalInicial, 1 / numMeses) - 1;
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros * 100}%, pois após ${numMeses} meses você teve que pagar ${montante} reais.`);