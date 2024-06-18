let resposta

console.log('diga um numero ')
process.stdin.on('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})


function processamento(resposta) {
    if (resposta == 0) {
        console.log('o numero que voce digitopu e zero')
    } else if (resposta % 2 == 0){
        console.log('seu numero e par')
    } else {
        console.log('seu numero e impar')
    } 
    }