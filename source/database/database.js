import mongoose from 'mongoose';


const dataBase = () => {

mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log('BD Conectado!')
}).catch((error) => {
    console.log('Falha na conexão ao BD.')
})
};

export default{
    dataBase
}
