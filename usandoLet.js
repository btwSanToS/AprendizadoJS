//Testes simples.

let numero = 1

{
    let numero = 5
    console.log('dentro =', numero)

}
console.log('fora =', numero)


let nomeFinanceiro = "devedor1"

{
    let nomeFinanceiro = "devedor2"
    console.log('Participante 1 =', nomeFinanceiro);
}
console.log('Participante 2 =', nomeFinanceiro);