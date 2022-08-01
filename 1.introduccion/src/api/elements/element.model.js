//Importamos mongoose
const mongoose = require('mongoose');
//Alacenamos los esquemas de mongoose en una variable para poder utilizarlo
const Schema = mongoose.Schema;

//Creamos un nuevo esquema de información
const schema = new Schema({
    name: { type: String, unique: true, required: true },
    emoji: { type: String, required: true },
    images: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
},
    {
        timestamps: true
    }
);

//Lo exportamos como un modelo de mongoose indicandole el nombre de la colección y los datos que tendrá cada uno de los elementos definidos en el esquema
module.exports = mongoose.model('elements', schema);