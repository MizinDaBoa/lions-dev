const { stdin } = require('process')
const readline = require('readline')


const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})




let brawlers = []


exibirMenu()


function exibirMenu(){
   console.log(`
       Menu:
   1. Cadastrar um Brawler   
   2. Ver todos os brawlers até agora   
   3. Editar algum brawler da lista   
   4. remover algum da lista  
   5. Sair
       `)
       rl.question('escolha uma opcao:', (opcao)  =>  {
           switch(opcao){
               case '1':
                   cadastro()
                   break
                   case '2':
                       listagem()
                       break
                       case '3':
                           editar()
                           break
                           case '4':
                               remover()
                               break
                               case '5':
                                   rl.close()
                                   break
                                   default:
                                       console.log('opcao invalidae,tente novamente')
                                       exibirMenu()
                                       break
           }
       })
}




function cadastro(){
   rl.question('Nome?', (nome) => {
       rl.question('Qual a raridade?', (raridade) =>{
           rl.question('Genero?', (genero) => {
               brawlers.push({nome: nome, raridade: raridade, genero: genero })
               console.log('brawler cadastrado com sucesso')
               exibirMenu()
           })
       })
   })
}




function listagem(){
   if(brawlers.length == 0){
       console.log('Nao há nenhum brawler cadastrado ainda')
       exibirMenu()
       }else{
       console.log(brawlers)
       exibirMenu()
   }
}




function remover(){
   if( brawlers.length == 0){
       console.log('nao tem nenhum brawler cadastrado para editar ')
   }else{
       console.log('lista dos brawlers ja cadastrados')
       brawlers.forEach((brawlers, index) => {
           console.log(`${index +1}. ${brawlers.nome}`)
       })
       rl.question('digite o numero do cadastro que deseja remover', (numero) => {
           if(numero > 0 && numero <= brawlers.length){
               brawlers.splice(numero -1, 1)
               console.log('numero removido com sucesso')
               exibirMenu()
           }else{
               console.log('numero invalido,tente novamente')
               exibirMenu()
           }
       })


}
}








function editar(){
   if( brawlers.length == 0){
       console.log('nao tem nenhum brawler cadastrado para editar ')
   }else{
       console.log('lista dos brawlers ja cadastrados')
       brawlers.forEach((brawlers, index) => {
           console.log(`${index +1}. ${brawlers.nome}`)
       })
       rl.question('qual numero do brawler que voce quer editar ', (numero) => {
           if(numero > 0 && numero <= brawlers.length){
               rl.question('digite o novo nome: ' , (nome) => {
                   rl.question('digite a nova raridade ', (raridade) => {
                       rl.question('digite o novo genero (duvidoso isso)', (genero) => {
                           brawlers[numero - 1] = {
                               nome,
                               raridade,
                               genero
                           }
                      
                           console.log('editado com sucesso!')
                           exibirMenu()
                       })
                   })
               })
           }else{
               console.log('numero invalido,tente novamente')
               exibirMenu()
           }
      
   })
   }


}

