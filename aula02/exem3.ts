import * as rs from 'readline-sync';

function verif(num:number):string {
    if(num < 0){
        return 'Número negativo'
    }else if (num > 0){
        return 'Número positivo'
    } else if (num === 0){
        return 'O número é 0'
    }else{
        return 'Valor invalido'
    }
};



let num:number = Number(rs.question("Digite um número: "));

console.log(verif(num));
