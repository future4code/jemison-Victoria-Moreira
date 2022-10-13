const converteCelsius = (temperatura, escala) => {
  if (typeof temperatura !== "number") {
    return "Erro, parâmetro inválido. Corrigir temperatura."
  }
  if (typeof escala !== "string") {
    return "Erro. Parâmetro inválido. Insira uma string para unidade de temperatura."
  }
  if (escala !== "F" && escala !== "K") {
    return "Erro. Parâmetro inválido. Insira uma string para unidade de temperatura."
  }
  if (escala === "K") {
    return `${temperatura}° Celsius é equivalente a ${temperatura+273} Kelvin`;
  } else if (escala === "F") {
    return `${temperatura}° Celsius é equivalente a ${temperatura*1.8+32} Fahrenheit`;
  }
}

console.log(converteCelsius(2, "K"))
console.log(converteCelsius(10, "F"))
console.log(converteCelsius(10, "f"))