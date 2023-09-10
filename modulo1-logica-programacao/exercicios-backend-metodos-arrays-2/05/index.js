const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const arrayFiltrado = usuários.filter(function (usuario) {
    return usuario.idade >= 18 && usuario.idade <= 65;
});

const todosHabilitados = arrayFiltrado.every(function (usuarioFiltrado) {
    return usuarioFiltrado.habilitado === true;
});

if (todosHabilitados) {
    console.log("todos passaram no teste");
} else {
    console.log("todos precisam estar habilitados");
}