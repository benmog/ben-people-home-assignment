const express = require('express');

const router = express.Router();

const getPeople = require('./people.get');

router.get('/people', getPeople);

module.exports = router;


