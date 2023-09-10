const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);

        const totalProdutos = this.calcularTotalDeItens();
        const mensagem = totalProdutos === 1 ? "item" : "itens";
        console.log(`Total de itens: ${totalProdutos} ${mensagem}`);

        const totalAPagarReais = ((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2);
        console.log(`Total a pagar: R$ ${totalAPagarReais}`);
    },
    addProduto: function (novoProduto) {
        produtoIgualNaLista = false;
        for (let produto of this.produtos) {
            if (produto.id === novoProduto.id) {
                produtoIgualNaLista = true;
                produto.qtd += novoProduto.qtd;
                break;
            }
        }
        if (!produtoIgualNaLista) {
            this.produtos.push(novoProduto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log();

        for (let produto of this.produtos) {
            const valorTotalProduto = (produto.qtd * produto.precoUnit / 100).toFixed(2);
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${valorTotalProduto}`);
        }
        console.log();

        const totalProdutos = this.calcularTotalDeItens();
        const mensagem = totalProdutos === 1 ? "item" : "itens";
        console.log(`Total de itens: ${totalProdutos} ${mensagem}`);

        const totalAPagarReais = ((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2);
        console.log(`Total a pagar: R$ ${totalAPagarReais}`);
    },
    calcularTotalDeItens: function () {
        let totalProdutos = 0;
        for (let produto of this.produtos) {
            totalProdutos += produto.qtd;
        }
        return totalProdutos;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    },
    calcularDesconto: function () {
        let desconto1 = 0;
        let desconto2 = 0;
        let desconto = 0;
        if (this.calcularTotalDeItens() > 4) {
            let produtoMaisBarato = 999999999999999;
            for (let produto of this.produtos) {
                if (produto.precoUnit < produtoMaisBarato) {
                    produtoMaisBarato = produto.precoUnit;
                }
            }

            desconto1 = produtoMaisBarato;
        }
        if (this.calcularTotalAPagar() > 100_00) {
            desconto2 = this.calcularTotalAPagar() * 0.10;
        }

        if (desconto1 >= desconto2) {
            desconto = desconto1;
            return desconto;
        } else {
            desconto = desconto2;
            return desconto;
        }
    }
}

carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


carrinho.addProduto(novaBermuda);
console.log();
carrinho.imprimirResumo();
console.log(carrinho.calcularDesconto());

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
console.log();
carrinho.imprimirResumo();
console.log(carrinho.calcularDesconto());