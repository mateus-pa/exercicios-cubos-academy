let velocidade, distMetros, tempoSec;
const conversaoKmH = 3.6;

distMetros = 500;
tempoSec = 10;

velocidade = (distMetros / tempoSec) * conversaoKmH;

console.log(`Velocidade = ${velocidade}km/h`);