const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

// programadores e programadoras que sejam maiores de 20 anos
const arrayFiltradoUm = pessoas.filter(function (pessoa) {
    return pessoa.idade > 20 && pessoa.profissao === "Programador";
});
console.log(arrayFiltradoUm);

// jornalistas que tenha mais de 30 anos
const arrayFiltradoDois = pessoas.filter(function (pessoa) {
    return pessoa.idade > 30 && pessoa.profissao === "Jornalista";
});
console.log(arrayFiltradoDois);

// jornalistas e programadores e programadoras que sejam jovens (até 29 anos)
const arrayFiltradoTres = pessoas.filter(function (pessoa) {
    return pessoa.idade <= 29 && (pessoa.profissao === "Jornalista" || pessoa.profissao === "Programador");
});
console.log(arrayFiltradoTres);

