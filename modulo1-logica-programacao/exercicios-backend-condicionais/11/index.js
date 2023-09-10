//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 1_500_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

const deve = totalJaPagoPeloAluno < 18_000_00 || mesesDecorridos < 60 ? true : false;
if (deve) {
    if (rendaMensalEmCentavos >= 2_000_00) {
        const valorAPagar = rendaMensalEmCentavos * 0.0018;
        console.log(`O valor da parcela desse mês é R$ ${valorAPagar} reais`);
    } else {
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
    }
} 