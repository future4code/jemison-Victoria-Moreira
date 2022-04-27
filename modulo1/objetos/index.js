// Exercícios de interpretação de código

// 1 - a)
// console.log(filme.elenco[0]) // "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) // "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) // Canal: Globo; horário: 14h

// 2 - a) nome: Juca; idade: 3; raca: SRD
// nome: Juba; idade: 3; raca: SRD
// nome: Jubo; idade: 3; raca: SRD

// b) Realiza a cópia de um objeto (ou array) inteiro.

// 3 - a) false; undefined.
// b) Para o primeiro console.log, foi impresso o valor correspondente a chave "backender" dentro do objeto "pessoa". Já para "altura", como não existe essa chave, foi impresso um valor indefinido (undefined).

// ----------------------------------------------

// Exercícios de escrita de código

// 1 - Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Maria Eduarda",
    apelidos: ["Madu", "Duda", "Moranguinho"]
}

function imprimirObjeto (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
}
imprimirObjeto(pessoa);

const novaPessoa = {
    ...pessoa,
    apelidos: ["Dudinha", "FM", "Madu Arroz"]
}
imprimirObjeto(novaPessoa)

// 2 - Resolva os passos a seguir:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const primeiraPessoa = {
    nome: "Júlia",
    idade: 25,
    profissao: "Gastróloga"
}

const segundaPessoa = {
    nome: "Maria Eduarda",
    idade: 15,
    profissao: "Estudante"
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function imprimirNovoObjeto (parametro) {
    console.log(`["${parametro.nome}", ${parametro.nome.length}, ${parametro.idade}, "${parametro.profissao}", ${parametro.profissao.length}]`)
}

imprimirNovoObjeto(primeiraPessoa)
imprimirNovoObjeto(segundaPessoa)

// 3 - a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "kiwi",
    disponibilidade: true
}

const fruta3 = {
    nome: "jaca",
    disponibilidade: false
}

// c)  Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function pegarFruta (fruta) {
    carrinho.push(fruta)
}
 pegarFruta(fruta1)
 pegarFruta(fruta2)
 pegarFruta(fruta3)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)

// ------------------------------------

// Desafios
// 1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

let nomeUsuario = prompt("Qual é o seu nome?")
let idadeUsuario = prompt("Quantos anos você tem?")
let profissaoUsuario = prompt("Qual é a sua profissão?")

const usuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario
}

console.log(usuario)

// 2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

const primeiroFilme = {
    nome: "Carol",
    anoDeLancamento: 2015,
}

const segundoFilme = {
    nome: "Ammonite",
    anoDeLancamento: 2020,
}

function imprimirComparacao () {
    let filme1 = primeiroFilme.anoDeLancamento
    let filme2 = segundoFilme.anoDeLancamento
    
    let maisRecente = filme1 < filme2
    let mesmoAno = filme1 === filme2

    console.log(`O primeiro filme foi lançado antes do segundo? ${maisRecente}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

imprimirComparacao()

// 3 - Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

function controleEstoque (fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
    console.log(fruta.disponibilidade)
}

controleEstoque(fruta1)
controleEstoque(fruta2)
controleEstoque(fruta3)