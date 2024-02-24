const [a] = [10]
console.log(a)
//Ex ↓↓↓↓
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 5]
console.log(n1, n3, n5, n6)
/*
Cada valor ficou da seguinte maneira.
n1 = 10 -> 1 Índice
n2 foi ignorado
n3 = 9 -> 3 Índice
n4 foi ignorado
n5 = undefine -> Já não existe índices.
n6 = 0 -> Declarado como 0 // Valor Padrão
*/

//Ex 2 ↓↓↓↓
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
/*
Primeiro valor de declaração foi ignorado "[, 8, 8]"
No segundo valor, ignorou o primeiro índice e buscou o segundo -> 6. Ignorando tanto o primeiro e segundo índice.
*/
