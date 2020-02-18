//Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida,
//escrever a sua área

import * as rs from 'readline-sync';

console.log('Digite a base e a altura do triangulo para o calculo da area');

const base :number = rs.question('Digite a base');
const altura :number = rs.question('Digite a altura');

let conta :number = (base * altura)/2;

console.log('A area do triangulo é :' + conta);
