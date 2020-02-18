//Para importar faz isso ai
// readline é pra ler input do usuario  
import * as rs from 'readline-Sync';

//Pedindo para o usuario digitar algo com o rs.question()
const nome = rs.question('Camarada, digite seu nome:');

const message: string = 'Olá,' + nome + '!';
console.log(message);

