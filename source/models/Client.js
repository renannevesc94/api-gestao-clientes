import mongoose from 'mongoose';
import {validaCnpj} from '../middleware/utils.middleware.js'

//criando o SCHEMA "modelo de dados para o módulo"

const schemaCliente = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validaCnpj,
            message: 'CNPJ Inválido',
        }
    },
    razao: { type: String, required: true },
    telefone: { type: String },
    contato: { type: String },
    situacao: { type: String, required: true },
    alerta: { type: String}
});

const Client = mongoose.model('Cliente', schemaCliente);

export default Client