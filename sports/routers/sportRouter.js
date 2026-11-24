const express = require('express');
const router = express.Router();
const { getSports, addSport, removeSport } = require('../controller/sportController');

router.get('/', getSports);
router.post('/', addSport);
router.delete('/:id', removeSport);

module.exports = router;