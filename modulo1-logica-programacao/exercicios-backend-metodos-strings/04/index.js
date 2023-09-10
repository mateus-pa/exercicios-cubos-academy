let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


let nomeFormatado = "";
const arrayNome = nome.split(" ");

for (let nome of arrayNome) {
    nomeFormatado += nome.replace(nome.charAt(0), (nome.charAt(0)).toUpperCase()) + " ";
}

let emailFormatado = email.trim();

let identificadorFormatado = identificador.padStart(6, "0");

const funcionario = {
    identificador: identificadorFormatado,
    nome: nomeFormatado,
    email: emailFormatado
};

console.log(funcionario.identificador);
console.log(funcionario.nome);
console.log(funcionario.email);