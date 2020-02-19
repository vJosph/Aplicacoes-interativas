import * as rs from 'readline-sync';

console.log('Digite dois numeros para somar');

let num1:number;
let num2:number;


do {
    num1 = Number(rs.question('Digite o primeiro numero: '));
    num2 = Number(rs.question('Digite o segundo numero: '));

    let result: number = num1 + num2;

    console.log(result);
}
while (isNaN(num1) || isNaN(num2));



