//Utilizando no Array

function numeroRand([min = 0, max = 1000]) {
    //Caso o mínimo for maior > que máximo, deverá realizar a troca entre as variáveis.
    if (min > max) [min, max] = [max, min]
    const valorRecebido = Math.random() * (max - min) + min
    return Math.floor(valorRecebido)
}
console.log(numeroRand([50, 40]))
console.log(numeroRand([, 15])) //Ignorou o min e puxou o valor padrão. Em max, setou o valor informado.
console.log(numeroRand([970, ])) //Ignorou o max e puxou o valor padrão. Em min, setou o valor informado.
console.log(numeroRand([995])) //Certifica-se que e puxa o valor min, mantendo o max como padrão
console.log(numeroRand([])) //Retorna min e max já informados, na linha 3.
