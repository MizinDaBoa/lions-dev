var corFav = ['preto','azul','verde']
var corEsp = []
var corDoUsu =

console.log('qual e sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsu = data.toString().trim()
    processamento(corDoUsu,corFav)
    process.exit()

})

function processamento(corDoUsu,corFav){
    if (corDoUsu == corFav[0] || corDoUsu == corFav[1]|| corDoUsu == corFav[2]) {
        console.log('a sua cor esta entre as mais favoritas')
    }else{
        console.log('a sua cor e diferente vou add a lista')
        corEsp.push(corDoUsu)
    }

console.log(`as cores favoritas pela galera sao ${corFav}, e possui ${corFav.length} elementos`)
}