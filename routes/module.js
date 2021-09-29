'use strict'

var express = require('express');
var ModuleController = require('../controllers/module');

var router = express.Router();

// Rutas de prueba
router.get('/modules/test', ModuleController.test);

// Rutas útiles
router.post('/modules/add', ModuleController.add);


module.exports = router;