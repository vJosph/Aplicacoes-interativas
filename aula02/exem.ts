import * as rs from 'readline-sync';

console.log('Digite dois numeros inteiros e a operação desejada para calcular');

const num1 :number = Number(rs.question('Digite o primeiro numero: '));
const num2 :number = Number(rs.question('Digite o segundo numero: '));

let operador:string = rs.question('Digite um operador: + para adição, - para subtração, * para multiplicação, / para divisão')

if(operador === '+'){
    let result:number =  num1 + num2;
    console.log(num1 + ' + ' + num2 + ' = ' + result)
}else if(operador === '-'){
    let result:number = num1 - num2;
    console.log(num1 + ' - ' + num2 + ' = ' + result)
}else if(operador === '*'){
    let result:number = num1 * num2;
    console.log(num1 + ' * ' + num2 + ' = ' + result)
}else if(operador === '/'){
    let result:number = num1 / num2;
    console.log(num1 + ' / ' + num2 + ' = ' + result)
}

