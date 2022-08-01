//Definimos nuestra función seteadora de errores
const setError = (code, message) => {
    const error = new Error;
    error.code = code;
    error.message = message;
    return error;
}

//La exportamos para poder utilizarla en cualquier punto de nuestro servidor
module.exports = {
    setError
}