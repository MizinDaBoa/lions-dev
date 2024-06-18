let opcoes = ['pedra','papel','tesoura']
let comp = []
let usu = []
let resul

console.log('pedra,papel ou tesoura')
process.stdin.once('data', function(data){
    usu = data.toString().trim()
    processamento(comp,usu,resul)
    process.exit()

})
    comp = opcoes[Math.floor(Math.random() *3)]


function processamento(comp,usu,resul){
    if(usu == comp){
        resul = 'empate.'
    }else if(usu == 'pedra' && comp == 'tesoura' || usu == 'tesoura' && comp == 'papel' || usu == 'papel' && comp == 'pedra'){
        resul = 'voce venceu'
    }else if(usu == 'pedra' && comp == 'papel' || usu == 'papel' && comp == 'tesoura' || usu == 'tesoura' && comp == 'pedra') {
    resul = 'voce teve a proeza de perder para uma maquina.'
    }

console.log(resul)
}