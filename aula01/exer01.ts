//Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números
import * as rs from 'readline-sync';

console.log('Digite 3 numeros');

const num1 = rs.question('Primeiro numero:');
const num2 = rs.question('Segundo numero:');
const num3 = rs.question('Terceiro numero:');

let Resultmult :number = num1 * num2 * num3;

console.log('O resultado foi ' + Resultmult)