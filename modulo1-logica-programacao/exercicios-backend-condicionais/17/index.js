//valor do produto comprado.
const valorDoProduto = 1_000_00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento / 100;
const numParcelasAPagar = ((valorDoProduto / 100) - valorPago) / valorParcela;
const mensagem = quantidadeDoParcelamento === 1 ? `Resta ${quantidadeDoParcelamento}` : `Restam ${numParcelasAPagar}`;
console.log(`${mensagem} parcelas de R$${valorParcela}`);