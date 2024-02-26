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
    return `Olá ${text}!`
}

const saudacao = cumprimentar('André')
console.log(saudacao);

/* 02)
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
OBS: Considere que um ano tem 365 dias. Desconsidere anos bissextos e desconsidere também dias decorridos desde o último aniversário.
*/

function converterIdadeDias(idadeEmAnos){
    const diasPorAno = 365
    const idadeEmDias = idadeEmAnos * diasPorAno

    return idadeEmDias;

}
const idade = 80
const idadeConvertida = converterIdadeDias(idade);
console.log(`A idade de ${idade} anos é equivalente a ${idadeConvertida} dias.`);

/* 03)
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. 
O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
*/

function salarioFuncionario(horasTrabalhadas, valorHora) {


    const salarioMensal = horasTrabalhadas * valorHora;
    let stringSalario = `Salário igual a R$ ${salarioMensal}`;

    return stringSalario;
}

const devSr1 = {
    nome: "Clóvis da Cruz",
    valorHora: 150,
    horasTrabalhadas: 160
}
const devSr2 = {
    nome: "Rodrigo",
    valorHora: 150,
    horasTrabalhadas: 160
}

console.log(salarioFuncionario(devSr1.horasTrabalhadas, devSr1.valorHora));
console.log(salarioFuncionario(devSr2.horasTrabalhadas, devSr2.valorHora));

/* 04)
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function referenciaMes(informeMes) {
    const mes = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return mes[informeMes - 1]
}
console.log(referenciaMes(1))
console.log(referenciaMes(2))
console.log(referenciaMes(3))
console.log(referenciaMes(4))
console.log(referenciaMes(5))
console.log(referenciaMes(6))
console.log(referenciaMes(7))
console.log(referenciaMes(8))
console.log(referenciaMes(9))
console.log(referenciaMes(10))
console.log(referenciaMes(11))
console.log(referenciaMes(12)) 