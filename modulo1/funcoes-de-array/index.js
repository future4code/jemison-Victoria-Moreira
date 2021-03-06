// Exercícios de interpretação de código

//-------- 1.  Leia o código abaixo --------------
    
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
    
//     a) O que vai ser impresso no console?

// Resposta: Três novos arrays contendo todas as informações do array original e seu nome "usuarios".

//-------- 2.  Leia o código abaixo --------------
    
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
    
//     a) O que vai ser impresso no console?

// Resposta: Um novo array contendo somente os nomes. ["Amanda Rangel", "Laís Petra", "Letpicia Chijo"]

//-------- 3.  Leia o código abaixo --------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//     a) O que vai ser impresso no console?

// Resposta: Um novo array contendo todas as informações de todos os usuarios, exceto aquele que tem "Chijo" como apelido.

// ---------------------------------------------------

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos. 

// >>> .map <<<

const apenasNomesPets = pets.map((pet, indice) => {
    return pet.nome
})

console.log(apenasNomesPets)

// b) Crie um novo array apenas com os [cachorros salsicha] 

// >>> .filter <<<

const apenasPetsSalsichas = pets.filter((pet, indice) => {
    return pet.raca === "Salsicha"
})

console.log(apenasPetsSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" 

// >>> .map -> .filter  <<<

const apenasPetsPoodles = pets.filter((pet, indice) => {
    return pet.raca === "Poodle"
})

const mensagemPoodles = apenasPetsPoodles.map((pet, indice) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
})

mensagemPoodles

//-----------------------------------------------------

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item 

// >>> .map <<<

const apenasNomes = produtos.map((produto, indice) => {
    return produto.nome
})
console.log(apenasNomes)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// >>>.map + conta

const produtosComDesconto = produtos.map((produto, indice) => {
    return `${produto.nome} por R$ ${produto.preco * 0.95} com 5% de desconto.`
})

console.log(produtosComDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

//>>> .filter <<<

const apenasBebidas = produtos.filter((produto, indice) => {
    return produto.categoria === "Bebidas"
})

console.log(apenasBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//>>> .filter + .includes() <<<

const apenasYpe = produtos.filter((produto, indice) => {
    return produto.nome.includes("Ypê")
})

console.log(apenasYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

//>>> .map <<<

const fraseProdutosYpe = apenasYpe.map((produto, indice) => {
    return `Compre ${produto.nome} por ${produto.preco}.`
})

console.log(fraseProdutosYpe)
