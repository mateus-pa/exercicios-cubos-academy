let montante, capital, taxaJuros, tempo;

taxaJuros = 12.5 / 100;
capital = 1000;
tempo = 5;

montante = capital * Math.pow((1 + taxaJuros), tempo);
console.log(montante);