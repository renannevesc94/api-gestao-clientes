//ARQUIVO QUE CONTEM AS ROTAS PARA CADA RECURSO DA API COMO (USUARIOS, PRODUTOS, CLIENTES...)

//ATRIBUI A FUNÇÃO "ROUTER()" DO MÓDULO EXPRESS A UMA CONSTANTE E PODEMOS ACESSAR OS 
//VERBOS HTTP QUE O EXPRESS ENCAPSULA (GET - POST - PUT...)
import route from ('express')
route.Router();

//IMPORTANDO O CONTROLLER DE USER ONDE ESTÃO OS CALLBACKS
const userController = require('../controllers/user.controller');

route.get('/')

export default {
    route
};
