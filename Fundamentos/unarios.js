let num1 = 1
let num2 = 2

num1++ // Acrescenta 1 no seu valor
console.log(num1)
num1-- // Diminuiu 1 no seu valor
console.log(num1)

console.log(++num1 === num2--) //true, pois num1 = 2 e num2 = 2 (ANTES DE SEU INCREMENTO.)
/* Os dois valem o mesmo valor, o retorno é true.
A operação de ESTRITAMENTE IGUAL ocorrerá após o incremento do valor num1, pois o seu incremento se encontra ANTES de seu valor. 
Após incrementado, o valor irá para a comparação.

O segundo caso é diferente, como o seu incremento está DEPOIS de seu valor, a comparação é feita com o seu valor ATUAL.
Depois da comparação que o seu incremento irá ser realizado.
*/
console.log(num1 ===num2) // false, pois num1 = 2 e num2 = 1
