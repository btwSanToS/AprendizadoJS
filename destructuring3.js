//Criação de número aleatório.

function numeroAleatorio({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

console.log(numeroAleatorio({})) //Pega os valores já informados (Valores Padrão)

const obj = {min: 0, max: 12}
console.log(numeroAleatorio(obj))

//testes ↓↓↓↓↓
console.log(numeroAleatorio({min: 990})) //max com valor padrão
console.log(numeroAleatorio({max: 100})) //min com valor padrão
console.log(numeroAleatorio({min: 500, max: 800})); 
console.log(numeroAleatorio({min: 0, max: 50}));