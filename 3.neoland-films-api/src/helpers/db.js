const mongoose = require("mongoose");
require("dotenv").config();

const URI_DB = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const db = await mongoose.connect(URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const { name, host } = db.connection;
    console.log(`Connected with db 💾 name: ${name} in host: ${host}`)
  } catch (error) {
    console.error('Error to connect with db 💾', error);
  }
}

module.exports = { connectDB }