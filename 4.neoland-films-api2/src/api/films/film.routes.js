const FilmRoutes = require("express").Router();
const { getAllFilms, getFilmsByID, createFilm } = require("./film.controller");


FilmRoutes.get('/getAll', getAllFilms);
FilmRoutes.get('/getByID/:id', getFilmsByID);
FilmRoutes.post('/create', createFilm);


module.exports = FilmRoutes;