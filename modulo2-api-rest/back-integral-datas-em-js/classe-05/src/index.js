const { isBefore, isAfter, startOfHour, endOfMinute, getDay } = require('date-fns');

const taAberto = function (dataEntrada) {
    let horarioAbertura = new Date(dataEntrada);
    let horarioFechamento = new Date(dataEntrada);

    horarioAbertura.setHours(8 - 3);
    horarioAbertura = startOfHour(horarioAbertura);

    horarioFechamento.setHours(18 - 3);
    horarioFechamento = endOfMinute(horarioFechamento);

    const finalDeSemana = getDay(dataEntrada) === 0 || getDay(dataEntrada) === 6 ? true : false;

    if (!finalDeSemana) {
        return isBefore(dataEntrada, horarioFechamento) && isAfter(dataEntrada, horarioAbertura);
    }

    if (getDay(dataEntrada) === 6) {
        horarioAbertura.setHours(8 - 3);
        horarioAbertura = startOfHour(horarioAbertura);

        horarioFechamento.setHours(12 - 3);
        horarioFechamento = endOfMinute(horarioFechamento);

        return isBefore(dataEntrada, horarioFechamento) && isAfter(dataEntrada, horarioAbertura);
    }

    return false;
}

console.log(taAberto(new Date(2021, 3, 25, 12 - 3)));

console.log(taAberto(new Date(2021, 3, 26, 12 - 3)));

console.log(taAberto(new Date(2021, 3, 26, 7 - 3, 59)));

console.log(taAberto(new Date(2021, 3, 24, 9 - 3, 30)));