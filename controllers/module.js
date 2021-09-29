'use strict'

var validator = require('validator'); //Importación del módulo del validador
/*
var fs = require('fs');
var path = require('path');
*/

var Module = require('../models/module');

var controller = {

	test: (req, res) => {
		return res.status(200).send({
			message: 'Soy la acción test de mi controlador de módulos'
		});
	},

	add: (req, res) => {
		// Recoger parametros por post
		var params = req.body;
		//console.log(params);

		// Validar datos (validator)
		try{
			var name = !validator.isEmpty(params.name);
			console.log(name);
			var description = !validator.isEmpty(params.description);
			console.log(description);

			if(name && description){
				//Crear el objeto a guardar
				var module = new Module();

				//Asignar valores
				module.name = params.name;
				module.description = params.description;

				//Guardar el módulo
				module.save((error, moduleStored) => {
					console.log(error);
					console.log(moduleStored);

					if(error || !moduleStored){
						return res.status(404).send({
							status: 'error',
							message: 'El módulo no se guardo'
						});
					}else{
						//Devolver una respuesta de éxito
						return res.status(200).send({
							status: 'success',
							article: moduleStored
						});
					}
				});
			}else{
				return res.status(200).send({
					status: 'error',
					message: 'Los datos no son válidos'
				});
			}

		}catch(err){
			return res.status(200).send({
				status: 'error',
				message: 'Los datos no están completos'
			});
		}
	}

};  //End controller

module.exports = controller;