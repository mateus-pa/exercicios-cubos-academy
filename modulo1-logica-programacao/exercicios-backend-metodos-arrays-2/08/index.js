const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
let indice = -1;

const frutasAtualizado = frutas.map(function (fruta) {
    indice++;
    let frutaFormatada = fruta.toLowerCase();
    frutaFormatada = frutaFormatada.replace(frutaFormatada.charAt(0), frutaFormatada.charAt(0).toUpperCase());
    return `${indice} - ${frutaFormatada}`;
});

console.log(frutasAtualizado);