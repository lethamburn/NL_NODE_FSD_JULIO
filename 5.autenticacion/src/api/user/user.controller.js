const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../helpers/error");

const create = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const userDuplicate = await User.findOne({ username: newUser.username });
    if (userDuplicate) {
      return next("User already exists");
    }

    const newUserInDB = newUser.save();
    return res.json({
      status: 201,
      message: "User created",
      data: { user: newUserInDB },
    });
  } catch (error) {
    return next(setError(500, "User creation failed"));
  }
};

const login = async (req, res, next) => {
    try {
      //Buscamos al usuario en la base de datos para ver que existe
      const userInfo = await User.findOne({ username: req.body.username });
      //Comparar la contraseña del Insomnia con la contraseña de la BD;
      if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        //Seteamos a null la contraseña del usuario para que no se refleje en ningún momento en este proceso, por temas de privacidad
        userInfo.password = null;
        //Creamos el token con el id y el username del usuario, le indicamos como se llama la clave secreta y el tiempo de caducidad del token
        const token = jwt.sign(
          {
            id: userInfo._id,
            username: userInfo.username,
          },
          req.app.get("secretKey"),
          { expiresIn: "1h" }
        );
        return res.json({
          status: 200,
          message: "Welcome user",
          user: userInfo,
          token: token,
        });
      } else {
        return res.json({
          status: 400,
          message: "Incorrect password",
          data: null,
        });
      }
    } catch (error) {
      return next(setError(500, "Cannot login"));
    }
  };

module.exports = { create, login };
