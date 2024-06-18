let resposta
let gostadecafe

console.log('voce gosta de cafe?')
process.stdin.on('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})


function processamento(resposta) {
    if (resposta.toLowerCase() == 'sim') {
        gostadecafe = true 
        console.log('eu nao gosto nem te respeito')
    } else {
        gostadecafe = false
        console.log('voce parece gente boa')
    }
}