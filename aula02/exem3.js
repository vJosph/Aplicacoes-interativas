"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
function verif(num) {
    if (num < 0) {
        return 'Número negativo';
    }
    else if (num > 0) {
        return 'Número positivo';
    }
    else if (num === 0) {
        return 'O número é 0';
    }
    else {
        return 'Valor invalido';
    }
}
;
var num = Number(rs.question("Digite um número: "));
console.log(verif(num));
