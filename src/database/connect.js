const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursobarbearia.oh2k4mm.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`);
        console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados:', error);
    }
}

module.exports = connectToDataBase;