var nome = '';
console.log('qual e seu nome')
process.stdin.on('data', function(data) {
let nome = data.toString();
var saudacao = 'ola' + ',' + nome + 'como voce esta meu grande amigo' + '?'
console.log(saudacao)
})