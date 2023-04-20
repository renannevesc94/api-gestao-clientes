const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken');


const login = async (req, resp) => {
    const {userName, senhaUser} = req.body;
    const usuario = await authService.login(userName, senhaUser);
    console.log(usuario);

    if(!usuario){
        return resp.status(400).json({message: 'Usuário ou Senha Incorretos'});
    }

    const token = jwt.sign({payload: usuario._id}, process.env.SECRET, {expiresIn: '1h'});
    return resp.status(200).json({message: 'Login efetuado', token});
}

module.exports = {
    login
}