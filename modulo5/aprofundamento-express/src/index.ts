import express, { Request, Response } from "express"

import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

//teste
app.get("/ping",(req:Request,res:Response)=>{
    res.send("pong")
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});