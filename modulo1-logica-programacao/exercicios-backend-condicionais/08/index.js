const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const podeEntrar = possuiPatologia || idade >= 65 || idade < 12 || altura < 150 ? false : true;

if (podeEntrar) {
    const precoPagar = ehEstudante || idade < 18 ? 10 : 20;
    console.log(`${precoPagar} reais`);
} else {
    console.log("ACESSO NEGADO");
}