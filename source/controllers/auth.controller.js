import authService from '../services/auth.service.js';
import jwt from 'jsonwebtoken';

const login = async (req, resp) => {
    const { userName, senhaUser } = req.body;
    const usuario = await authService.login(userName, senhaUser);

    if (!usuario) {
        return resp.status(400).json({ message: 'Usuário ou Senha Incorretos' });
    }

    const token = jwt.sign({ payload: usuario._id }, process.env.SECRET, { expiresIn: '1h' });
    return resp.status(200).json({ message: 'Login Efetuado', token });
}

export default {
    login
}