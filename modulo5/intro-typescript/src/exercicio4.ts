function comparaDoisNumeros(numero1: number, numero2: number) : any{
  let maiorNumero:number;
  let menorNumero:number;

  if (numero1 > numero2) {
    maiorNumero = numero1;
    menorNumero = numero2;
  } else {
    maiorNumero = numero2;
    menorNumero = numero1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaDoisNumeros(8, 5))
console.log(comparaDoisNumeros(5, 8))
console.log(comparaDoisNumeros(1, 0))
console.log(comparaDoisNumeros(2, 9))