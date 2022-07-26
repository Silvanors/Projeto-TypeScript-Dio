"use strict";
//desse modo nem sempre a função retornará tipo número
/*
function somarValoresNumericos(numero1: number, numero2: number) {
    return numero1 + numero2;
    
}

console.log(somarValoresNumericos(1, 2));
*/
//no exemplo abaixo poderá retornar uma string
/*
function somarValoresNumericos(numero1: number, numero2: number) {
    return numero1 + numero2.toString();
    
}

console.log(somarValoresNumericos(1, 2));
*/
//no exemplo abaixo, necessariamente irá retornar tipo número
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 2));
