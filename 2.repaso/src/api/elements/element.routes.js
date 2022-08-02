//Me importo el router de express
const ElementRoutes = require("express").Router();

const { getAll, getById, create } = require("./element.controller");

ElementRoutes.get("/", getAll);
ElementRoutes.get("/:id", getById);
ElementRoutes.post("/", create);

module.exports = ElementRoutes;
