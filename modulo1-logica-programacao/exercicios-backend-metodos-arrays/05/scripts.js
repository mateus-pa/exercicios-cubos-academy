function agendarAtendimento(pacientes, nomePaciente) {
    pacientes.splice(pacientes.length, 0, nomePaciente);
    console.log(pacientes.join());
}

function atenderPaciente(pacientes) {
    pacientes.splice(0, 1);
    console.log(pacientes.join());
}

function cancelarAtendimento(pacientes, nomePaciente) {
    const indicePaciente = pacientes.indexOf(nomePaciente);
    pacientes.splice(indicePaciente, 1);
    console.log(pacientes.join());
}


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

agendarAtendimento(pacientes, "Valdemir");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Ana");