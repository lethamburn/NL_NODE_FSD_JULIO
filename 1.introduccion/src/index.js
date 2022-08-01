// Importamos express y cors
// Express es para generar nuestro servidor
// Cors es la libreria que nos permite o no hacer llamadas desde cualquier punto
const express = require('express');
const cors = require('cors');
// Importamos las rutas definidas
const ElementRoutes = require('./api/elements/element.routes');
// Importamos la conexión con la base de datos
const { connectDb } = require('./helpers/db');
// Recuperamos la variable de entorno PORT y si no es posible le indicamos que se levante en el 8000
const PORT = process.env.PORT || 8000;
// Creamos nuestro servidor express en una constante
const app = express();
// Ejecutamos la conexión con la base de datos de mongo
connectDb();
// Definimos las cabeceras para poder realizar peticiones
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// Activamos las cors para definir los origenes de las llamadas a nuestra API
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
// Le indicamos que la información de nuestra API será en JSON con un limite de 1 mb
app.use(express.json({ limit: '1mb' }))
// Le indicamos que la información que recibirá a través de una URL tendrá un limite de 1mb
app.use(express.urlencoded({ limit: '1mb', extended: true }));
// Inicializamos la ruta en api/element que implementará las rutas importadas arriba
app.use('/api/element', ElementRoutes);
// Definimos que salte un error al no encontrar rutas definidas como la que hemos definido arriba
app.use('*', (req, res, next) => {
    const error = new Error()
    error.status = 404
    error.message = 'Route not found'
    return next(error)
})
// Definimos un controlador de errores
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})
// Desactivamos la etiqueta que indica que está hecho con Express y Node
app.disable('x-powered-by')
// Escuchamos al servidor
app.listen(PORT, () => {
    console.log('Server is running in http://localhost:' + PORT)
});