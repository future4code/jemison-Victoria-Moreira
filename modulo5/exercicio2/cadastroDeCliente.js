const listaDeClientes = [
	{ id: 1, nome: "Fulano"},
	{ id: 2, nome: "Ciclano"},
	{ id: 3, nome: "Beltrano"},
	{ id: 4, nome: "Fulana"}
]

const cadastrarCliente = (novoCliente) => {
	if (typeof novoCliente.id !== "number") {
		return "Erro. Id inválido, deve ser um número."
	} 
	if (typeof novoCliente.nome !== "string") {
		return "Erro. Nome inválido, deve ser uma string."
	}
	for (let cliente of listaDeClientes) {
		if (cliente.id === novoCliente.id) {
			return "Erro. Id já existe."
		}
	}
	listaDeClientes.push(novoCliente)
	return listaDeClientes
}

console.log(cadastrarCliente({id: 5, nome: "Velma"}))
console.log(cadastrarCliente({id: 1, nome: "Scooby"}))