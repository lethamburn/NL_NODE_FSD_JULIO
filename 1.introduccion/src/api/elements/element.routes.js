//Almacenamos el router de express
const ElementRoutes = require('express').Router();
//Con destructuring recuperamos todas las funciones definidas en el controlador
const {
    getAll,
    getById,
    create,
    update,
    deleteElement } = require('./element.controller');

//Le indicamos al router todas las funciones que se ejecutarán dependiendo de las rutas que utilicemos
ElementRoutes.get('/', getAll)
ElementRoutes.get('/:id', getById)
ElementRoutes.post('/', create)
ElementRoutes.patch('/:id', update)
ElementRoutes.delete('/:id', deleteElement)

//Exportamos nuestro router para poder utilizarlo en index.js
module.exports = ElementRoutes