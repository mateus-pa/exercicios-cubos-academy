//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const porcentagemDesconto = 0.05;
    const valorAPagarReais = ((valorDoProduto - (valorDoProduto * porcentagemDesconto)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valorAPagarReais}`);
} else if (tipoDePagamento === "cheque") {
    const porcentagemDesconto = 0.03;
    const valorAPagarReais = ((valorDoProduto - (valorDoProduto * porcentagemDesconto)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valorAPagarReais}`);
} else {
    const porcentagemDesconto = 0.10;
    const valorAPagarReais = ((valorDoProduto - (valorDoProduto * porcentagemDesconto)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valorAPagarReais}`);
}