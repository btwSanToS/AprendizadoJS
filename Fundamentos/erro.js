/*function imprimirNomeGritando(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Santos' }
imprimirNomeGritando(obj)
*/

/* 
Variável como nome (L. Portuguesa) retornará properties 'toUpperCase' of undefined
Informando que não é possível utilizar o toUpperCase em variáveis não declaradas.
Modificando de NOME -> NAME resolveria, mas testaremos o TRY.
*/
function tratarErroELancar(erro) {
    //throw new Error('Erro Teste Retorno')
    //throw 10
    //throw true
    throw 'mensagem'
}


function imprimirNomeGritando(obj) {
    try { 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final!')
    }
}

const obj = { name: 'Santos' }
imprimirNomeGritando(obj)

//Resumo Try, Catch e Finnaly:

/*
try {
    // Código que pode gerar uma exceção
} catch (erro) {
    // Manipula o erro
    console.error("Ocorreu um erro:", erro.message);
} finally {
    // Código que será executado independentemente de haver uma exceção ou não
}
*/