"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    Punto.prototype.toString = function () {
        console.log("(" + this.x.toString() + ", " + this.y.toString() + ")");
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia;
        distancia = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var dist;
        dist = Math.sqrt(Math.pow((otroPunto.getX() - this.x), 2) + Math.pow((otroPunto.getY() - this.y), 2));
        return dist;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancias = [];
        for (var i = 0; i < puntos.length; i++) {
            distancias.push(this.calcularDistancia(puntos[i]));
        }
        var minimo = Math.min.apply(Math, distancias);
        return puntos[distancias.indexOf(minimo)];
    };
    return Punto;
}());
exports.Punto = Punto;
