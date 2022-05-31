```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

 var quantidadeElementos = arrayDeNumeros.filter(x => x === numeroEscolhido).length;
 if (quantidadeElementos !== 0 ){
   return (`O número ${numeroEscolhido} aparece ${quantidadeElementos}x`)
 } else {
   return (`Número não encontrado`)
 }
}```