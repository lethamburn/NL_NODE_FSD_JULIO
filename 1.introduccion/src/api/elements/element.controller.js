//Importamos el modelo
const Element = require('./element.model');
//Importamos nuestro seteador de errores
const { setError } = require('../../helpers/utils');

//Definimos la función que nos recuperará todos los elementos de la colección
const getAll = async (req, res, next) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const skip = (page - 1) * 20;
        const elements = await Element.find().skip(skip).limit(20);
        return res.json({
            status: 200,
            message: 'Recovered all elements',
            data: { element: element }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

//Definimos la función que nos recuperará solo un elemento mediante su id
const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const element = await Element.findById(id);
        if (!element) return next(setError(404, 'Element not found'))
        return res.json({
            status: 200,
            message: 'Recovered all elements',
            data: { element: element }
        });
    } catch (error) {
        return next(setError(500, 'Failed element'))
    }
}

//Definimos la función que nos permitirá crear un nuevo elemento
const create = async (req, res, next) => {
    try {
        const element = new Element(req.body)
        const elementInBd = await element.save()
        return res.json({
            status: 201,
            message: 'Created new element',
            data: { element: elementInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created element'))
    }
}

//Definimos la función que nos permitirá actualizar un elemento mediante su id
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const element = new Element(req.body);
        element._id = id;
        const updatedElement = await Element.findByIdAndUpdate(id, element)
        if (!updatedElement) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: { element: updatedElement }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated element'));
    }
}

//Definimos la función que nos permitirá borrar un elemento mediante su id
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedElement = await Element.findByIdAndDelete(id)
        if (!deletedElement) return next(setError(404, 'Element not found'))
        return res.json({
            status: 200,
            message: 'deleted element',
            data: { element: deletedElement }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted element'));
    }
}

//Exportamos todas las funciones para poder recuperarlas en las rutas
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteElement
}