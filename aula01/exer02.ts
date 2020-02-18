// Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada
//deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente

import * as rs from 'readline-sync';

console.log('Digite 3 numeros: ');

const num1 = rs.question('Primeiro numero:');
const num2 = rs.question('Segundo numero:');
const num3 = rs.question('Terceiro numero:');

let mult :number = (num1 * 2) + (num2 * 3) + (num3 * 5);

let divisao :number = mult/10;

console.log('O resultado foi ' + divisao);