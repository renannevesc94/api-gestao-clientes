import mongoose from 'mongoose';


const dataBase = () => {

    mongoose.connect(
        `mongodb+srv://renanepd:${process.env.DB_SENHA}@cluster0.r7lo0b2.mongodb.net/GESTAO_CLIENTES`,
        {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => {
        console.log('BD Conectado!')
    }).catch((error) => {
        console.log('Falha na conexão ao BD.')
    })
};

export default {
    dataBase
}
