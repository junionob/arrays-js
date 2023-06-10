const notas = [10, 9.5, 8, 7, 6];

// metodo map atualiza os itens do array.
const notasAtulizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; //operador ternário "?" verifica uma condição se verdadeira 
    //executa o que há após os dois pontos. 
});

console.log(notasAtulizadas);
