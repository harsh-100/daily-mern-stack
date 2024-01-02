const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { strict: false }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
