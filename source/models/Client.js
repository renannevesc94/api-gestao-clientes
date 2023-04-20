const mongoose = require('mongoose');
const validarCnpj = require('./verificaCnpj.middleware')

//criando o SCHEMA "modelo de dados para o módulo"

const schemaCliente = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validarCnpj.validarCnpj,
            message: 'CNPJ Inválido',
        }
    },
    razao: { type: String, required: true },
    telefone: { type: String },
    contato: { type: String },
    situacao: { type: String, required: true },
    alerta: { type: String}
});


const Cliente = mongoose.model('Cliente', schemaCliente);

module.exports = Cliente