//Operadores Lógicos.

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // 2 pipes "||" = expressão ou
    const comprarTv50 = trabalho1 && trabalho2 // 2 E's comerciais "&&" = expressão e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // !! -> Modificação para Boolean. // ^ = expressão ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 // trabalho1 DIFERENTE trabalho2 = 1 != 2 = Verdadeiro // 1 = 2 = False
    const manterSaudavel = !comprarSorvete // Negação.

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))