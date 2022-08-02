const Film = require("./film.model");
const { setError } = require("../../helpers/error");

const getAllFilms = async (req, res, next) => {
  try {
    const films = await Film.find().populate("actors");
    return res.json({
      status: 200,
      message: "Recover all films",
      data: { films }
    })

  } catch (error) {
    return next(setError(500, "Failed all Actors"));
  }
}

const getFilmsByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findById(id).populate("actors");
    if (!film) return next(setError(404, 'Film not found'));
    return res.json({
      status: 200,
      message: "Recover  actor by ID",
      data: { film }
    })
  } catch (error) {
    return next(setError(500, "Failed Film by ID"));
  }
}

const createFilm = async (req, res, next) => {
  try {
    const FilmToSave = new Film(req.body);
    const filmDB = await FilmToSave.save();
    return res.json({
      status: 201,
      message: "Create film",
      data: { filmDB }
    })

  } catch (error) {
    return next(setError(500, "Failed create Film"));
  }
}

module.exports = { getAllFilms, getFilmsByID, createFilm };