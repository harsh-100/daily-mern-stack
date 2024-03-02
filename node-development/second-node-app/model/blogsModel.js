const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogsSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model("Blog", blogsSchema);

module.exports = { BlogsModel };
