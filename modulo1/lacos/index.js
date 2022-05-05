// Exercícios de interpretação de código

//1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//Resposta: O código acima está realizando uma contagem de um em um até que i seja igual a 4 (menor que 5). Será impresso 1 2 3 4.

//2 - Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?

//Resposta: 19 21 23 25 27 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

//Resposta: Sim, usando **for (elemento of array)**, fazendo assim com que imprima ou passe por cada elemento do array.

//3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Resposta: Imprime linha a linha quantidade de asteriscos correspondentes a linha até alcançar o número inserido pelo usuário.

//Exercícios de escrita de código

//1- Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

let arrayNomes = []

if (bichinhos === 0){

     console.log("Que pena! Você pode adotar um pet!")

} else {
    
    for (let numeroBichinhos = 0; numeroBichinhos < bichinhos; numeroBichinhos++){
            nomeBichinhos = prompt("Qual o nome do seu pet?")
            arrayNomes.push(nomeBichinhos) 
    }
    console.log(arrayNomes) //c) Por fim, imprima o array com os nomes dos bichinhos no console
}


//2- Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [14, 67, 89, 15, 23]

//a)  Escreva um programa que imprime cada um dos valores do array original.

function imprimaElementosArray (array){
    for (let item of arrayOriginal){
        console.log(item)
    }
}
console.log(imprimaElementosArray(arrayOriginal))

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

function imprimaQuociente (array){
    for (let item of arrayOriginal){
        let quociente = item / 10
        console.log(quociente)
    }
}
console.log(imprimaQuociente(arrayOriginal))

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

let arrayPar = []

function imprimaArrayPar (array){
    for (let item of arrayOriginal){

        let selecionandoItens = item % 2

        if (selecionandoItens === 0) { 
            arrayPar.push(item)
        }
    }
    console.log(arrayPar)
}
console.log(imprimaArrayPar(arrayOriginal))

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// const arrayOriginal = [14, 67, 89, 15, 23]

let valor = 0
for (let i = 0; i < arrayOriginal.length; i++) {
  valor += i
  console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const arrayOriginal = [14, 67, 89, 15, 23]

function descobreMenorItem (array){
    let menor = array[0]
    for (let i = 0; i > array.length; i++){
        if (array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}

function descobreMaiorItem (array){
    let maior = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

console.log(descobreMenorItem(arrayOriginal))
console.log(descobreMaiorItem(arrayOriginal))