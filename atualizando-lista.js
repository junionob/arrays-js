const nomes = ['João','Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//slice - retira elemento específico do array 0 argumento dentro do parenteses refere-se ao indice
nomes.splice(1,2, 'Rodrigo'); /*** o primeiro argumento refere-se a posição do array que será alterado, o segundo argumento refere-se a quantos elementos 
serão removidos a parti do argumento anterior, o terceiro argumento refere-se ao elemento que será adicionado, no indice passado no primeiro argumento
[ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ] ***/



nomes.push('Rodrigo'); //adiciona o item no final do array ['João', 'Ana','Caio', 'Lara','Marjorie', 'Leo','Rodrigo']

console.log(nomes)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario) //[ '🐋', '🐠', '🐙', '🐟' ]