import clientService from '../services/client.service.js';
import { validaCnpj } from '../middleware/utils.middleware.js';

const getAllClients = async (req, resp) => {
    try {
        let { limite, offset } = req.query
        const totalClients = await clientService.contarClientes()
        const currentUrl = req.baseUrl

        limite = Number(limite);
        offset = Number(offset)

        if (!limite) {
            limite = 10
        }

        if (!offset) {
            offset = 0;
        }

        const next = offset + limite;
        const nextUrl = next < totalClients ? `${currentUrl}?limite=${limite}&offset=${next}` : null;
        const anterior = offset - limite < 0 ? null : offset - limite;
        const previousUrl = anterior != null ? `${currentUrl}?limite=${limite}&offset=${anterior}` : null
        const clientes = await clientService.getAllClientsService(limite, offset);
        resp.status(200).json({
            nextUrl, previousUrl, offset, limite,
            results: clientes
        });
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
        return resp.status(200).json({ cliente });

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
            return resp.status(400).json({ message: 'Campo obrigatório não informado' })
        }
        if (!validaCnpj(cnpj))
            return resp.status(400).json({ message: 'CNPJ informado está incorreto' })
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

const updateClient = async(req, resp) => {
    try {
        const cnpj = req.params.cnpj
        const { razao, telefone, contato, alerta, situacao } = req.body
        const cliente = {
            razao,
            telefone,
            contato,
            alerta,
            situacao
        }
    
        if (!razao || !telefone || !contato || !situacao) {
            return resp.status(400).json({ message: 'Campo obrigatório não informado' })
        }
        await clientService.updateClientService(cnpj, cliente)
        return resp.status(201).json({ message: 'Cliente atualizado' })
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
        let { limite, offset, filtro, status } = req.query
        let filtroCount = {}
        if (status != '') {
            filtroCount = {
                $and: [
                    { situacao: status },
                    {
                        $or: [
                            { razao: { $regex: filtro, $options: 'i' } },
                            { cnpj: { $regex: filtro, $options: 'i' } }
                        ]
                    }
                ]
            }
        }

        filtroCount = {
            $or: [
                { razao: { $regex: filtro, $options: 'i' } },
                { cnpj: { $regex: filtro, $options: 'i' } }
            ]
        }
        const totalClients = await clientService.contarClientes(filtroCount)
        const currentUrl = req.baseUrl
       
        limite = Number(limite);
        offset = Number(offset)

        if (!limite) {
            limite = 10
        }

        if (!offset) {
            offset = 0;
        }

        const next = offset + limite;
        const nextUrl = next < totalClients ? `${currentUrl}/search?filtro=${filtro}&status=${status}&limite=${limite}&offset=${next}` : null;
        const anterior = offset - limite < 0 ? null : offset - limite;
        const previousUrl = anterior != null ? `${currentUrl}/search?filtro=${filtro}&status=${status}&limite=${limite}&offset=${anterior}` : null
        const clientes = await clientService.searchClientsService(filtro, limite, offset, status)
        resp.status(200).json({
            nextUrl, previousUrl, offset, limite,
            results: clientes
        });
    } catch (error) {
        resp.status(500).json({ message: error.message })
    }
}
export default {
    getAllClients,
    insertClient,
    deleteClient,
    getClientbyCnpj,
    getStatusCli,
    updateStatusClient,
    updateClient,
    searchClients
}

