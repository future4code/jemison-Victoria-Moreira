// EXERCICIO CONDICIONAIS

// Exercícios de interpretação de código

// 1 -

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Recebe uma string, transforma em número, checa se é divisível ou não por 2 e de acordo com o reultado, imprime no console uma saída.

// b) Para todo número par.

// c) Para todo número ímpar.

// 2 -

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Retornar o valor correspondente da fruta que foi inserida no prompt pelo usuário.

// b) "O preço da fruta Maçã é R$ 2.25"

// c) "O preço da fruta Pêra é R$ 5"

// 3 -

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) Recebendo um valor (string) pelo prompt, transformando em número e atribuindo a constante "numero".

// b) "Esse número passou no teste". Nada será impresso e terá um erro.

// c) Existirá um erro, pois não foi criada a condição do número ser menor que zero ou até mesmo igual a zero.
// else { 
//     console.log("Esse número não passou no teste.")
// }

// ---------------------------------------------
// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idadeUsuario = Number(prompt("Diga qual é a sua idade."))
    
    if (idadeUsuario >= 18) {
        console.log ("Você pode dirigir.")
    } else {
        console.log ("Você não pode dirigir.")
    }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno = prompt("Diga qual seu turno digitando M para matutino ou V para vespertino ou N para noturno.")
let respostaPadrao = turno.toUpperCase()

    if (respostaPadrao === "M") {
        console.log ("Bom dia!")
    } else if (respostaPadrao === "V") {
        console.log ("Boa tarde!")
    } else if (respostaPadrao === "N") {
        console.log ("Boa noite!")
    } else {
        console.log ("Por favor, digite uma informação válida.")
    }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turnoDaAula = prompt("Diga qual seu turno digitando M para matutino ou V para vespertino ou N para noturno.")

let respostaPadronizada = turno.toUpperCase()

