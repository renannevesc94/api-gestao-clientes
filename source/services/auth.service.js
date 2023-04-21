import User from '../models/User.js';

const login = (user, password) => User.findOne({userName:user, senhaUser: password}).select('-senhaUser');
  

export default {
    login
}