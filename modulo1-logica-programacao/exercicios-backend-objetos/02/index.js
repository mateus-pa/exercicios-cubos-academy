const carros = [
    {
        marca: "Chevrolet",
        modelo: "Camaro",
        ano: 2023,
        cor: "Preto",
        quantidadePortas: 2,
        automatico: false
    },
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2008,
        cor: "Prata",
        quantidadePortas: 4,
        automatico: false
    },
    {
        marca: "Tesla",
        modelo: "Model S",
        ano: 2022,
        cor: "Vermelho",
        quantidadePortas: 4,
        automatico: true
    }
];

for (let carro of carros) {
    console.log(carro);
}