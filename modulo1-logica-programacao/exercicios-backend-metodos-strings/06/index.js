const celular = 7199918888;

const celularString = String(celular);
let celularFormatado = "";
if (celularString.length === 9) {
    celularFormatado += celularString.slice(0, 1) + " " + celularString.slice(2, 5) + "-" + celularString.slice(5, celularString.length);
} else if (celularString.length === 11) {
    celularFormatado += "(" + celularString.slice(0, 2) + ") " + celularString.slice(2, 3) + " " + celularString.slice(3, 7) + "-" + celularString.slice(7, celularString.length);
} else if (celularString.length === 8) {
    celularFormatado += 9 + " " + celularString.slice(0, 4) + "-" + celularString.slice(4, celularString.length);
} else if (celularString.length === 10) {
    celularFormatado += "(" + celularString.slice(0, 2) + ") " + 9 + " " + celularString.slice(2, 6) + "-" + celularString.slice(6, celularString.length);
}

console.log(celularFormatado);