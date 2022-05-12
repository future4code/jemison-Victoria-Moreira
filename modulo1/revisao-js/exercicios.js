// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.

function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray

// EXERCÍCIO 02 **
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido

// EXERCÍCIO 03 **
// Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
function retornaArrayOrdenado(array) {
  
  return array.sort((a, b) => a-b)
}
retornaArrayOrdenado

// EXERCÍCIO 04 **
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
    return array.filter((item, index) => item % 2 === 0)
}
retornaNumerosPares

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((item, index) => item % 2 === 0).map ((item, index) => item ** 2)
}
retornaNumerosParesElevadosADois

// EXERCÍCIO 06
// Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
    let maior = -Infinity
  for (let i=0; i < array.length; i++){
      if(array[i]> maior){
        maior = array[i]
      }
  }
  return maior
}
retornaMaiorNumero

// EXERCÍCIO 07
// Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

// - `maiorNumero` → contém o maior número
// - `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
// - `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

// ⚠️ Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima

function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero
  let maiorDivisivelPorMenor
  let diferenca
  if (num1 > num2){
    maiorNumero = num1
    maiorDivisivelPorMenor = num1 % num2 === 0
    diferenca = num1 - num2
  } else {
    maiorNumero = num2
    maiorDivisivelPorMenor = num2 % num1 === 0
    diferenca = num2 - num1
  }
  const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
  return objeto
}

// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares.

function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for (let numeroParaVerificar = 0; numerosPares.length < n; numeroParaVerificar ++) {
     if (numeroParaVerificar % 2 === 0) {
      numerosPares.push(numeroParaVerificar)
    } 
  } return numerosPares
 } 
 console.log(retornaNPrimeirosPares)

// EXERCÍCIO 09
// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).

function classificaTriangulo(ladoA, ladoB, ladoC) {

let classificacaoTriangulo

 if (ladoA === ladoB && ladoA === ladoC) {
  classificacaoTriangulo = "Equilátero"
 } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  classificacaoTriangulo = "Escaleno"
 } else {
  classificacaoTriangulo = "Isósceles"
 }
 return classificacaoTriangulo
}

// EXERCÍCIO 10
// Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 

function retornaSegundoMaiorESegundoMenor(array) {
  
  let novoArray = array.sort((a, b) => a-b)
  let segundoMenorValor = novoArray[1]
  let segundoMaiorValor = novoArray[novoArray.length - 2]

  return [segundoMaiorValor, segundoMenorValor]
} 
retornaSegundoMaiorESegundoMenor

// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. Ela deve retornar uma chamada para assistir a esse filme.

function retornaChamadaDeFilme(filme) {
  const objeto = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
} 
retornaChamadaDeFilme

// EXERCÍCIO 12
// Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome. 

function retornaPessoaAnonimizada(pessoa) {
  
  let novoCadastro = {
    ...pessoa,
    nome: `ANÔNIMO`
  }
  return novoCadastro
}
retornaPessoaAnonimizada

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}