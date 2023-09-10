const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    let nickname = nome;

    if (nickname.charAt(0) !== "@") {
        nickname = "@" + nome;
    }

    if (nickname.includes(" ")) {
        while (nickname !== nickname.replace(" ", "")) {
            nickname = nickname.replace(" ", "");
        }
    }

    if (nickname.length > 13) {
        nickname = nickname.slice(0, 13);
    }

    nickname = nickname.toLowerCase();

    return nickname;
}

console.log(gerarNickname(nome));