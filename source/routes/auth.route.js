const route = require('express').Router();
const authControler = require('../controllers/auth.controller');


/***CHEGO NA ROTA, IDENTIFICO ELA E CHAMO O CONTROLER */
route.post('/', authControler.login);

module.exports = {
    route
}