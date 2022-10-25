type Amostra = {
  numeros: any,
  obterEstatisticas: any
}
const amostraDeIdades: Amostra = {

  numeros: [21, 18, 65, 44, 15, 18],

  obterEstatisticas: (numeros: any) => {

      const numerosOrdenados: number[] = numeros.sort(
          (a: number, b: number) => a - b
      )
  
      let soma: number = 0
  
      for (let num of numeros) {
          soma += num
      }
  
      type TipoEstatisticas = {
          maior : number,
          menor: number,
          media: number
      }
  
      const estatisticas: TipoEstatisticas = {
          maior: numerosOrdenados[numeros.length - 1],
          menor: numerosOrdenados[0],
          media: soma / numeros.length
      }
  
      return estatisticas
  }
}

console.log(amostraDeIdades)