import express, {Request, Response} from "express"

import cors from 'cors'
import { posts, users } from "./data"

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

//7- Construa um endpoint que retorne os posts criados no exercício anterior.

app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts)
})

//8- Construa um endpoint que retorne os posts de um usuário em particular.

app.get("/posts/:userId", (req:Request, res:Response) => {
    let user = Number(req.params.userId)

    const post = posts.filter((post) => {
        return post.userId == user
    })

    res.status(200).send(post)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});