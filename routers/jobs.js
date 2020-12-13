const express = require('express');
const { crearProyecto } = require('../controller/jobController')
const route = express.Router();


route.post('/', crearProyecto)


module.exports = route