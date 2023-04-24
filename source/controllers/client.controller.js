import clientService from '../services/client.service.js';
import { validaCnpj } from '../middleware/utils.middleware.js';


const getClients = async (req, resp) => {
    try {
        const clientes = await clientService.getClientesService();
        resp.status(200).json(clientes);
    } catch (error) {
        resp.status(500).json({ message: error });
    }
}

const getClientbyCnpj = async (req, resp) => {

    try {
        const cnpj = req.params.cnpj;
        if (!validaCnpj(cnpj))
            return resp.status(400).json({ message: 'CNPJ informado está incorreto' })
        const cliente = await clientService.getClientByCnpjService(cnpj)
        return resp.status(200).json({ cliente, message: 'ok' });

    } catch (error) {
        return resp.status(error.status).json({ message: error.message });
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
        return resp.status(201).json({ message: 'Cliente Cadastrado com sucesso!' })
    } catch (error) {
        return resp.status(error.status).json({ message: error.message })
    }


}

const deleteClient = async (req, resp) => {
    try {
        const cnpj = req.params.cnpj;
        if (!validaCnpj(cnpj))
            return resp.status(400).json({ message: 'CNPJ informado está incorreto' })
        await clientService.deleteClientService(cnpj);
        return resp.status(200).json({ message: 'Cliente apagado com sucesso' })
    } catch (error) {
        return resp.status(500).json({ message: error.message })
    }
}

const updateStatusClient = async (req, resp) => {
    try {
        const cnpj = req.params.cnpj;
        const status = req.body.status;
        if (!validaCnpj(cnpj))
            return resp.status(400).json({ message: 'CNPJ informado está incorreto' })
        await clientService.updateStatusClientService(cnpj, status)
        return resp.status(201).json({ message: 'Status do cliente atualizado' })
    } catch (error) {
        return resp.status(500).json({ message: error.message })
    }
}

const getStatusCli = async (req, resp) => {
    try {
        const cnpj = req.params.cnpj;
        if (!validaCnpj(cnpj))
            return resp.status(400).json({ message: 'CNPJ informado está incorreto' })
        const status = await clientService.getStatusClientService(cnpj)
        return resp.status(200).json(status)
    } catch (error) {
        return resp.status(error.status).json({ message: error.message })
    }
}

export default {
    getClients,
    insertClient,
    deleteClient,
    getClientbyCnpj,
    getStatusCli,
    updateStatusClient
}