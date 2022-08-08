const BookRoutes = require("express").Router();
const {isAuth} = require("../../middlewares/auth");

const {getAll, create} = require("./book.controller");

BookRoutes.get("/", [isAuth] ,getAll);
BookRoutes.post("/", [isAuth], create);

module.exports = BookRoutes;