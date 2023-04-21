import jwt from 'jsonwebtoken';

export const validarToken = (req, resp, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader 

    //Na chamada por JS precisa dessa linha separar o token quem vem com o bearer
    //authHeader && authHeader.split(' ')[1];

    if (!token) {
        resp.status(401).json({ message: 'Token de acesso não fornecido' });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret)
        next();
    } catch (error) {
        resp.status(403).json({ message: 'Falha na requisição Acesso Não Permitido' });

    }
}

