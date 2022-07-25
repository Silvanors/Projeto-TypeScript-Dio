//na função abaixo há retorno da função normalmente
function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
    
}

console.log(somarValoresNumericos(1, 2));

//tipo de função que não retorna nada no console.log. Tipando a função como "void"

function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2)
}