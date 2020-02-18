"use strict";
// Elabore um programa que permita ao usuário informar determinada temperatura em
// graus Celsius e converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Digite um valor em Celsius para ser convertido em Kelvin e em Fahrenheit');
var cel = parseFloat(rs.question('Digite o valor em Celsius para conversao :'));
var contaK = 273.15 + cel;
var contaF = cel * (9 / 5) + 32;
console.log(' O numero ' + cel + ' convertido em Kelvin é = ' + contaK + ' e convertido em Fahrenheit é ' + contaF);
