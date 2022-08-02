//Nos hemos importado el modelo para poder trabajar con los metodos del modelo
const Element = require('./element.model');
//Nos importamos la funcion seteadora de errores
const { setError } = require('../../helpers/utils');


const getAll = async (req, res, next) => {
    try {
        const elements = await Element.find();
        return res.json({
            status: 200,
            message: 'Recovered all elements',
            data: { elements: elements }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

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

module.exports = {
    getAll,
    getById,
    create
}