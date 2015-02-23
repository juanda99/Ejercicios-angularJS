'use strict';
var app = angular.module('miTienda', []);
app.controller('TiendaController', function(){
	this.producto = articulo;
	this.stockClass= function () {
		if (this.producto.stock>= 15) {
			return 'label-info';
		}
		else if (this.producto.stock === 0){
			return 'label-danger';
		}
		else {
			return 'label-warning';		
		}
	};
});
var articulo = {
	nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
	precio: 149.00,
	imagen: 'img/fujifilm.jpg',
	stock: 5
};


