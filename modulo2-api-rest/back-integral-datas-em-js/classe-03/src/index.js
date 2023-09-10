const { isBefore, isAfter, startOfHour, endOfMinute } = require('date-fns');

const taAberto = function (horarioTeste) {
    const aberturaLoja = startOfHour(new Date(2015, 1, 1, 5));
    const fechamentoLoja = endOfMinute(new Date(2015, 1, 1, 15));

    if (isBefore(horarioTeste, fechamentoLoja) && isAfter(horarioTeste, aberturaLoja)) {
        return true;
    }

    return false;
}

console.log(taAberto(new Date(2015, 1, 1, (12 - 3))));

console.log(taAberto(new Date(2015, 1, 1, (2 - 3))));