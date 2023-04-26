import clientService from '../services/client.service.js';
import { validaCnpj } from '../middleware/utils.middleware.js';
import Client from '../models/Client.js';

const getAllClients = async (req, resp) => {
    let {limite, offset} = req.query
    const totalClients = await clientService.contarClientes()
    const currentUrl = req.baseUrl
 
    limite = Number(limite);
    offset = Number(offset)

    if(!limite){
        limite = 5
    }

    if(!offset){
        offset = 0;
    }

    const next = offset + limite; 
    const nextUrl = next < totalClients ? `${currentUrl}?limite=${limite}&offset=${next}`: null;

    const anterior = offset - limite < 0 ? null : offset - limite;
    const previousUrl = anterior != null ? `${currentUrl}?limite=${limite}&offset=${anterior}`: null 

    try {
        const clientes = await clientService.getAllClientsService(limite, offset);
        resp.status(200).json( {nextUrl, previousUrl, offset, limite, 
            results: clientes});
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
        return resp.status(200).json({ cliente});

    } catch (error) {
        return resp.status(error.status).json({ message: error.message });
    }
}

const insertClient = async (req, resp) => {

    try {
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

const searchClients = async (req, resp) => {
   try {
      const pesquisa = req.query
      const cliente = await clientService.searchClientsService(pesquisa)
      resp.status(200).json(cliente)
   } catch (error) {
        resp.status(500).json({message: 'Deu ruim em'})
   }
}
export default {
    getAllClients,
    insertClient,
    deleteClient,
    getClientbyCnpj,
    getStatusCli,
    updateStatusClient,
    searchClients
}