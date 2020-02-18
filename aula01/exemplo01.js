"use strict";
exports.__esModule = true;
//Para importar faz isso ai
// readline é pra ler input do usuario  
var rs = require("readline-Sync");
//Pedindo para o usuario digitar algo com o rs.question()
var nome = rs.question('Camarada, digite seu nome:');
var message = 'Olá,' + nome + '!';
console.log(message);
