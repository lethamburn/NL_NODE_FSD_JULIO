const ActorRoutes = require("express").Router();
const { getAllActors, getActorByID, createActor } = require("./actor.controller");


ActorRoutes.get('/getAll', getAllActors);
ActorRoutes.get('/getByID/:id', getActorByID);
ActorRoutes.post('/create', createActor);


module.exports = ActorRoutes;