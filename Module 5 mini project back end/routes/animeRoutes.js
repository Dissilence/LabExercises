const express = require('express');
const animeController = require('../controllers/animeController');
const router = express.Router();


router.get('/animeData', (res,req) => {
  animeController.animeData(req, res)
})

  module.exports = router;