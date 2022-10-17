function realizaCalculo() {
  const operacaoMatematica = process.argv[2]
  const x = Number(process.argv[3])
  const y = Number(process.argv[4])

  switch (operacaoMatematica) {
      case "add":
          return x + y
      case "sub":
          return x - y
      case "mult":
          return x * y
      case "div":
          return x / y
      default:
          return "Insira dois argumentos"
  }
}

console.log(realizaCalculo())