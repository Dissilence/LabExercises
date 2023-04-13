const express = require("express");
const mongoose = require("mongoose");
const router = require("./backend/routes/games");
require("dotenv").config();
let dbConnect = require("./dbConnect");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/games", router);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to my game API");
});

// Start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
