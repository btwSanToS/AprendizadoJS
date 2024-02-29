let a = 123

console.log(this.a) // Retorna UNDEFINED por conta da falta de inserção no Code.
console.log(global.a) //Global no Code é = Window no browser. Retorna UNDEFINED 

global.b = 123 // Valor inserido diretamente no Global
console.log(global.b) 

this.c = 456 // valor inserido diretamente em THIS
console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this) // Retorno True.

this.d = false 
this.e = 'teste'

console.log(module.exports) // Retornará um objeto com todos os valores de THIS.
// Sua equivalência seria:
//module.exports = { c: 456, d: false, e: 'teste' }

// Criando uma variável "maluca"
abc = 3 // Não realizar isso!!! Sempre declarar a variável
console.log(global.abc)
