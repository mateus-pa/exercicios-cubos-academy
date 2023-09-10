const somar = function (req, res) {
    const { num1, num2 } = req.query;
    const soma = Number(num1) + Number(num2);
    res.send(soma.toString());
}

const subtrair = function (req, res) {
    const { num1, num2 } = req.query;
    const subtracao = Number(num1) - Number(num2);
    res.send(subtracao.toString());
}

const multiplicar = function (req, res) {
    const { num1, num2 } = req.query;
    const multiplicacao = Number(num1) * Number(num2);
    res.send(multiplicacao.toString());
}

const dividir = function (req, res) {
    const { num1, num2 } = req.query;
    const divisao = Number(num1) / Number(num2);
    res.send(divisao.toString());
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}