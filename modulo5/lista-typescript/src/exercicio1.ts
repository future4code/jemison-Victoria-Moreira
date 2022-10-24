//Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

function separateData (
    name: string, 
    birthDate: string
    ){
      
    const data = birthDate.split('/')
      
    return `Olá me chamo ${name}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}.`
  }

console.log(separateData("Victoria", "12/05/1996"))

