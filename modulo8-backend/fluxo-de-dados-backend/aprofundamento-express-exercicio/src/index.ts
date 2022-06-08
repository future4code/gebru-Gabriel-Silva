import express from "express"
import cors from "cors"
import { produtos, products } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.post("/", (req, response) => {

})

// app.get("/test", (req, res) => {
//   res.send("A api ta ON")
// })

