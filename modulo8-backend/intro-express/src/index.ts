import express from "express";
import cors from "cors";
import { Request, Response } from "express";


const app = express() 
app.use(express.json()) 
app.use(cors()) 


app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
    res.status(200).send("Deu certo")
})

app.post('/post', (req: Request, res: Response) => {

    console.log("req.body", req.body.nome)
  
    res.status(200).send("Usuario cadastrado com sucesso")
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });