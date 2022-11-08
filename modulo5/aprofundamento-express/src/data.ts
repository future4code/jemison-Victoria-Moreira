import { ToDoList } from "./type";

//3- Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.

export const todolist: ToDoList[] = [
  {
    userId: 0,
    id: 1,
    title: `Cuidar do cachorro`,
    completed: true
  },
  {
    userId: 1,
    id: 2,
    title: `Colocar o lixo pra fora`,
    completed: false
  },
  {
    userId: 2,
    id: 3,
    title: `Cozinhar`,
    completed: false
  },
  {
    userId: 3,
    id: 4,
    title: `Lavar a louça`,
    completed: true
  }
]