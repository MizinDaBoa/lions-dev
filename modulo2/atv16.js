var nota 
var oper 
var media 

console.log('digite sua nota de 1 a 100 pts')
process.stdin.once ('data', function(data) {
nota = parseInt(data.toString().trim())
processamento(nota)
process.exit()
})

function result(nota){
    switch(true){
        case nota >= 90 && nota <= 100:
            return 'a'
        case nota >= 80 && nota <=89:
            return 'b'
        case nota >= 70 && nota <= 79:
            return 'c'
        case nota >= 60 && nota <= 69:
            return 'd'
        case nota >= 0 && nota <= 59:
            return 'f'
        default:
            console.log('resposta indefinida')
    }
}
function processamento(nota){
    if (result(nota) == 'a' || result(nota) == 'b' || result(nota) == 'c')
        console.log(`parabens voce foi aprovado,vpce tirou ${result(nota)}`)
    else{
        console.log(`voce nao foi aprovado pois tirou ${result(nota)}`)}
    }