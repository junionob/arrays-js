//Dimensões: array dentro de arrya;

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 15.0, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

//console.log(listaDeAlunosEMedias); [ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]


// lista dentro de lista[][]:O primiro [], refere-se a qual lista será acessada. O segundo [], refere-se ao item da lista;
console.log(`A aluna com maior nota da turma é ${listaDeAlunosEMedias[0][1]},
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`); // A aluna com maior nota da turma é Juliana, A nota dessa aluna é 15
