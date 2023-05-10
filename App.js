//IMPORTS DE CONFIGURAÇÃO E BD
import dontenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerRoute from './source/routes/swagger.route.cjs'
import conectDatabase from './source/database/database.js';


//IMPORT DAS ROUTES 
import authRoute from './source/routes/auth.route.js';
import clientRoute from './source/routes/client.route.js';
 
dontenv.config()


const port = process.env.port || 3000
const app = express();
app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(express.json());

app.use("/login", authRoute.route);
app.use("/clientes", clientRoute.route);
app.use('/docs', swaggerRoute)

//Function que realiza a conexão com o banco de dados
conectDatabase.dataBase();
console.log(port)
app.listen(port);

