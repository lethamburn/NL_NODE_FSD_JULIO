const Actor = require("./actor.model");
const { setError } = require("../../helpers/error");

const getAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    return res.json({
      status: 200,
      message: "Recover all actors",
      data: { actors }
    })

  } catch (error) {
    return next(setError(500, "Failed all Actors"));
  }
}

const getActorByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id);
    if (!actor) return next(setError(404, 'Actor not found'));
    return res.json({
      status: 200,
      message: "Recover  actor by ID",
      data: { actor }
    })
  } catch (error) {
    return next(setError(500, "Failed Actor by ID"));
  }
}

const createActor = async (req, res, next) => {
  try {
    const ActorToSave = new Actor(req.body);
    const actorDB = await ActorToSave.save();
    return res.json({
      status: 201,
      message: "Create actor",
      data: { actorDB }
    })

  } catch (error) {
    return next(setError(500, "Failed create Actor"));
  }
}

module.exports = { getAllActors, getActorByID, createActor };