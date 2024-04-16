/* 01)
Crie uma função que retorna a string "Olá, " concatenada com um 
argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
*/

function cumprimentar(text) {
    return `Olá ${text}!`
}
const saudacao = cumprimentar('André')
console.log(saudacao);

/* 02)
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
OBS: Considere que um ano tem 365 dias. Desconsidere anos bissextos e desconsidere também dias decorridos desde o último aniversário.
*/

function converterIdadeDias(idadeEmAnos) {
    const diasPorAno = 365
    const idadeEmDias = idadeEmAnos * diasPorAno

    return idadeEmDias;
}
const idade = 80
const idadeConvertida = converterIdadeDias(idade);
console.log(`A idade de ${idade} anos é equivalente a ${idadeConvertida} dias.`);

/* 03)
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. 
O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
*/

function salarioFuncionario(horasTrabalhadas, valorHora) {


    const salarioMensal = horasTrabalhadas * valorHora;
    let stringSalario = `Salário igual a R$ ${salarioMensal}`;

    return stringSalario;
}
const devSr1 = {
    nome: "Clóvis da Cruz",
    valorHora: 150,
    horasTrabalhadas: 160
}
const devSr2 = {
    nome: "Rodrigo",
    valorHora: 150,
    horasTrabalhadas: 160
}

console.log(salarioFuncionario(devSr1.horasTrabalhadas, devSr1.valorHora));
console.log(salarioFuncionario(devSr2.horasTrabalhadas, devSr2.valorHora));

/* 04)
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function referenciaMes(informeMes) {
    const mes = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return mes[informeMes - 1]
}
console.log(referenciaMes(4))


/* 05)
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplo: maiorOuIgual (0, 0) // Retornará True
*/

function maiorOuIgual(num1, num2) {
    return num1 >= num2
}
let resultadoFinal = maiorOuIgual(1, 2)
console.log(resultadoFinal)

/* 06)
Escreva uma função que receba um valor booleano ou numérico. 
Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. 
Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. 
Por exemplo, se for fornecido 1, o retorno será -1. 
Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Ex.:
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string" 
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo...."
*/

function valorInvertido(parametro) {
    return typeof parametro === 'number' ? -parametro :
        typeof parametro === 'boolean' ? !parametro :
            `booleano ou números esperado, mas o parâmetro é do tipo ${typeof parametro}`;

}
console.log(valorInvertido("25"))
console.log(valorInvertido(-3456))
console.log(valorInvertido(3456))
console.log(valorInvertido(null))
console.log(valorInvertido(false))

/* 07)
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. 
Porém, não utilize o operador de mutiplicação.
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicar(valor1, valor2) {

    if (valor2 === 0) {
        return 0
    }
    return valor1 + multiplicar(valor1, valor2 - 1)
}
console.log(multiplicar(4, 5))

/* 08)
Escreva uma função que receba dois parâmetros. 
O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. 
Um array será retornado.
repetir("código", 2) // retornará ["código", "código"] 
repetir(7, 3) // retornará [7, 7, 7]
*/

function repeticaoDados(elemento, quantidade) {
    if (typeof elemento !== 'number' && typeof elemento !== 'string') {
        return 'O primeiro parâmetro deve ser um número ou uma string.'
    }

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return 'O segundo parâmetro deve ser um número inteiro maior que 0'
    }

    const resultadoFinal = Array(quantidade).fill(elemento)
    return resultadoFinal
}
console.log(repeticaoDados(123, 4))
console.log(repeticaoDados('Texto', 2))

/* 09)
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro
simboloMais(2) // retornará "++" 
simboloMais(4) // retornará "++++"
*/

function repeticaoParametro(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return 'O parâmetro deve ser um número inteiro maior que 0'
    }

    const resultadoFinal = '+'.repeat(quantidade)
    return resultadoFinal
}
console.log(repeticaoParametro(6))

/* 10)
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: 
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"] 
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function receberPrimeiroEUltimoElemento(valor) {
    if (valor.length === 0) {
        return []
    }
    else {
        return [valor[0], valor[valor.length - 1]];
    }
}
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));
console.log(receberPrimeiroEUltimoElemento([30, "Janeiro", 16, 'Erro', null]));

/* 11)
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2} removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
*/

function removerPropriedade(objeto, propriedade) {
    const copiaObjeto = { ...objeto }
    if (copiaObjeto.hasOwnProperty(propriedade)) {
        delete copiaObjeto[propriedade]
    }
    return copiaObjeto
}
console.log(removerPropriedade({ // Formato de Objeto Padrão.
    a: 1,
    b: 2
}, "a"))
//console.log(removerPropriedade({ a: 1, b: 2 }, "a")) Formato Linear
console.log(removerPropriedade({ // Formato de Objeto Padrão.
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))

console.log(removerPropriedade({
    Nome: 'André',
    Sobrenome: 'Santos',
    Posição: 'Zagueiro',
    Número: '4',
}, 'Número'))

/* 12)
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20] 
filtrarNumeros(["a", "c"]) // retornará []
*/

const filtrarNumeros = function (array) {
    var numerosFiltrados = []
    for (var i = 0; i < array.length; i++) { // Veja i como índice
        if (typeof array[i] === 'number') {
            numerosFiltrados.push(array[i])
        }
    }
    return numerosFiltrados
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

/* 13)
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, 
em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. 
Observe os exemplos abaixo para um melhor entendimento:

objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software"}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]])
objetoParaArray({ codigo: 11111, preco: 12000}) // irá retornar [["codigo", 11111], ["preco", 12000]]
*/

const objetoParaArray = function (obj) {
    let arrayDeArrays = []
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            arrayDeArrays.push(chave, obj[chave])
        }
    }
    return arrayDeArrays
}
console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" }))
console.log(objetoParaArray({ codigo: 11111, preco: 12000 }))

