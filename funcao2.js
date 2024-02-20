// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


console.log('novosExemplos')

// Teste 1
const testeSoma1 = function (nota1, nota2) {
    console.log(nota1 + nota2)
}
console.log(testeSoma1);

testeSoma1(10.15, 12.01);

// Teste 2
const testeSoma2 = (nota3, nota4) => {
    return nota3 + nota4
}
console.log(testeSoma2(7, 9))

// Teste 4
const testeSoma3 = (nota5, nota6) => nota5 * nota6
console.log(testeSoma3(2, 4));

// Teste 4.1
const testeSoma4 = function (nota7, nota8) {
    return nota7 + nota8
}
console.log(testeSoma4(8, 9));


