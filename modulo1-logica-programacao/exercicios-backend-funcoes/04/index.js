const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({ tipo: "Depósito", valor: valor });
        return `Depósito de R$${(valor / 100)} realizado para o(a) cliente: ${this.nome}`;
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.historicos.push({ tipo: "Saque", valor: valor });
            return `Saque de R$${(valor / 100)} realizado para o(a) cliente: ${this.nome}`;
        } else {
            return `Saldo insuficiente para o saque de: ${this.nome} `;
        }
    },
    extrato: function () {
        let mensagem = `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100)}\nHistórico:`;
        for (let operacao of this.historicos) {
            mensagem += `\n${operacao.tipo} de R$${(operacao.valor / 100)}`;
        }
        return mensagem;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());