const jwt = require('jsonwebtoken');



const validarToken = (req, resp, next) => {
    console.log('vim validar o token')
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if(!token){
         resp.status(401).json({message: 'Token de acesso não fornecido'});
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret)
        next();
    } catch (error) {
         resp.status(500).json({message: 'Falha na requisição'});
        
    }
}

module.exports = {
    validarToken
}
