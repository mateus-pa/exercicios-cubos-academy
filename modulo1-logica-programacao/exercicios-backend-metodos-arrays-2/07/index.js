const endereços = [
    { cep: "00111222", rua: "Rua dos Artistas" },
    { cep: "00111333", rua: "Rua Augusta" },
    { cep: "00222444", rua: "Avenida Paralela" },
    { cep: "11222333", rua: "Rua Carlos Gomes" },
];
function acharNomeDaRua(endereços, cepInformado) {
    const enderecoCompleto = endereços.find(function (endereco) {
        return endereco.cep === cepInformado;
    });

    console.log(enderecoCompleto.rua);
}

acharNomeDaRua(endereços, "00222444");