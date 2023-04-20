const Client = require('../models/Client');


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

const insertClientService = async (cliente) => {
    try {
        return await Client.create(cliente)
    } catch (error) {
        throw { status: 500, message: 'Usuário Já Cadastrado' }

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

const updateStatusClientService= async (cnpj, status) => {
    const cliente = await Client.findOne({cnpj:cnpj})
    if(!cliente){
      throw new Error('Falha na atualização do Cliente');
    }

    try {
            cliente.situacao = status
            await cliente.save()
        }  
       
    catch (error) {
        throw {status: 500, message: error.message}
    }
}



module.exports = {
    getClientesService,
    insertClientService,
    deleteClientService,
    updateStatusClientService
}





/* const totalCLientes = await Cliet.countDocuments();
const totalPaginas = Math.ceil(totalCLientes / limitePage);*/ 