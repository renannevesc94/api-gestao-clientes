//AQUI VEM A TARFAS QUE PODEM SER REAPROVEITADAS EM OUTRAS PARTS
import Usuario from '../models/User.js';

const checkUser =  (user, senha) =>  Usuario.findOne({userName: user, senhaUser: senha})

export default { 
    checkUser
}