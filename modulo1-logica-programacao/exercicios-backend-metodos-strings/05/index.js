const numeroCartao = '1111222233334444';

let numeroCartaoOcultado = numeroCartao.slice(0, 4);

for (let i = 0; i < numeroCartao.length - 8; i++) {
    numeroCartaoOcultado += "*";
}

numeroCartaoOcultado += numeroCartao.slice(-4);

console.log(numeroCartaoOcultado);