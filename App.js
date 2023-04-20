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

/*


//BUSCAR CLIENTE POR CNPJ
app.get('/clientes/:cnpj', async (req, resp) => {
    const cnpj = req.params.cnpj

    try {
        const cli = await Cliente.findOne({ cnpj: cnpj })
        resp.status(200).json(cli)

    } catch (error) {
        resp.status(500).json({ message: error })
    }
})



//FZER LOGIN E RETORNAR TOKEN DE SEGURANÇA


*/

app.use("/login", authRoute.route);
app.use("/clientes", clientRoute.route);
app.use('/clientes', clientRoute.route);
app.use("/clientes", clientRoute.route);

conectDatabase.dataBase();
app.listen(3000);

