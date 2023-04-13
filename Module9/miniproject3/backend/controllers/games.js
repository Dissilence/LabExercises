const Game = require("../models/game");
const axios = require("axios");

// @desc    Get all games from API and save to database
// @route   GET /api/games
// @access  Public
exports.getGames = async (req, res) => {
  try {
    // Fetch data from API
    const response = await axios.get("https://www.freetogame.com/api/games");
    console.log(response.data);

    // Save games to database
    const gamesData = response.data;
    gamesData.forEach(async (gameData) => {
      const game = new Game(gameData);
      console.log(game);
      await game.save();
      console.log(`Game ${game.title} saved to the database.`);
    });

    res.status(200).json({
      success: true,
      message: "Games saved to the database.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

// @desc    Get a single game by ID
// @route   GET /api/games/:id
// @access  Public
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: game,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

// @desc    Add a new game to the database
// @route   POST /api/games
// @access  Public
exports.addGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(200).json({
      success: true,
      data: game,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

// @desc    Update a game by ID
// @route   PUT /api/games/:id
// @access  Public
exports.updateGameById = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: game,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

// @desc    Delete a game by ID
// @route   DELETE /api/games/:id
// @access  Public
exports.deleteGameById = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Game deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};
