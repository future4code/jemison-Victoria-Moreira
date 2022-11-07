//3- Crie um array de usuários para servir como base de dados da nossa API.

import { User } from "./types";


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