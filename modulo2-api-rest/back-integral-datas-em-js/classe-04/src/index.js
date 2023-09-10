const { isBefore, isAfter, startOfHour, endOfMinute, getDay } = require('date-fns');

const taAberto = function (dataEntrada) {
    let horarioAbertura = new Date(dataEntrada);
    let horarioFechamento = new Date(dataEntrada);

    horarioAbertura.setHours(5);
    horarioAbertura = startOfHour(horarioAbertura);

    horarioFechamento.setHours(15);
    horarioFechamento = endOfMinute(horarioFechamento);

    const finalDeSemana = getDay(dataEntrada) === 0 || getDay(dataEntrada) === 6 ? true : false;

    if (!finalDeSemana && isBefore(dataEntrada, horarioFechamento) && isAfter(dataEntrada, horarioAbertura)) {
        return true;
    }

    return false;
}

console.log(taAberto(new Date(2021, 3, 25, 12 - 3)));

console.log(taAberto(new Date(2021, 3, 26, 12 - 3)));

console.log(taAberto(new Date(2021, 3, 26, 7 - 3, 59)));