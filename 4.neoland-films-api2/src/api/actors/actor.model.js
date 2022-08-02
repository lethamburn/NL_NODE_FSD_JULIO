const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  gender: { type: String, enum: ["male", "female", "other"] },
  origin: { type: String, required: true },
  cache: { type: Number },
});

module.exports = mongoose.model('actors', schema);