import * as rs from 'readline-sync';

let num:number;
let lista=[];  


do{

    num = Number(rs.question("Digite um numero "));

    if(num>0 && num % 2 ==0){
        lista.push(num);
    }   


}while(num >= 0)
console.log(lista);