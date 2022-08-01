//Importamos mongoose
const mongoose = require("mongoose");
//Importamos dotenv
require("dotenv").config();

//Recuperamos nuestra variable de entorno con la clave secreta de mongo
const urlDb = process.env.MONGO_DB;

//Definimos la función que nos conectará con mongo
const connectDb = async () => {
  try {
    const db = await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected with db 💾 name: ${name} in host: ${host}`);
  } catch (error) {
    console.error("Error to connect with db 💾", error);
  }
};

//Exportamos la función para poder recuperarla y ejecutarla en index.js
module.exports = {
  connectDb,
};
