// Exercícios de interpretação de código
// 
//1- Resposta:
// a. indefinido (não foi dado um valor ao array).
// b. null
// c. 11 (a quantidade de ítens do array)
// d. 3 (ítem de índice 0 do array definido atualmente)
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9 (ítem de índice 6)

//2- Resposta:
// SUBI NUM ONIBUS EM MIRROCOS 27

//Exercícios de escrita de código

//1-
let nomeDoUsuario = prompt("Por favor, insira seu nome:")
let emailDoUsuario = prompt("Por favor, insira seu e-mail:")

console.log(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2-
let comidasPreferidas = ["Batata frita", "Chocolate", "Café", "Morango", "Melancia"]

console.log(comidasPreferidas)
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaDoUsuario = prompt("Qual a sua comida preferida?")
comidasPreferidas[1] = comidaDoUsuario

let novaLista = comidasPreferidas
console.log(novaLista)

//3-
let listaDeTarefas = []

let tarefa1 = prompt("1/3: O que precisa ser feito hoje?")
let tarefa2 = prompt("2/3: O que precisa ser feito hoje?")
let tarefa3 = prompt("3/3: O que precisa ser feito hoje?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Digite o número da tarefa que já foi realizada.")
listaDeTarefas.splice(tarefaRealizada -1, 1)
console.log(listaDeTarefas)

