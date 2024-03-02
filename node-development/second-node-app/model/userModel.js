const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: { type: String },
    password: String,
    phone: Number,
    age: Number,
    isAdmin: { type: Boolean, default: false },
  },
  { strict: false }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
