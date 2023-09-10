const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    corrigirProva: function () {
        let totalAcertos = 0;
        let notaPorQuestao = this.valor / this.questoes.length;
        for (let questao of this.questoes) {
            if (questao.resposta === questao.correta) {
                totalAcertos++;
            }
        }
        const totalNota = totalAcertos * notaPorQuestao;
        const mensagem = totalAcertos === 1 ? "questão" : "questões";
        console.log(`O aluno(a) ${this.aluno} acertou ${totalAcertos} ${mensagem} e obteve a nota ${totalNota}`);
    }
};

prova.corrigirProva();