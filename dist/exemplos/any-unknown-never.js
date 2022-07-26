"use strict";
//uso do "any" com "unknown" é uma boa prática, como mostra o exemplo abaixo.
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
stringTest2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// uso do "throw" que interrompe o código pode ser usado o "void" ou o "never" na hora de tipar a função.
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
