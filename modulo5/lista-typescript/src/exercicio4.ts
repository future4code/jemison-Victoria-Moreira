//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

// [
// 	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
// ]

//Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente.

enum SETORES {
  MARKETING= 'Marketing',
  VENDAS= 'Vendas',
  FINANCEIRO= 'Financeiro'
}

type Colaboradores = {
  nome: string,
  salario: number,
  setor: SETORES,
  presencial: boolean
}

const listaColaboradores: Colaboradores[] = [
  { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
  { nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
  { nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
  { nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
  { nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
  { nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
]

function filtrarPorSetor (lista:Array<Colaboradores>) {
  const colaboradorMarketingEPresencial = lista.filter ((item) =>{
    return item.setor === 'Marketing' && item.presencial === true
  })
  return colaboradorMarketingEPresencial
}

console.log(filtrarPorSetor(listaColaboradores))