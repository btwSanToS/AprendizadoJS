/* 
== 2 iguais: Operador relacional. Compara a igualdade dos dois valores.
Compara os valores, não com o tipo.
*/
console.log('01)', '01' == 1) // 0 a esquerda não importa.
// Teste ↓↓↓↓
console.log('02)', '1' == 10) // False, valores diferentes.
console.log('03)', '10' == 1) // False, valores diferentes.
console.log('04)', '10' == 10) //True, valores iguais.

/*
=== 3 iguais: "ESTRITAMENTE IGUAIS" Irá comparar o tipo e seu valor.
Os dois casos sendo iguais, será retornado TRUE
Caso não sejam ESTRITAMENTE IGUAIS, retornará FALSE
*/
console.log('Quebra ↓ ESTRITAMENTE IGUAIS.')
console.log('05)', '10' === 10) // False, Tipos e valores diferentes.
console.log('06)', 10 === 10) // True, Tipos e valores iguais.
console.log('07)', '10' === '11') // False, Tipos Iguais, valores diferentes.
console.log('08)', '10 + 10' === 20) // False, Tipos e valores diferentes.
console.log('09)', 10+10 === 20) // True, Tipos Iguais. Valores após soma iguais.
console.log('10)', 15+35 === 15+20) //False, Tipos Iguais, valores após soma divergentes.
console.log('11)', 'André' === 'Andre:') // False, Tipos Iguais, valores divergentes.

// + Testes ↓↓↓↓
console.log('12)', '10' !== 10) // ESTRITAMENTE DIFERENTES.
console.log('13)', '10' != 10) // DESIGUALDADE DOS VALORES -> False. São valores iguais
console.log('14)', 10 != 10) // DESIGUALDADE DOS VALORES -> False. São valores iguais
console.log('15)', '10' >= '10') // True, Tipos Iguais, valores Iguais.
console.log('16)', '10' >= '12') // False, Tipos iguais, valores divergentes.
const a = 10
const b = 15
console.log('17)', a == b) // False, Tipos Iguais, valores divergentes.
console.log('18)', a !== b) // True, ESTRITAMENTE DIFERENTES.
console.log('19)', null == undefined) // True, Valores iguais
console.log('20)', null === undefined) // False, Tipos diferentes.