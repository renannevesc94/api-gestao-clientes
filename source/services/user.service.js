//AQUI VEM A TARFAS QUE PODEM SER REAPROVEITADAS EM OUTRAS PARTS
const Usuario = require('../models/Users');

const checkUser =  (user, senha) =>  Usuario.findOne({userName: user, senhaUser: senha})

module.exports ={ checkUser}