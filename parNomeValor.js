//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente1 = {
    nome: 'Santos',
    idade: 20,
    peso: 85,
    endereco: {
        logradrouro: 'Vertiginosa',
        numero: 123,
        bairro: 'Simples Faraó'
        
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente1)


// Testes

const preco = 149 // nome/valor

function supermercado(){
    const preco = 149
    return preco
}


console.log(preco)
console.log(supermercado())

const banana = {
    nome: 'Banana Caturra',
    fornecedor: "Banana's Premium",
    preco: 112,
    tipo: 'Caturra'
}
console.log(banana)

console.log(typeof banana)