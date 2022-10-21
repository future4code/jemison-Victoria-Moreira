const geraTabuada = (numero) => {
  if (typeof numero !== "number") {
      return "Erro. O parâmetro deve ser um número."
  }

  if (numero < 0 || numero > 10) {
      return "Erro. O parâmetro precisa ser um número entre 1 e 10."
  }

  const resultado = []

  for (let i = 0; i <= 10; i++) {
      resultado.push(`${numero} x ${i} = ${numero * i}`)
  }

  return resultado
}

console.log(geraTabuada(2.5))
console.log(geraTabuada("2.5"))
console.log(geraTabuada(250))