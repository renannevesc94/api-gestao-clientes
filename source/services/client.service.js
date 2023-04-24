import Client from '../models/Client.js';


const getClientesService = async () => {
    try {
        const clientes = await Client.find({})
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
            throw { message: 'Cliente não localizado', status: 404 }
        }
        return cliente
    } catch (error) {
        throw { message: error.message, status: error.status }
    }
}

const insertClientService = async (cliente) => {

    try {
        const findCli = await Client.findOne({ cnpj: cliente.cnpj })
        if (findCli) {
            throw new Error('Cliente Já Cadastrado')
        }
        return await Client.create(cliente)

    } catch (error) {
        throw { status: 500, message: error.message }

    }


}

const deleteClientService = async (cnpj) => {
    const findCli = await Client.findOne({ cnpj: cnpj })
    if (!findCli) {
        throw new Error('Cliente não localizado')
    }
    try {
        return await Client.deleteOne({ cnpj: cnpj })
    } catch (error) {
        throw { status: 500, message: error.message }
    }
}

const updateStatusClientService = async (cnpj, status) => {
    const cliente = await Client.findOne({ cnpj: cnpj })
    if (!cliente) {
        throw new Error('Cliente não localizado');
    }

    try {
        cliente.situacao = status
        await cliente.save()
    }

    catch (error) {
        throw { status: 500, message: error.message }
    }
}

const getStatusClientService = async (cnpj) => {
    try {
        const cliente = await Client.findOne({cnpj: cnpj})
        if (!cliente) {
            throw { message: 'Cliente Não Localizado Na Base de Dados', status: 400 }
        } 
       
        return({status:cliente.situacao, alerta:cliente.alerta})
    } catch (error) {
        throw { message: error.message, status: error.status }
    }
}


export default {
    getClientesService,
    insertClientService,
    deleteClientService,
    getClientByCnpjService,
    getStatusClientService,
    updateStatusClientService
}





/* const totalCLientes = await Cliet.countDocuments();
const totalPaginas = Math.ceil(totalCLientes / limitePage);*/ 