switch (respostaPadronizada) {
    case 'M':
        console.log ("Bom dia!")
        break
    case "V":
        console.log ("Boa tarde!")
        break
    case "N":
        console.log ("Boa noite!")
    default:
        console.log ("Por favor, digite uma informação válida.")
        break
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let generoFilme = prompt("Qual foi o gênero do filme escolhido?")

let valorIngresso = Number(prompt("Quanto custa o ingresso?"))

    if (generoFilme.toLowerCase() === "fantasia" && valorIngresso < 15) {
        console.log ("Bom filme!")
    } else {
        console.log ("Escolha outro filme :(")
    }

// ---------------------------------------
// DESAFIOS

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let generoDoFilmeEscolhido = prompt("Qual foi o gênero do filme escolhido?")

let valorPorIngresso = Number(prompt("Quanto custa o ingresso?"))

let lanche = prompt("Qual lanche você quer comprar?")

    if (generoDoFilmeEscolhido.toLowerCase() === "fantasia" && valorPorIngresso < 15) {
        console.log ("Bom filme!")
        console.log ("Aproveite o seu", lanche.toLowerCase())
    } else {
        console.log ("Escolha outro filme :(")
    }
//



// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

let nomeCompleto =  prompt("Insira seu nome completo.")

let tipoDeJogo = prompt("Qual tipo de jogo irá assistir? Digite IN para internacional e DO para jogo doméstico.")

let etapasDoJogo = prompt("Qual etapa do jogo irá assistir? Digite SF para semi-final; DT decisão de terceiro lugar ou FI para final.")

let categoria = Number(prompt("Escolha uma categoria: 1, 2, 3 ou 4."))

let quantidadeIngresso =  Number(prompt("Quantos ingressos irá comprar?"))

const valorDolar = 4.10

console.log (`------Dados da compra------`) 
console.log (`Nome do cliente:  ${nomeCompleto.toUpperCase()}`) 

if (tipoDeJogo.toUpperCase() === "IN") {

    console.log(`Tipo do jogo:  Internacional`)
    
} else if (tipoDeJogo.toUpperCase() === "DO") {

    console.log(`Tipo do jogo:  Nacional`)
    
} else {

    console.log(`Erro. Insira um valor válido.`)

}

if (etapasDoJogo.toLocaleUpperCase() === "SF") {
    console.log ("Etapa do jogo:  Semifinal")
        switch (categoria){
            case 1:
                let valorUnitarioCategoria1 = 1320.00
                console.log (`Categoria:  1`)
                console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
                console.log (`-----Valores-----`)
                    if (tipoDeJogo.toUpperCase() === "IN") {
                        console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria1*valorDolar}`)
                        console.log (`Valor total: U$ ${valorUnitarioCategoria1*valorDolar*quantidadeIngresso}`)
                    } else {
                        console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria1}`)
                        console.log (`Valor total: R$ ${valorUnitarioCategoria1*quantidadeIngresso}`)
                    }
                break
            case 2:
                let valorUnitarioCategoria2 = 880.00
                console.log (`Categoria:  2`)
                console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
                console.log (`-----Valores-----`)
                    if (tipoDeJogo.toUpperCase() === "IN") {
                        console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria2*valorDolar}`)
                        console.log (`Valor total: U$ ${valorUnitarioCategoria2*valorDolar*quantidadeIngresso}`)
                    } else {
                        console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria2}`)
                        console.log (`Valor total: R$ ${valorUnitarioCategoria2*quantidadeIngresso}`)
                    }
                break
            case 3:
                let valorUnitarioCategoria3 = 550.00
                console.log (`Categoria:  3`)
                console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
                console.log (`-----Valores-----`)
                    if (tipoDeJogo.toUpperCase() === "IN") {
                        console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria3*valorDolar}`)
                        console.log (`Valor total: U$ ${valorUnitarioCategoria3*valorDolar*quantidadeIngresso}`)
                    } else {
                        console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria3}`)
                        console.log (`Valor total: R$ ${valorUnitarioCategoria3*quantidadeIngresso}`)
                    }
                break
            case 4:
                let valorUnitarioCategoria4 = 220.00
                console.log (`Categoria:  4`)
                console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
                console.log (`-----Valores-----`)
                    if (tipoDeJogo.toUpperCase() === "IN") {
                        console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria4*valorDolar}`)
                        console.log (`Valor total: U$ ${valorUnitarioCategoria4*valorDolar*quantidadeIngresso}`)
                    } else {
                        console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria4}`)
                        console.log (`Valor total: R$ ${valorUnitarioCategoria4*quantidadeIngresso}`)
                    }
                break
            default:
                console.log(`Erro. Insira um valor válido.`) 
                break                
        }
} else if (etapasDoJogo.toLocaleUpperCase() === "DT") {
    console.log ("Etapa do jogo:  Decisão do 3° lugar")
    switch (categoria){
        case 1:
            let valorUnitarioCategoria1 = 660.00
            console.log (`Categoria:  1`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria1*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria1*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria1}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria1*quantidadeIngresso}`)
                }
            break
        case 2:
            let valorUnitarioCategoria2 = 440.00
            console.log (`Categoria:  2`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria2*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria2*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria2}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria2*quantidadeIngresso}`)
                }
            break
        case 3:
            let valorUnitarioCategoria3 = 330.00
            console.log (`Categoria:  3`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria3*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria3*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria3}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria3*quantidadeIngresso}`)
                }
            break        
        case 4:
            let valorUnitarioCategoria4 = 170.00
            console.log (`Categoria:  4`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria4*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria4*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria4}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria4*quantidadeIngresso}`)
                }
            break
        default:
            console.log(`Erro. Insira um valor válido.`) 
            break
        }

} else if (etapasDoJogo.toUpperCase === "FI") {
    console.log ("Etapa do jogo:  Final")
    switch (categoria){
        case 1:
            let valorUnitarioCategoria1 = 1980.00
            console.log (`Categoria:  1`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria1*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria1*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria1}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria1*quantidadeIngresso}`)
                }
            break
        case 2:
            let valorUnitarioCategoria2 = 1320.00
            console.log (`Categoria:  2`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria2*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria2*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria2}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria2*quantidadeIngresso}`)
                }
            break
        case 3:
            let valorUnitarioCategoria3 = 880.00
            console.log (`Categoria:  3`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria3*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria3*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria3}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria3*quantidadeIngresso}`)
                }
            break        
        case 4:
            let valorUnitarioCategoria4 = 330.00
            console.log (`Categoria:  4`)
            console.log (`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos`)
            console.log (`-----Valores-----`)
                if (tipoDeJogo.toUpperCase() === "IN") {
                    console.log (`Valor do ingresso: U$ ${valorUnitarioCategoria4*valorDolar}`)
                    console.log (`Valor total: U$ ${valorUnitarioCategoria4*valorDolar*quantidadeIngresso}`)
                } else {
                    console.log (`Valor do ingresso:  R$ ${valorUnitarioCategoria4}`)
                    console.log (`Valor total: R$ ${valorUnitarioCategoria4*quantidadeIngresso}`)
                }
            break
        default:
            console.log(`Erro. Insira um valor válido.`) 
        break
        }

} else {
    console.log(`Insira um valor válido.`)
}
