const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const alunosAtualizados = alunos.map(nome => nome.toUpperCase());

const reprovados = alunosAtualizados.filter((nome, indice) => {
    return medias[indice] < 7;
});

const aprovados = alunosAtualizados.filter((nome, indice) => {
    return medias[indice] >= 7;
});


console.log(`Aluno(s) reprovados em filosofia: ${reprovados}`);
console.log(`Aluno(s) aprovados em filosofia: ${aprovados}`);