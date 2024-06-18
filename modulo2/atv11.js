let numero

console.log('digite um numero de 0 a 10')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    for(let i = 0;i <= 10;i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
    process.exit()


})