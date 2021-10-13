import { Punto } from "./Punto";

let  coord = new Punto(7, 5);

coord.toString();



console.log(coord.distanciaAlOrigen());


console.log(coord.calcularDistancia(new Punto(4, 1)));

console.log(coord.calcularCuadrante());


console.log(coord.calcularMasCercano([new Punto(6,6), new Punto(1,1)]));





