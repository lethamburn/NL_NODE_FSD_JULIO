//Requerimos o importamos mongoose
const mongoose = require('mongoose');
//Requerimos dotenv y lo configuramos
require('dotenv').config()

//Almacenamos nuestra variable de entorno de mongo en una constante
const urlDb = process.env.MONGO_DB

//Definimos la funcion que va a conectar nuestro servidor con mongo
const connectDb = async () => {
    try {
        const db = await mongoose.connect(urlDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const { name, host } = db.connection
        console.log(`Connected with db 💾 name: ${name} in host: ${host}`)
    } catch (error) {
        console.error('Error to connect with db 💾', error);
    }
}
//Exportamos nuestra funcion
module.exports = {
    connectDb
}