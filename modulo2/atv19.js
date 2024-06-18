var vector = [27,10,3,0,20,5,6,3]
var impar = []
var par = []

vector.push(14)

for(let i = 0;i < vector.length ; i++){
    if(vector[i] % 2 == 0){
        par.push(vector[i])
    } else {
        impar.push(vector[i])
    }
}
console.log(`numeros pares sao os ${par},impares sao ${impar},e todos sao ${vector}`)













var nota = [1,2,3,4,5,6,7,8,9,10]

let media = (nota[0] + nota[1] + nota[2] + nota[3] + nota[4] + nota[5] + nota[6] + nota[7] + nota[8] + nota[9]) /2

console.log`${media}`



