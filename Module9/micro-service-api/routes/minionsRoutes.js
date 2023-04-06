const express = require("express");
const minionsController = require("../controllers/minionsController");

const router = express.Router();

router.get("/", minionsController.get);

module.exports = router;
