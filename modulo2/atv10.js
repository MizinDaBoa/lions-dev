var tp = 0
var ti = 0
var mi = 0
var mp = 0
var sp = 0
var si = 0

for (let i = 0;i <= 999;i ++){
    if(i %2 == 0){
        sp += i
        tp ++
    }
    else {
        si += i
        ti ++
    }
}
mp = sp / tp
mi = si / ti
console.log(`a somas dos pares e ${sp}, a soma dos impares e ${si}, o total de pares e ${tp}, e o total de impares e ${ti},a media dos pares e ${mp}, e a media dos impares e ${mi}`)
if (sp > si){
    console.log('a some dos pares e maior que a soma dos impares')
}else if(sp < si) {
    console.log('a somas dos impares e maior que a soma dos pares')
}else {
    console.log('ambos sao iguais')
}