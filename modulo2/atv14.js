function calculadora (num,num2,oper){
    switch(oper){
        case '*':
            return num * num2 
            break;
        case '/':
            return num / num2
            break;
        case '+':
            return num + num2
            break;
        case '-':
            return num - num2
            break;
        default:
            console.log('informacao excedida')
    }
}

let resultado = calculadora(4,7,'+')
console.log(resultado)