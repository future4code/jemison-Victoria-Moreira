// Exercícios de interpretação de código
// 1- a) Será impresso 10 e 50, respectivamente.
// b) Seria executado, mas o resultado não ficaria visível no console.

// 2- a) Transforma todo o texto inserido pelo usuárioem letra minúscula e verifica se inclui a palavra "cenoura".
// b) True, true, false.

// Exercícios de escrita de código

// 1- a)
function imprimeInformacoes () {
    console.log(`Eu sou Victoris, tenho 25 anos, moro em Rio de Janeiro e sou estudante.`)
}
imprimeInformacoes()

// b)
let imprimeInformacoes2 = (nome, idade, endereco, profissao) => {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
imprimeInformacoes2("Victoria", "25", "Rio de Janeiro", "estudante")

// 2- a)
let somarDoisNumeros = (num1, num2) => {
    let soma = num1 + num2
    return soma
}

console.log (somarDoisNumeros(2, 3))
console.log (somarDoisNumeros(4, 5))


//b)
let comparandoNumeros = (primeiroNumero, segundoNumero) => {
    let comparacao = primeiroNumero >= segundoNumero
    return comparacao
}

console.log (comparandoNumeros(2, 3))
console.log (comparandoNumeros(5, 5))

// c)
let verificarNumeroPar = (numero) => {
    let verificacao = numero % 2
    let resposta = verificacao === 0
    return resposta
}

console.log (verificarNumeroPar (12))
console.log (verificarNumeroPar (5))

// d) 
let imprimirMensagem = (mensagem) => {
    let tamanhoDaMensagem = mensagem.length
    let mensagemMaiuscula = mensagem.toUpperCase()
    console.log(tamanhoDaMensagem)
    console.log(mensagemMaiuscula)
}

imprimirMensagem("Eu não vou desistir!")

// 3-
let operacoesBasicas = () => {
    let numero1 = Number(prompt("Insira um número."));
    let numero2 = Number(prompt("Insira mais um número.")); 
    let adicao = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;
    console.log(`Números inseridos: ${numero1} e ${numero2}`)
    console.log(`Soma: ${adicao}`)
    console.log(`Diferença: ${subtracao}`)
    console.log(`Multiplicação: ${multiplicacao}`)
    console.log(`Divisão: ${divisao}`)
}

operacoesBasicas()

 

    
