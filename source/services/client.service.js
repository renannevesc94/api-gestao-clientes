import Client from '../models/Client.js';

const getAllClientsService = async (limite, offset) => {
    try {
        const clientes = await Client.find({}).skip(offset).limit(limite)
        if (!clientes) {
            throw new Error('Falha ao carregar os clietes do DB')
        }
        return clientes
    } catch (error) {
        throw { status: 500, message: error.message }
    }
};

const getClientByCnpjService = async (cnpj) => {
    try {
        const cliente = await Client.findOne({ cnpj: cnpj })
        if (!cliente) {
             throw { msg: 'Cliente não localizado', status: 404 }
        }
        return cliente
    }
    catch (error) {
        throw{message: error.msg|| 'Erro de conexão', status:error.status|| 500}
    }
}

const insertClientService = async (cliente) => {
    try {
        const findCli = await Client.findOne({ cnpj: cliente.cnpj })
        console.log(findCli)
        if (findCli) {
            throw ({ message: 'Cliente Já esta Cadastrado', status: 400 })
        }
        return await Client.create(cliente)
    }
    catch (error) {
        console.log(error)
        throw ({ message:error.message || 'Falha no acesso aos dados', status: error.status || 500 })
    }
}

const deleteClientService = async (cnpj) => {
    try {
        const findCli = await Client.findOne({ cnpj: cnpj })
        if (!findCli) {
            throw { msg: 'Cliente não localizado', status: 404 }
        }
        return await Client.deleteOne({ cnpj: cnpj })
    } catch (error) {
        throw ({ message:error.message || 'Falha no acesso aos dados', status: error.status || 500 })
    }
}

const updateStatusClientService = async (cnpj, status) => {
    try {
        const cliente = await Client.findOne({ cnpj: cnpj })
        if (!cliente) {
            throw { msg: 'Cliente não localizado', status: 404 }
        }
        cliente.situacao = status
        await cliente.save()
    }

    catch (error) {
        throw ({ message:error.message || 'Falha no acesso aos dados', status: error.status || 500 })
    }
}

const getStatusClientService = async (cnpj) => {
    try {
        const cliente = await Client.findOne({ cnpj: cnpj })
        if (!cliente) {
            throw { message: 'Cliente Não Localizado Na Base de Dados', status: 400 }
        }
        return ({ status: cliente.situacao, alerta: cliente.alerta })
    } catch (error) {
        throw ({ message:error.message || 'Falha no acesso aos dados', status: error.status || 500 })
    }
}

const contarClientes = (filtro) =>Client.countDocuments(filtro);

const searchClientsService = async (filtro, limite, offset)=>{
    return await Client.find({
        $or:[
        {razao: { $regex: filtro, $options: 'i' }},
        {cnpj: { $regex: filtro, $options: 'i' }}
        ]
}).skip(offset).limit(limite);
}

export default {
    getAllClientsService,
    insertClientService,
    deleteClientService,
    getClientByCnpjService,
    getStatusClientService,
    updateStatusClientService,
    contarClientes,
    searchClientsService
}



