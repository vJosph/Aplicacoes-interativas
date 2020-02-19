"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Digite dois numeros inteiros e a operação desejada para calcular');
var num1 = Number(rs.question('Digite o primeiro numero: '));
var num2 = Number(rs.question('Digite o segundo numero: '));
var operador = rs.question('Digite um operador: + para adição, - para subtração, * para multiplicação, / para divisão');
if (operador === '+') {
    var result = num1 + num2;
    console.log(num1 + ' + ' + num2 + ' = ' + result);
}
else if (operador === '-') {
    var result = num1 - num2;
    console.log(num1 + ' - ' + num2 + ' = ' + result);
}
else if (operador === '*') {
    var result = num1 * num2;
    console.log(num1 + ' * ' + num2 + ' = ' + result);
}
else if (operador === '/') {
    var result = num1 / num2;
    console.log(num1 + ' / ' + num2 + ' = ' + result);
}
