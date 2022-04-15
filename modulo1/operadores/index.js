// EXERCICIO DE INTERPRETACAO DE CODIGO
// 
//1. const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) 
// RESPOSTA: a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// RESPOSTA: b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// RESPOSTA: c. true

// console.log("d. ", typeof resultado)
// RESPOSTA: d. boolean

// 2. RESPOSTA: Será impresso no console a concatenação dos dois números inseridos e não a soma, como ele espera. Isso acontece porque o prompt sempre nos retorna uma string e o sinal de mais (+), além da adição, também serve para concatenar. Sendo assim é necessário realizar a converção do tipo string para number antes da operação matemática. Caso os valores inseridos fossem 10 e 2, a resposta seria 102 e não 12 como o esperado.

// 3. RESPOSTA:

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

//**** let primeiroNumeroConvertido = Number(primeiroNumero)
// let segundoNumeroConvertido = Number(segundoNumero) ****

// const soma = primeiroNumeroConvertido + segundoNumeroConvertido

// console.log(soma)

// EXERCICIO ESCRITA DE CODIGO

// 1.

let suaIdade = prompt("Insira sua idade.")
let idadeMelhorAmigo = prompt("Insira a idade do seu melhor amigo.")

let suaIdadeConvertida = Number(suaIdade)
let idadeMelhorAmigoConvertida = Number(idadeMelhorAmigo)

const comparandoIdades = suaIdadeConvertida > idadeMelhorAmigoConvertida
console.log (`Sua idade é maior do que a do seu melhor amigo? ${comparandoIdades}`)

const diferencaIdades = idadeMelhorAmigoConvertida - suaIdadeConvertida
console.log (`A diferença de idade entre vocês é de ${diferencaIdades} anos.`)

//2.a)

let numeroPar = prompt("Insira um número par.")
const numeroParConvertido = Number(numeroPar)

const restoDaDivisao = numeroParConvertido % 2
/*2.b) */
console.log (`O resto da divisão do número escolhido por dois é ${restoDaDivisao}.`)

// 2.c) Sempre que for inserido um número par, o resto da divisão será zero.
// 2.d) Sempre que for inserido um número ímpar, o resto da divisão será um.

//3. primeira forma:

let idade = prompt("Quantos anos você tem?")
const idadeConvertida = Number(idade)
const resultadoMeses = idadeConvertida * 12
const resultadoDias = idadeConvertida * 365
const resultadoHoras = resultadoDias * 24

console.log (`Sua idade em meses é ${resultadoMeses}.`)
console.log(`Sua idade em dias é `${resultadoDias})
console.log(`Sua idade em horas é `${resultadoHoras})

//segunda forma:

let idade = prompt("Quantos anos você tem?")
const idadeConvertida = Number(idade)

console.log (`Sua idade em meses é ${idadeConvertida*12}.`)
console.log(`Sua idade em dias é ${idadeConvertida*365}`)
console.log(`Sua idade em horas é ${idadeConvertida*365*24}`)

//4.

let num1 = Number(prompt("Insira um número."))
let num2 = Number(prompt("Insira mais um número."))

const num1Divisivel = num1 % num2
const num2Divisivel = num2 % num1

console.log(`O primeiro numero é maior que segundo? ${num1 > num2}.`)

console.log(`O primeiro numero é igual ao segundo? ${num1 === num2}.`)

console.log(`O primeiro numero é divisível pelo segundo? ${num1Divisivel === 0}.`)

console.log(`O segundo numero é divisível pelo primeiro? ${num2Divisivel === 0}.`)





