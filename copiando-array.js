const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; //operador de espalhamento, (spread operator)
//evita que altere o array original criando um novo array

// const novasNotas = [...notas, 10] adiciona 10 ao final do array

novasNotas.push(10);

console.log(`As novas notas são: ${novasNotas}`)
console.log(`As antigas notas  são: ${notas}`);