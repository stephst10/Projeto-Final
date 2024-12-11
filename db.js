const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://stephaniesst10:HU9pN9nf6QZXcQDX@cluster0.hxm1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
    db.once('open', () => console.log('Conectado ao MongoDB.'))
};

module.exports = connectDB;