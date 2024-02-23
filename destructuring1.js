/*
Em JavaScript, a destructuring assignment é uma maneira conveniente de extrair valores de arrays ou objetos e atribuí-los a variáveis de forma mais compacta.
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Jardim Botânico',
        numero: 123
    }
}

console.log(typeof pessoa)

//    { } = Operador Destructuring 
const { nome, idade } = pessoa
// Após o = deverá informar a variável a retirar os dados.
console.log(nome + ' <Dados Retirados> ' + idade)
// Realizado a retirada das variáveis do Objeto  em questão.

//Outra maneira é "RENOMEAR" as variáveis, utilizando : + (nova variável)
const { nome: n1, idade: i1} = pessoa
console.log(n1, i1)

// Caso insira uma variável que ainda não foi atribuida, para não ocorrer o retorno de "UNDEFINED", pode se atribuir um valor padrão.
const {nomeCliente, nomeEmpresa = ' <Empresa Fictícia>'} = pessoa
console.log(nomeCliente, nomeEmpresa)

//Teste 2 ↓↓↓↓↓
const {clubeFutebol, classificadoLibertadores = true} = pessoa
console.log(clubeFutebol, classificadoLibertadores)

//Possível "DESMEMBRAR" uma variável utilizando outras variáveis.
const {endereco: {logradouro, numero, cep}} = pessoa
//Após o processo, caso tente procurar pela variável modificada, a mesma não irá constar no código.
//console.log(endereco)
console.log(logradouro, numero, cep) // Verifique que CEP não existe, logo, retorna UNDEFINED.


