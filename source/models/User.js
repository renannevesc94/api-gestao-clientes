//importando o mongoose que modela os dados para o MONGODB
const mongoose = require('mongoose');


const schemaUsuario = new mongoose.Schema({
    userName: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator:function(value){
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regexEmail.test(value)
            },
            message: valor => `${valor} não é um endereço de email válido`
        }
     },
    senhaUser: { 
        type: String, 
        required: true, 
        min: [8, 'Senha inválida'] }
})

const Usuario = mongoose.model('Usuario', schemaUsuario);



module.exports = Usuario