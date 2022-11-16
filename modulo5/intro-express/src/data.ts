import { Post, User } from "./types";

//3- Crie um array de usuários para servir como base de dados da nossa API.

export const users: User[] = [
  {
    id: 1,
    name: "vanessa",
    phone: "13222444",
    email: "van.martins@hotmail.com",
    website: "van-martins.com"
  },
  {
      id: 2,
      name: "julia",
      phone: "82400101",
      email: "jucabral@hotmail.com",
      website: "jucabral.com"
  },
  {
      id: 3,
      name: "danielle",
      phone: "12445657",
      email: "dani@hotmail.com",
      website: "dani.com"
  },
  {
      id: 4,
      name: "tadeu",
      phone: "24128874",
      email: "tad.franco@hotmail.com",
      website: "tad.franco.com"
  },
]

//6- Crie um array de posts para incrementar a base de dados da nossa API.
//r: Criado fora do array de usuários para facilitar a visualização e localização. 

export const posts: Post[] = [
  {
      id: 1,
      userId: 2,
      title: "meu primeiro post",
      body: "aqui eu escrevo alguma coisa."
  },
  {
      id: 2,
      userId: 4,
      title: "olá, mundo!",
      body: "aqui eu deveria escrever."
  },
  {
      id: 3,
      userId: 3,
      title: "tudo é teste",
      body: "nadinha."
  },
  {
      id: 4,
      userId: 1,
      title: "tudo indo bem.",
      body: "tudo."
  }
]