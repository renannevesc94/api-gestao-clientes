const route = require('express').Router();
const clientControler = require('../controllers/client.controller');
const authMiddleware = require('../middleware/auth.middleware');


route.get('/', authMiddleware.validarToken ,clientControler.getClients );
route.get('/:cnpj', authMiddleware.validarToken, clientControler.getClientbyCnpj)
route.post('/', authMiddleware.validarToken ,clientControler.insertClient);
route.delete('/:cnpj', authMiddleware.validarToken, clientControler.deleteClient);
route.patch('/:cnpj', authMiddleware.validarToken, clientControler.updateStatusClient)

module.exports = {
    route
}