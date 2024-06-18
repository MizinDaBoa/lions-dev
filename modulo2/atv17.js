var num 

console.log('me diga um numero')
process.stdin.once('data', function(data){
    num = parseFloat(data.toString().trim())
    processamento(num)
    process.exit()
})
function processamento(num){
if (num % 5 == 0){
    console.log('seu numero e divisivel por 5.')
}else {
    console.log('seu numero nao e divisivel por 5.')
}
}
