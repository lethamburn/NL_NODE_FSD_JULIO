const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  date: { type: String, required: true },
  box: { type: Number },
  actors: [{ type: Schema.Types.ObjectId, ref: "actors", required: true }]
});

module.exports = mongoose.model('films', schema);