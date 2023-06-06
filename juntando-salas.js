//concat: Unifica dois arrays disintos em um só, lembre-se da ordem. 
//        Deve ser passado para uma nova váriavel pois depois se tornará um novo array.

const salaJS = ['Evaldo', 'Camila', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel']; 

const salasUnificadas = salaJS.concat(salaPython); // [ 'Evaldo', 'Camila', 'Mari', 'Ju', 'Leo', 'Raquel' ] 

console.log(salasUnificadas);

const timeDev = ['Steffany' ,'Nóbrega', 'Bezerra', 'Gizelli', 'Portugal', 'Oliverio', 'Nyshiama', 'Damasceno', 'Cleylton', 'Souza' , 'Bueno'];
const timeGestao = ['Erick', 'Polly', 'Sarah'];
const timeRequisitos = ['Dalila', 'Jéssica'];

const sai = timeDev.concat(timeGestao.concat(timeRequisitos));

console.log(sai); //['Steffany', 'Nóbrega','Bezerra',  'Gizelli', 'Portugal', 'Oliverio', 'Nyshiama', 
//                  'Damasceno', 'Cleylton', 'Souza','Bueno', 'Erick', 'Polly', 'Sarah','Dalila', 'Jéssica']

console.log(sai.length)