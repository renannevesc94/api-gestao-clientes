import {Router} from 'express';
const route = Router()
import clientControler from '../controllers/client.controller.js'
import authMiddleware from'../middleware/auth.middleware.js';


route.get('/', authMiddleware.validarToken ,clientControler.getClients );
route.get('/:cnpj', authMiddleware.validarToken, clientControler.getClientbyCnpj)
route.post('/', authMiddleware.validarToken ,clientControler.insertClient);
route.delete('/:cnpj', authMiddleware.validarToken, clientControler.deleteClient);
route.patch('/:cnpj', authMiddleware.validarToken, clientControler.updateStatusClient)

export default {
    route
}