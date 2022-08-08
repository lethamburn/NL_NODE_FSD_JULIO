const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emoji: { type: String, required: true },
});

schema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("users", schema);
