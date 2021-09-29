'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModuleSchema = Schema({
	date: { type: Date, default: Date.now }, //1
	status: { type: Number, default: 1 }, //2
	name: String, //3
	description: String, //4
	order: { type: Number, default: 0 } //5
});

module.exports = mongoose.model('Module', ModuleSchema);
// modules --> guarda documentos de este tipo y con estructura dentro de la colección