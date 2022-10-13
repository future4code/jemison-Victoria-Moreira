const converteCelsius = (temperatura, escala) => {
  if (escala === "K") {
    return `${temperatura}° Celsius é equivalente a ${temperatura+273} Kelvin`;
  } else if (escala === "F") {
    return `${temperatura}° Celsius é equivalente a ${temperatura*1.8+32} Fahrenheit`;
  } else {
    return `Erro. Parâmetro inválido ("nome do parâmetro").`
  }
}

console.log(converteCelsius(2, "K"))
console.log(converteCelsius(10, "F"))
console.log(converteCelsius(10, "f"))