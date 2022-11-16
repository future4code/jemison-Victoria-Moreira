import express, { Request, Response } from "express"
import { ToDoList } from "./type"
import cors from "cors"
import { list } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//1- Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.
app.get("/ping",(req:Request,res:Response)=>{
    res.send("pong")
});

//4- Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get("/list",(req:Request, res:Response)=>{

    let taskStatus: ToDoList[];

    switch (req.query.completed) {
        
        case 'true':
                taskStatus = list.filter((taskStatus)=> taskStatus.completed === true)
                res.status(200).send(taskStatus)
            break;

        case 'false':
                taskStatus = list.filter((taskStatus)=> taskStatus.completed === false)
                res.status(200).send(taskStatus)
            break;

        default:
            res.status(200).send("Insira os parâmetros.")  
    }     
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});