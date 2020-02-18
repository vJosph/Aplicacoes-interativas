"use strict";
// Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada
//deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Digite 3 numeros: ');
var num1 = rs.question('Primeiro numero:');
var num2 = rs.question('Segundo numero:');
var num3 = rs.question('Terceiro numero:');
var mult = (num1 * 2) + (num2 * 3) + (num3 * 5);
var divisao = mult / 10;
console.log('O resultado foi ' + divisao);
