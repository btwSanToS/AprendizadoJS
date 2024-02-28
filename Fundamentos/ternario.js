const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.0))

// Testes ↓↓↓↓

//Verificar se um número é par ou ímpar
const numero = 10
const parOuImpar = numero % 2 === 0 ? 'O número é par' : 'O número é ímpar'
console.log(parOuImpar)

//Verificar se uma pessoa é maior de idade
const idadePessoa = 17
const maiorIdade = idadePessoa >= 18 ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade'
console.log(maiorIdade)

//Definir uma mensagem com base na presença de um valor
const nome = 'André'
//const nome = valores null, undefined retornará a segunda string.
const saudacao = nome ? `Olá ${nome}, seja bem vindo.` : 'Olá visitante, seja bem vindo!'
console.log(saudacao)

//Verificar se um número é positivo ou negativo.
const valor1 = 1
const positivoNegativo = valor1 > 0 ? 'Positivo' : valor1 < 0 ? 'Negativo' : 'O número é 0'
console.log(positivoNegativo)

//Verificar usuário ou administrador
const isAdm = true
const mensagem = isAdm ? 'Bem vindo, Administrador!' : 'Bem vindo, usuário!'
console.log(mensagem)