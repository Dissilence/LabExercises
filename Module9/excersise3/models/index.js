"use strict";

const User = require("./users"); //require the model
const Post = require("./posts"); //require the model
const Comment = require("./comments"); //require the model

async function init() {
  await User.sync(); //sync the model
  await Post.sync(); //sync the model
  await Comment.sync(); //sync the model
}
init();
module.exports = {
  User, //export the model
  Post, //export the model
  Comment, //export the model
};
