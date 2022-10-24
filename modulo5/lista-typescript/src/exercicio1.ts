
function separateData (
    name: string, 
    birthDate: string
    ){
      
    const data = birthDate.split('/')
      
    return `Olá me chamo ${name}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}.`
  }

console.log(separateData("Victoria", "12/05/1996"))

