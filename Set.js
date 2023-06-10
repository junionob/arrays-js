const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //Classe Set(), remove itens duplicados de um array;

const nomesAtualizados = [...meuSet]

//const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados)