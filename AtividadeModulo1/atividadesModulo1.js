/* 01)
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
*/

/* Primeira resolução, utilizando variáveis ↓↓↓↓
function saudacaoInicial(text) {
    return 'Olá, ' + text + '!'
}

const nome1 = 'André'
const nome2 = 'Santos'
const saudacao1 = saudacaoInicial(nome1);
console.log(saudacao1) // Retorno: Olá, André!

const saudacao2 = saudacaoInicial(nome2);
console.log(saudacao2); // Retorno: Olá, Santos!
*/

// Segunda resolução, aprimorada para não ter variáveis de nomes específicos.

function cumprimentar(text) {
    return 'Olá ' + text + '!'
}

const saudacao = cumprimentar('André')
console.log(saudacao);