import jwt from 'jsonwebtoken';

export const validarToken = (req, resp, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            resp.status(401).json({ message: 'Token de acesso não fornecido' });
        }
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
           return resp.status(401).json({message: 'Desculpe sua sessão expirou!'} );
         }   
         return resp.status(500).json({message: 'Acesso não autorizado'})
    }
}
