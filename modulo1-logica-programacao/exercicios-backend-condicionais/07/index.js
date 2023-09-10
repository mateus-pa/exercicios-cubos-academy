const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000; //emCentavos

const limiteIsencao = 2_855_970;
const resultadoIsencao = aposentada || portadoraDeDoenca ? true : false;

if (!resultadoIsencao) {
    if (totalDeRendimentos < limiteIsencao) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
    } else {
        console.log("PEGA LEAO");
    }
} else {
    console.log("ISENTA");
}