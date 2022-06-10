
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }



    
});


//exercicio 1 - A) Get B) Usaria um map para percorrer em cada item do array
 
//exercicio 2 - A) Criando uma var e tipando ela com o type criado B) criando um ENUM e atribuindo ao type