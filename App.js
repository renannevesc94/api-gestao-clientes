//IMPORTS DE CONFIGURAÇÃO E BD
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectDatabase = require('./source/database/database');

//IMPORT DAS ROUTES 
const userRoute = require('./source/routes/user.route');
const authRoute = require('./source/routes/auth.route');
const clientRoute = require('./source/routes/client.route');


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
app.listen(3000);