/* 14)
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

const receberSomenteOsParesDeIndicesPares = function (numeral) {
    let numerosEIndicesPares = []
    for (runner = 0; runner < numeral.length; runner++) {
        if (numeral[runner] % 2 === 0 && runner % 2 === 0) {
            numerosEIndicesPares.push(numeral[runner])
        }
    }
    return numerosEIndicesPares
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

/* 15)
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/

const checarAnoBissexto = function (anoReferencia) {
    if ((anoReferencia % 4 === 0 && anoReferencia % 100 !== 0) || anoReferencia % 400 === 0) {
        return true
    } else {
        return false
    }
}
console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))

/* 16)
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

const somarNumeros = function (numeros) {
    let somaTotal = 0
    for (let runner = 0; runner < numeros.length; runner++) {
        somaTotal += numeros[runner]
    }
    return somaTotal
}
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))

/* 17)
Você está trabalhando numa aplicação pessoal de controle de despesas. 
Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. 
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.

despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
*/

const despesasTotais = function (produtos) {
    let despesas = 0
    produtos.forEach(produto => {
        despesas += produto.preco
    });
    return console.log(despesas.toFixed(2))
}
despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }]);
despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }]);

/* 18)
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, 
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

const calcularMedia = function (valores) {
    let somaTotal = 0
    for (let runner = 0; runner < valores.length; runner++) {
        somaTotal += valores[runner]
    }
    return somaTotal / valores.length
}
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

/* 19)
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. 
A precisão deverá ser de duas casas decimais, arredondando se necessário.

areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59
*/

const areaDoTriangulo = function (base = 0, altura = 0) {
    calculoArea = (base * altura) / 2
    return console.log(calculoArea.toFixed(2))
}
areaDoTriangulo(10, 15)
areaDoTriangulo(7, 9)
areaDoTriangulo(9.25, 13.1)

/* 20)
Criar uma função que receba um array de números e retorne o menor número desse array;

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

const menorNumero = function (array) {
    let menor = array[0]
    for (runner = 1; runner < array.length; runner++) {
        if (array[runner] < menor) {
            menor = array[runner]
        }
    }
    return menor
}
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

/* 21)
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. 
A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. 
Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado

funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10" 
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3" 
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
*/

const funcaoDaSorte = function (numeroDaSorte) {
    let randomico = Math.floor(Math.random() * 11)
    if (randomico == numeroDaSorte) {
        console.log(`Parabéns! O número sorteado foi o ${randomico}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${randomico}`)
    }
}
funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)

/* 22)
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

const contarPalavras = function (array) {
    let separarString = array.split(" ")
    return separarString.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))

/* 23)
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string.
A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

contarCaractere("r", "A sorte favorece os audazes") // retornará 2 
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

const contarCaractere = function (caracter, frase) {
    let = contador = 0
    for (runner = 0; runner < frase.length; runner++) {
        if (frase[runner] === caracter) {
            contador++
        }
    }
    return contador
}
console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))

/* 24)
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. 
A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. Exemplos:

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"] 
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/

const buscarPalavrasSemelhantes = function (partePalavra, palavra) {
    let stringValidada = []
    for (runner = 0; runner < palavra.length; runner++) {
        if (palavra[runner].includes(partePalavra)) {
            stringValidada.push(palavra[runner])
        }
    }
    return stringValidada
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))

/* 25)
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

removerVogais("Cod3r") // retornará "Cd3r" 
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

const removerVogais = function (palavra) {
    let consoantes = ""
    for (runner = 0; runner < palavra.length; runner++) {
        caracter = palavra[runner]
        if (!"aeiouAEIOU".includes(caracter)) {
            consoantes += caracter
        }
    }
    return consoantes
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))

/* 26)
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, 
porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

const inverter = function (obj) {
    let objInvertido = {}
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            objInvertido[obj[chave]] = chave
        }
    }
    return objInvertido
}
console.log(inverter({ a: 1, b: 2, c: 3 }));

/* 27)
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. 
Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
*/

const filtrarPorQuantidadeDeDigitos = function (arrayNumerico, digitosNumeral) {
    let stringCorreta = []
    for(runner = 0; runner < arrayNumerico.length; runner++){
        if(arrayNumerico[runner].toString().length == digitosNumeral){
            stringCorreta.push(arrayNumerico[runner])
        }
    }
    return stringCorreta
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
