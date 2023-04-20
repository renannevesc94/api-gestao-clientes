const User = require('../models/User');

const login = (user, password) => User.findOne({userName:user, senhaUser: password}).select('-senhaUser');
  
   


module.exports = {
    login
}