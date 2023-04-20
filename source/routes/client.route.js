const route = require('express').Router();
const clientControler = require('../controllers/client.controller');


route.get('/', clientControler.getClients );
route.post('/', clientControler.insertClient);
route.delete('/:cnpj', clientControler.deleteClient);
route.patch('/:cnpj', clientControler.updateStatusClient)

module.exports = {
    route
}