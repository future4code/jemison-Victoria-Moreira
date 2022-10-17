const toDoList = [
  "Atualizar formulários",
  "Enviar e-mails"
]

function addTarefas() {

  const novaTarefa = process.argv[2]
  toDoList.push(novaTarefa)
  return toDoList

}

console.log(addTarefas())