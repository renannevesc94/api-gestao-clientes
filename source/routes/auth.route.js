import {Router} from 'express';
const route = Router()
import authControler from '../controllers/auth.controller.js';


/***CHEGO NA ROTA, IDENTIFICO ELA E CHAMO O CONTROLER */
route.post('/', authControler.login);

export default {
    route
}