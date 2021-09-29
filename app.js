'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');
var module_routes = require('./routes/module');

// Middlewares 
app.use(bodyParser.urlencoded({extended:false})); //Cargar bodyParser utilizarlo
app.use(bodyParser.json()); //Convertir cualquier tipo de petición a un JSON

// CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes);
app.use('/api', module_routes);

//Rutas de prueba
app.get('/', function(req, res){
	//console.log("Ruta raíz");
	return res.status(200).send({
		ruta: 'Raíz',
		autor: 'Cesar 8a'
	});
	//res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});

app.get('/datos-curso', function(req, res){
	//console.log("Ruta datos-curso");
	return res.status(200).send({
		curso: 'Master en frameworks JS',
		autor: 'Cesar 8a',
		url: 'https://development-time.com.mx'
	});
});

// Exportar modulo (fichero actual)
module.exports = app; //Esto permite usar el objeto que se acaba de crear fuera de este fichero