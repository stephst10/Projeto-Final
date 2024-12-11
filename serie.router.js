const serieController = require('../controllers/serie.controller');
const express = require('express');
const router = express.Router();

router.post('/', serieController.createSerie);
router.get('/', serieController.getSeries);
router.get('/filter', serieController.getSeriesByName);
router.delete('/:id', serieController.deleteSerie);

module.exports = router;