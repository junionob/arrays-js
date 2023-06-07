const numerosPares = [2, 4, 6];
const numerosImpares = [1, 2, 3];

//const numeros = [numerosPares, numerosImpares];
//               [ [ 2, 4, 6 ], [ 1, 2, 3 ] ]
const numeros = [...numerosPares, ...numerosImpares];
//                        [ 2, 4, 6, 1, 2, 3 ]
//console.log(numeros)

// const [num1, num2] = [1, 2];

// console.log(num1, num2); //1 2

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]; 
//            1 2 [ 3, 4, 5 ]


const [nome1 = 'Ju'] = [] //Ju

const pessoa = {
    nome: "Junio",
    idade: 24
}

const pessoaComTelefone = {...pessoa, telefone: "(61)98277-6027"}

/* { nome: 'Junio', 
        Idade: 24 
    } 
    {   nome: 'Junio', 
        Idade: 24, 
        telefone: '(61)98277-6027' 
    }
 */

const {idade} = pessoa // 24

function imprimeDados(dados){
    console.log(dados);
}

imprimeDados(pessoa) //{ nome: 'Junio', idade: 24 }


console.log(idade); 

