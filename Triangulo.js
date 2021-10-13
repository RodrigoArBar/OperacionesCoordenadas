"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    Triangulo.prototype.getA = function () {
        return this.A;
    };
    Triangulo.prototype.setA = function (newA) {
        this.A = newA;
    };
    Triangulo.prototype.getB = function () {
        return this.B;
    };
    Triangulo.prototype.setB = function (newB) {
        this.B = newB;
    };
    Triangulo.prototype.getC = function () {
        return this.C;
    };
    Triangulo.prototype.setC = function (newC) {
        this.C = newC;
    };
    Triangulo.prototype.calcularLongitudLados = function () {
        var lados = [];
        var lado1 = this.A.calcularDistancia(this.B);
        var lado2 = this.A.calcularDistancia(this.C);
        var lado3 = this.B.calcularDistancia(this.C);
        lados.push(lado1, lado2, lado3);
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
