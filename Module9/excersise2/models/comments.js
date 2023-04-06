const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  textField: { type: String, required: true },
  liked: { type: Number, default: 0 },
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comments", commentSchema);
