function checarAnoBissexto(ano: number): any {
  const condicao1: boolean = ano % 400 === 0
  const condicao2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
  const condicao3: boolean = condicao1 || condicao2

  if (condicao3 === true) {
     return "É ano bissexto."
  } else {
      return "Não é bissexto."
  } 
}

console.log(checarAnoBissexto(2006))
console.log(checarAnoBissexto(2022))
console.log(checarAnoBissexto(1996))
console.log(checarAnoBissexto(2020))