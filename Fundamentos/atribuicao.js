//Operador de Atribuição

const a = 7 // Const pois o seu valor não será modificado.
let b = 3 // Let pois o seu valor será modificado.

soma = (a + b)
console.log(soma);

// Atribuindo o valor em suas variáveis.

b += a // b = b + a 
console.log(b)

b -= a // b = b - a
console.log(b)

b *= a // b = b * a
console.log(b)

// Let continua trabalhando e atualizando o valor de b

b *= 5 // b = b * 5
console.log(b)

b /= 5 // b = b / 5
console.log(b)
// console.log(Math.floor(b)) // Floor para descer e buscar o próximo inteiro.

b %= 8 // b = b % 8  
console.log(b)

/////////////////////////

const nomeEmpresa = '123B2C Enterprises '
var nomeCliente = 'Marcos Antônio ' 

nomeCliente += nomeEmpresa
console.log (nomeCliente)

//---------------------------------------------------

const saudacao = 'seja Bem Vindo. '
var novoColaborador = 'João Santos ' 

novoColaborador += saudacao
console.log (novoColaborador)
