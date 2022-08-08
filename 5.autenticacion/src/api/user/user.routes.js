const UserRoutes = require("express").Router();

const {create, login} = require("./user.controller");

UserRoutes.post("/register", create);
UserRoutes.post("/login", login)

module.exports = UserRoutes;