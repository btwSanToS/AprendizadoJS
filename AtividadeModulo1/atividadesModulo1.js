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

function converterIdadeDias(idadeEmAnos) {
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

console.log(referenciaMes(4))


/* 05)
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplo: maiorOuIgual (0, 0) // Retornará True
*/

function maiorOuIgual(num1, num2) {
    return num1 >= num2
}

let resultadoFinal = maiorOuIgual(1, 2)
console.log(resultadoFinal)

/* 06)
Escreva uma função que receba um valor booleano ou numérico. 
Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. 
Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. 
Por exemplo, se for fornecido 1, o retorno será -1. 
Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Ex.:
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string" 
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo...."
*/

function valorInvertido(parametro) {
    return typeof parametro === 'number' ? -parametro :
        typeof parametro === 'boolean' ? !parametro :
            `booleano ou números esperado, mas o parâmetro é do tipo ${typeof parametro}`;

}

console.log(valorInvertido("25"))
console.log(valorInvertido(-3456))
console.log(valorInvertido(3456))
console.log(valorInvertido(null))
console.log(valorInvertido(false))

/* 07)
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. 
Porém, não utilize o operador de mutiplicação.
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicar(valor1, valor2) {

    if (valor2 === 0) {
        return 0
    }
    return valor1 + multiplicar(valor1, valor2 - 1)
}

console.log(multiplicar(4, 5))

/* 08)
Escreva uma função que receba dois parâmetros. 
O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. 
Um array será retornado.
repetir("código", 2) // retornará ["código", "código"] 
repetir(7, 3) // retornará [7, 7, 7]
*/

function repeticaoDados(elemento, quantidade) {
    if (typeof elemento !== 'number' && typeof elemento !== 'string') {
        return 'O primeiro parâmetro deve ser um número ou uma string.'
    }

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return 'O segundo parâmetro deve ser um número inteiro não negativo'
    }

    const resultadoFinal = Array(quantidade).fill(elemento)

    return resultadoFinal
}

console.log(repeticaoDados(123, 4))
console.log(repeticaoDados('Texto', 2))