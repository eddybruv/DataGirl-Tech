const mongoose = require("mongoose");

//  create post
const PostSchema = new mongoose.Schema({
  time: Date,
  message: String,
  user_id: { type: mongoose.ObjectId, ref: "user" },
});

module.exports = mongoose.model("post", PostSchema);
