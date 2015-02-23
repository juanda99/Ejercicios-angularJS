'use strict';
var app = angular.module('miTienda', []);
app.controller('TiendaController', function(){
	this.producto = articulo;
});
var articulo = {
	nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
	precio: 149.00,
	imagen: 'img/fujifilm.jpg'
};


