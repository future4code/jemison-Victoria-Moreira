// ------- EXERCICIO 1

// Letra a) Usando process.argv após o segundo índice

// Letra b) 

// function falarMensagem() {
//   const nome = process.argv[2]
//   const idade = process.argv[3]
//   console.log(`Olá, ${nome}! Você tem ${idade} anos!`)
// }

// falarMensagem()

// Letra c)

function falarMensagem() {
  const nome = process.argv[2]
  const idade = Number(process.argv[3])
  console.log(`Olá, ${nome}! Você tem ${idade} anos! Em sete anos você terá ${idade + 7}`)
}

falarMensagem()
