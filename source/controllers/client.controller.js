const clientService = require('../services/client.service');
const autenticarUsuario = require('../middleware/auth.middleware');


const getClients = async (req, resp) => {
    
    autenticarUsuario.validarToken()
    
    try {
        const clientes = await clientService.getClientesService();
        resp.status(200).json(clientes);
    } catch (error) {
        resp.status(500).json({ message: error });
    }
}

const insertClient = async (req, resp) => {
    const { cnpj, razao, telefone, contato, alerta, situacao } = req.body
    const cliente = {
        cnpj,
        razao,
        telefone,
        contato,
        alerta,
        situacao
    }

    if (!cnpj || !razao || !telefone || !contato || !situacao) {
        return resp.status(401).json({ message: 'Campo obrigatório não informado' })
    }

    try {
        await clientService.insertClientService(cliente)
        return resp.status(200).json({ message: 'Cliente Cadastrado com sucesso!' })
    } catch (error) {
        return resp.status(error.status).json({ message: error.message })
    }


}

const deleteClient = async (req, resp) => {
    const cliCnpj = req.params.cnpj

    try {
        await clientService.deleteClientService(cliCnpj);
        return resp.status(200).json({ message: 'Cliente apagado com sucesso' })
    } catch (error) {
        return resp.status(500).json({ message: error.message })
    }

}

const updateStatusClient = async (req, resp) => {
    const cnpj = req.params.cnpj;
    const status = req.body.situacao;
   
    try {
        await clientService.updateStatusClientService(cnpj, status)
        return resp.status(201).json({message: 'Status do cliente atualizado'})
    } catch (error) {
        return resp.status(500).json({message: error.message})
    }
}

module.exports = {
    getClients,
    insertClient,
    deleteClient,
    updateStatusClient
}