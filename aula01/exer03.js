"use strict";
//Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida,
//escrever a sua área
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Digite a base e a altura do triangulo para o calculo da area');
var base = rs.question('Digite a base');
var altura = rs.question('Digite a altura');
var conta = (base * altura) / 2;
console.log('A area do triangulo é :' + conta);
