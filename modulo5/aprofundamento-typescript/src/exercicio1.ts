// const minhaString : string = "8"

// let meuNumero : string | number = 4 
// meuNumero = "24"

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorEscolhida  {
    VERMELHA = "vermelha", 
    LARANJA = "laranja", 
    AMARELA = "amarela", 
    VERDE = "verde", 
    AZUL = "azul", 
    AZULESCURO = "azulEscuro",
    VIOLETA = "violeta"

}

const pessoa01: Pessoa = {
    nome: "Fulano",
    idade: 8,
    corFavorita: CorEscolhida.VIOLETA
}

const pessoa02: Pessoa = {
    nome: "Beltrano",
    idade: 4,
    corFavorita: CorEscolhida.LARANJA
}

const pessoa03: Pessoa = {
    nome: "Sicrano",
    idade: 24,
    corFavorita: CorEscolhida.AZUL
}

const arrayPessoas = []
arrayPessoas.push(pessoa01)
arrayPessoas.push(pessoa02)
arrayPessoas.push(pessoa03)

console.table(arrayPessoas)