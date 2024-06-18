let lados
let resp

console.log('quantos lados voce quer que seu dado tennha')
process.stdin.once('data', function(data){
    lados = parseInt(data.toString().trim())
    processamento(lados)
    process.exit()
})
 
function processamento(lados){
    resp = Math.floor(Math.random() * lados) +1
    console.log(`o numero que caiu do dado foi ${resp}`)
}