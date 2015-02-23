'use strict';
var app = angular.module('miTienda', []);
app.controller('TiendaController', function() {
    this.productos = articulos;
    this.stockClass = function(stock) {
        if (stock >= 15) {
            return 'label-info';
        } else if (stock === 0) {
            return 'label-danger';
        } else {
            return 'label-warning';
        }
    };

    /*las columnas que quiero por cada fila*/
    this.numColumnas = 3;

    this.getFilas = function(array, columns) {
        var filas = [];

        //http://stackoverflow.com/questions/8495687/split-array-into-chunks
        var i, j, temparray, chunk = columns;
        for (i = 0, j = array.length; i < j; i += chunk) {
            temparray = array.slice(i, i + chunk);
            filas.push(temparray);
        }
        return filas;
    };

    this.filas = this.getFilas(this.productos, this.numColumnas);
});
var articulos = [{
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.00,
    imagen: 'img/fujifilm.jpg',
    stock: 5,
    descuento: 19
}, {
    nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
    precio: 1499.00,
    imagen: 'img/tv.jpg',
    stock: 9,
    descuento: 45
}, {
    nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
    precio: 399.00,
    imagen: 'img/fujifilm.jpg',
    stock: 22,
    descuento: 20
}, {
    nombre: 'WD WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
    precio: 174.90,
    imagen: 'img/disco-duro.jpg',
    stock: 0,
    descuento: 30
}, {
    nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
    precio: 199.00,
    imagen: 'img/samsung-gear.jpg',
    stock: 52
}];
