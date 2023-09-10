const email = "jose@cubos.academy"

const temArrouba = email.includes("@");

const temPonto = email.includes(".");

const temPontoNoComeco = email.charAt(0) === ".";

const temPontoNoFinal = email.charAt(email.length - 1) === ".";

if (temArrouba && temPonto && !temPontoNoComeco && !temPontoNoFinal) {
    console.log("E-mail válido");
} else {
    console.log("E-mail inválido");
}