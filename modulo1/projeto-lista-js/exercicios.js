// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura do retângulo.")
  const largura = prompt("Digite a largura do retângulo.")

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento."))

  console.log(anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome.")
  const idade = prompt("Digite sua idade.")
  const email = prompt("Digite seu email.")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas = []

  const cor1 = prompt("Qual sua cor favorita?")
  coresFavoritas.push(cor1)

  const cor2 = prompt("Qual sua cor favorita?")
  coresFavoritas.push(cor2)

  const cor3 = prompt("Qual sua cor favorita?")
  coresFavoritas.push(cor3)

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 
  let quantidadeElementos = array.length
  return array [quantidadeElementos - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimoIndice = array.length - 1
  let primeiroIndice = array.shift()
  let ultimoItem = array.pop()

  array.splice(0, 0, ultimoItem);
  array.splice(ultimoIndice, 0, primeiroIndice)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  primeiraString = string1.toLowerCase()
  segundaString = string2.toLowerCase()
  let resposta = primeiraString === segundaString

  return resposta
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em qual ano estamos?"))
  const anoNascimento = Number(prompt("Em qual ano você nasceu?"))
  const ultimaEmissaoID = Number(prompt("Qual ano seu RG foi emitido?"))
  
  let idade = anoAtual - anoNascimento
  let tempoDeCarteira = anoAtual - ultimaEmissaoID
  
  let primeiraCondicao = (idade <= 20 && tempoDeCarteira >= 5)
  let segundaCondicao = (idade > 20 && idade <= 50 && tempoDeCarteira >= 10)
  let terceiraCondicao = (idade > 50 && tempoDeCarteira >= 15)
  
  console.log(primeiraCondicao || segundaCondicao || terceiraCondicao)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const multiplo400 = ano % 400
  const multiplo4 = ano % 4
  const multiplo100 = ano % 100

  return (multiplo400 === 0 || multiplo4 === 0 && multiplo100 !== 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    const idade = prompt("Você tem mais de 18 anos?")
    const escolaridade = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

    console.log(idade === "sim" && escolaridade === "sim" && disponibilidade === "sim")
}