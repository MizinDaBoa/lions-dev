let prova1
let prova2
let alreynotas = []
let media


console.log('digite sua primeira nota aqui')
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
  
    console.log('digite a segunda nota aqui')
    process.stdin.once('data', function(data) {
      prova2 = parseFloat(data.toString().trim())
      processamento(prova1, prova2)
      process.exit()
})
})

function processamento(prova1,prova2) {
    alreynotas.push(prova1)
    alreynotas.push(prova2)
    media = (alreynotas[0] + alreynotas[1]) /2
    console.log(`a media sua é ${media}`)
}