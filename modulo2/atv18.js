var nota = [8, 9, 7 ,6 ,8, 9,5,6,3, 8]
let soma = 0
let notaAlta = nota[0]
let notaBaixa = nota[0]

for ( let i = 0; i < nota.length;i++){
    soma = soma + nota[i] 

}
let media = soma / nota.length
 console.log(media)


 for ( let i = 0; i < nota.length;i++){
    if (notas[i] > notaAlta){
        notaAlta = nota[i]
    }
    if (notas[i] < notaBaixa){
        notaBaixa = nota[i]
    }
}