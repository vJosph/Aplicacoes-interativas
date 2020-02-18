"use strict";
exports.__esModule = true;
//Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números
var rs = require("readline-sync");
console.log('Digite 3 numeros');
var num1 = rs.question('Primeiro numero:');
var num2 = rs.question('Segundo numero:');
var num3 = rs.question('Terceiro numero:');
var Resultmult = num1 * num2 * num3;
console.log('O resultado foi ' + Resultmult);
