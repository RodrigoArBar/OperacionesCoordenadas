"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var coord = new Punto_1.Punto(7, 5);
coord.toString();
console.log(coord.distanciaAlOrigen());
console.log(coord.calcularDistancia(new Punto_1.Punto(4, 1)));
console.log(coord.calcularCuadrante());
console.log(coord.calcularMasCercano([new Punto_1.Punto(6, 6), new Punto_1.Punto(1, 1)]));
