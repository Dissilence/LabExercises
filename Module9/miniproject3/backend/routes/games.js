const express = require("express");
const Game = require("../controllers/games");

const router = express.Router();

router.get("/", async (req, res) => {
  Game.getGames(req, res);
});

router.get("/:id", async (req, res) => {
  Game.getGameById(req, res);
});

router.post("/", async (req, res) => {
  Game.addGame(req, res);
});

router.put("/:id", async (req, res) => {
  Game.updateGameById(req, res);
});

router.delete("/:id", async (req, res) => {
  Game.deleteGameById(req, res);
});

module.exports = router;
