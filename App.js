//IMPORTS DE CONFIGURAÇÃO E BD
import dontenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import conectDatabase from './source/database/database.js';

const port = process.env.PORT || 3000

//IMPORT DAS ROUTES 
import authRoute from './source/routes/auth.route.js';
import clientRoute from './source/routes/client.route.js';
 
dontenv.config()
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

conectDatabase.dataBase();
app.listen(port);

