let nome
let idade
const ano = 2024
console.log('Não obsequiamente meu caro Sr., mas por tadavia entretanto,qual seria seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Totalmente,obsequiamente,sem ser todavia,diretamente,qual é a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    let nascimento = ano - idade
    let ano2 = nascimento - 1

    console.log(`Olá meu caro Sr. ${nome}, de acordo com meus calculos nada bem calculados voce tem ${idade} aninhos, o ano do seu nascimento é ${nascimento}, mas todavia enteretanto,caso numa situacao hipotetica,se voce ainda nao fez aniversario,voce nasceu em ${ano2} `)
}

