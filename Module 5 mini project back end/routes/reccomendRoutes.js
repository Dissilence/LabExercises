const express = require('express');
const catfactsController = require('../controllers/animeController')
const router = express.Router();

router.get('/random', (req, res) => {
    animeController.randomAnime(req, res);
})

//get a list of cat facts based on the limit and paging query parameters
router.get('/list', (req, res) => {
    animeController.listAnime(req, res);
})

//get a specific fact from the cache based on its ID
router.get('/recc/:id', (req, res) => {
    animeController.getAnime(req, res);
})


module.exports = router;