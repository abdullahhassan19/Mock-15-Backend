const mongoose = require("mongoose");

const USerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("Masaiusers", USerSchema);

module.exports = { UserModel };
