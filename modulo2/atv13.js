function calcular (num, num2, oper){
    var result
    if (oper == '+'){
        result = num + num2
    }
    else if (oper == '-') {
        result = num - num2
    }
    else if (oper == '*') {
        result = num * num2
    } else {
    result = num / num2
    }
    return result
    
}
let resultado = calcular(79,750,"*")
console.log(resultado)