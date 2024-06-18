const readline = require('readline')


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


let funcionarios = []
let maiorNota = 0
let maiorSalario = 0
let fun = ''


exibirMenu()


function exibirMenu() {
   console.log(`
   Menu:
   1. Cadastrar funcionário
   2. Listar todos os funcionários
   3. Exibir funcionário com maior salário
   4. deletar algum dado
   5. Editar algum dado dos funcionarios
   6. Sair
   `)
   rl.question('Escolha uma opção: ', (opcao) => {
   switch (opcao) {
   case '1':
   cadastrarFuncionario()
   break
   case '2':
   listarFuncionarios()
   break
   case '3':
   exibirMaiorSalario()
   break
   case '4':
       deletar()
   break
   case '5':
       editar()
   break
   case '6':
       rl.close()
   break
   default:
   console.log('Opção inválida, tente novamente.')
   exibirMenu()
   break
   }
   })
   }


   function cadastrarFuncionario() {
       rl.question('Digite o nome do funcionário: ', (nome) => {
       rl.question('Digite o cargo do funcionário: ', (cargo) => {
       rl.question('Digite o salário do funcionário: ', (salario) => {
       funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
       console.log('Funcionário cadastrado com sucesso!')
       exibirMenu()
       })
       })
       })
       }




       function listarFuncionarios() {
           if(funcionarios.length == 0){
               console.log('nao tem nenhum funcionario')
           }else{
               console.log(funcionarios)
           }
           exibirMenu()
       }




           function exibirMaiorSalario() {
               if(funcionarios.length == 0 ){
                   console.log('nao tem nenhum funcionario')
               }else{
                   for(let i = 0;i < funcionarios.length;i++){
                       if(funcionarios[i].salario > maiorSalario){
                           maiorSalario = funcionarios[i].salario


                         
                       }if(maiorSalario == funcionarios[i].salario){
                           fun = funcionarios[i].nome
                       }
                      
                      
                   }
                   console.log(`o maior salario é ${maiorSalario}`)
                   console.log(`o func com o maior salario é ${fun}`)
               }
               exibirMenu()
           }
         


           function deletar(){
               if (funcionarios.length == 0) {
                   console.log('nao tem nenhum funcionario')
                   exibirMenu()
                   } else {
                   console.log('Lista dos funcionarios')
                   funcionarios.forEach((funcionarios, index) => {
                   console.log(`${index + 1}. ${funcionarios}`)
                   })
                   rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
                   if (numero > 0 && numero <= funcionarios.length) {
                   funcionarios.splice(numero - 1, 1)
                   console.log('funcionario removido com sucesso!')
                   exibirMenu()
                   } else {
                   console.log('Número inválido, tente novamente.')
                   exibirMenu()
                   }
               })
           }
       }


      
      
      
      
      
       function editar() {
           if (funcionarios.length == 0) {
           console.log('nao tem nehum funcionario cadastrado aqui')
           exibirMenu()
           } else {
           rl.question('Digite o número do funcionario que deseja editar: ', (numero) => {
          
           if (numero > 0 && numero <= funcionarios.length) {
           rl.question('nome do funcionario: ', (nome) => {
           rl.question('cargo do funcionario: ', (cargo) => {
           rl.question('salario do funcionario: ', (salario) => {
           funcionarios[numero - 1] = {
           nome,
           cargo,
           salario
           }
           console.log('editado com sucesso!')
           exibirMenu()
           })
           })
           })
           } else {
           console.log('Número inválido, tente novamente.')
           exibirMenu()
           }
           })
          
           }
           }
