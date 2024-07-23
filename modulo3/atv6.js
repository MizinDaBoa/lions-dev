const prompt = require("prompt-sync")()

console.log("bem vindo a calculadora")
let n1 = prompt('digite o primeiro numero da operacao: ')
let op = prompt('digite o sinal da operacao: ')
let n2 = prompt('digite o segundo numero da operacao: ')
n1 = parseFloat(n1)
n2 = parseFloat(n2)
function calc(n1,op,n2){
    switch(op){
        case '+':
            return n1 + n2
            break
        case '-':
            return n1 - n2
            break
        case '/':
            return n1 / n2
            break
        case '*':
            return n1 * n2
            break
        default:
            throw new error('operacao invalida')
        break
    }
}
if(isNaN(n1) || isNaN(n2)){
    throw new error('digite somente numeros')
}else{
    let resul = calc(n1,op,n2)
    console.log('o resultado é ${resul}')
}