import {Router} from 'express';
const route = Router()
import clientControler from '../controllers/client.controller.js'
import {validarToken} from'../middleware/auth.middleware.js';


route.get('/', validarToken ,clientControler.getAllClients );
route.get('/search',validarToken, clientControler.searchClients);
route.get('/:cnpj', validarToken, clientControler.getClientbyCnpj);
route.get('/status/:cnpj', clientControler.getStatusCli);
route.post('/', validarToken ,clientControler.insertClient);
route.delete('/:cnpj', validarToken, clientControler.deleteClient);
route.patch('/:cnpj', validarToken, clientControler.updateStatusClient);
route.put('/:cnpj', validarToken, clientControler.updateClient);

export default {
    route
}