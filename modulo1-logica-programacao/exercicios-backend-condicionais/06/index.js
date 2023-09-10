const alturaEmCm = 185;

const peneiraResultado = alturaEmCm >= 180 ? true : false;

if (peneiraResultado) {
    if (alturaEmCm <= 185) {
        console.log("LÍBERO");
    } else if (alturaEmCm <= 195) {
        console.log("PONTEIRO");
    } else if (alturaEmCm <= 205) {
        console.log("OPOSTO");
    } else {
        console.log("CENTRAL");
    }
} else {
    console.log("REPROVADO");
}