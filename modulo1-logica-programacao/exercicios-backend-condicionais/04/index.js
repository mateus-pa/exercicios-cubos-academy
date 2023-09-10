const ladoA = 3;
const ladoB = 3;

const bucha = ladoA === ladoB ? true : false;

if (bucha) {
    if (ladoA === 0) {
        console.log("Bucha de branco");
    } else if (ladoA === 1) {
        console.log("Bucha de ás");
    } else if (ladoA === 2) {
        console.log("Bucha de duque");
    } else if (ladoA === 3) {
        console.log("Bucha de terno");
    } else if (ladoA === 4) {
        console.log("Bucha de quadra");
    } else if (ladoA === 5) {
        console.log("Bucha de quina");
    } else {
        console.log("Bucha de sena");
    }
} else {
    console.log("NÃO");
}