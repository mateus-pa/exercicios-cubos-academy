function automatizarFilaAtendimento(pacientes, tipoOperacao, nomePaciente) {
    // atendimento
    if (tipoOperacao === "atender") {
        pacientes.splice(0, 1);
        console.log(pacientes.join());
    }
    // agendamento
    if (tipoOperacao === "agendar") {
        pacientes.splice(pacientes.length, 0, nomePaciente);

        console.log(pacientes.join());
    }
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

automatizarFilaAtendimento(pacientes, "atender");

automatizarFilaAtendimento(pacientes, "agendar", "Jorge");