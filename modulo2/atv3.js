let resposta1
let resposta2

console.log('me diga sua nota no primeiro bimestre')
process.stdin.once('data', function(data) {
    resposta1 = parseFloat(data.toString().trim())
    console.log('vou calcular sua media,qual a sua nota do seu segundo bimestre?')

    process.stdin.once('data', function(data) {
        resposta2 = parseFloat(data.toString().trim())
        processamento(resposta1, resposta2)
        process.exit()
    })
})

function processamento(resposta1, resposta2) {
    let media = (resposta1 + resposta2)/2

    console.log(`A media é ${media}`)
}