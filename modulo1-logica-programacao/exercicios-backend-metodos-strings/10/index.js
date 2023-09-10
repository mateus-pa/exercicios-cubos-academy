const nomeArquivo = 'Foto da Familia.png';

const extensaoArquivo = nomeArquivo.slice(nomeArquivo.indexOf("."), nomeArquivo.length);

if (extensaoArquivo === ".jpg" || extensaoArquivo === ".jpeg"
    || extensaoArquivo === ".gif" || extensaoArquivo === ".png") {
    console.log("Arquivo válido");
} else {
    console.log("Arquivo inválido");
}