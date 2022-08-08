const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
    //Guardamos en una variable la información de la autorizacion que nos llega por la cabecera de la petición.
    const authorization = req.headers.authorization;
    //Si no existe autorización, no hay token y devuelve un error
    if (!authorization) {
      return res.json({
        status: 401,
        message: "No token provided",
        data: null,
      });
    }
    //Si existe autorización es porque tiene el token en las cabeceras, por lo tanto tendremos que trocear el token para quitarle la parte Bearer de la información que nos llega.
    const splits = authorization.split(" ");
    if (splits.length != 2 || splits[0] != "Bearer") {
      return res.json({
        status: 400,
        message: "Not Bearer",
        data: null,
      });
    }
    //Guardamos la información del token en una constante nueva
    const jwtString = splits[1];
  
    try {
        //Verificamos el token y si está acorde a la clave secreta que lo ha generado lo guardaremos en una variable llamada token
        var token = jwt.verify(jwtString, req.app.get("secretKey"))
    } catch (error) {
        return next(error);
    }
    //Creamos una constante llamada authority con la información que queremos insertar en la petición
    const authority = {
        id: token.id,
        name: token.name
    }
    //Le asignamos este objeto a la petición
    req.authority = authority;
    //Si todo va bien cortamos el middleware
    next()
  };
  
  module.exports = {isAuth}