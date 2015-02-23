'use strict';
var app = angular.module('pixmania', []);
app.controller('TiendaController', function(){
	this.productos = articulos;
});
var articulos = [{
	nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
	precio: '149.00',
	stock: 25,
}, {
	nombre: "PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV",
	precio: '1499.00',
	stock: 9,
},
{
	nombre: "SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone",
	precio: '399.00',
	stock: 0,
}];


