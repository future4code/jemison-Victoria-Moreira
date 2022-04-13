/*Exercícios de interpretação de código
Respostas:
1- imprime a variável b, de valor atual 10
imprime as variáveis a e b, de valor atual: 10 5

2- C recebe valor de a, 10
B recebe o valor de C, 10
A recebe o valor atual de B, 10
imprime 10 10 10 

3- o programa calcula quanto custa a sua hóra de trabalho. Sugestão de nomes das variáveis seriam: p -> horasTrabalhadasPorDia; t -> salarioAoDia */

/*Exercícios de escrita de código */

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/* 1)d)Resposta: o tipo da variável é declarada como undefined pois não teve nenhum valor atribuído.*/
/* 1)e)Resposta: o tipo das variáveis nome e idade são string, pois todas a informações que saem do prompt (até mesmo número) são strings.*/

console.log ("Olá", nome + ", você tem", idade, "anos") /*usei o + pois foi a única forma que encontrei para a vírgula permanecer junto do nome inserido.*/

// EXERCICIO 2
let eCasado = prompt("Você é casado(a)?")
let estaEstudando = prompt("Você está estudando atualente?")
let buscaEmprego = prompt("Está procurando emprego?")

console.log("Você é casado(a)?", eCasado)
console.log("Você está estudando atualente?", estaEstudando)
console.log("Está procurando emprego?", buscaEmprego)

//EXERCICIO 3
let a = prompt("Insira um valor para a variável A.")
let b = prompt("Insira um valor para a variável B.")

// Aqui faremos uma lógica para trocar os valores
let novoValorDeA = b 
let novoValorDeB = a 

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de A é", novoValorDeA)
console.log("O novo valor de B é", novoValorDeB)

//DESAFIO
let primeiroValor = prompt("Por favor, insira um número.")
let segundoValor = prompt("Por favor, insira um novo número.")

//convertendo de string para número
let primeiroNumero = Number(primeiroValor)
let segundoNumero = Number(segundoValor)

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero + segundoNumero)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero * segundoNumero)