import express, { Request, Response } from "express"

import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

//1- Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.
app.get("/ping",(req:Request,res:Response)=>{
    res.send("pong")
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});