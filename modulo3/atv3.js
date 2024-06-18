const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1
let tentativas = 0
let max = 9 + 1
let vezes = []


console.log('boas vindas perdedor')


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


function perguntarContinuacao() {
   rl.question('Digite um Número ', (resposta) => {
console.log(`voce digitou: ${resposta},numero de tentativas ate agora: ${tentativas + 1}`)
   tentativas++
  


   if(tentativas > max){
       console.log('voce perdeu,pois gastou todas as suas tentativas, o numero certo era ' + numero )
   rl.close()
   }else{
       switch(true){
           case resposta > numero:
               console.log('errouuuuuu, tente um numero mais baixo.')
               perguntarContinuacao()
               break
           case resposta < numero:
               console.log('errouuuuuu,tente um numero mais alto')
               perguntarContinuacao()
               break
           case resposta == numero:
               console.log('parabens,voce acertou')
               rl.close()
               break
           default:
               console.log('resposta indefinida,tente um numero mais baixo')
               perguntarContinuacao()
           break
       }
     
   }
})
}


perguntarContinuacao()