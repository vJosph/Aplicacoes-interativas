"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Digite dois numeros para somar');
var num1;
var num2;
do {
    num1 = Number(rs.question('Digite o primeiro numero: '));
    num2 = Number(rs.question('Digite o segundo numero: '));
    var result = num1 + num2;
    console.log(result);
} while (isNaN(num1) || isNaN(num2));
