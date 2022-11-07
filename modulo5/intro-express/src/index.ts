import express, {Request, Response} from "express"

import cors from 'cors'
import { type } from "os"
import { users } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//1- Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.

app.get("/", ( req:Request, res:Response) => {          
    res.send("Hello from Express")
})

//4- Construa um endpoint que retorne os usuários criados no exercício anterior.

app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(users)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});