import { Punto } from "./Punto";
import { Triangulo } from './Triangulo';



let  coord = new Punto(7, 5);

coord.toString();



console.log(coord.distanciaAlOrigen());


console.log(coord.calcularDistancia(new Punto(4, 1)));

console.log(coord.calcularCuadrante());


console.log(coord.calcularMasCercano([new Punto(6,6), new Punto(1,1)]));


let vertice1 = new Punto(1,1);
let vertice2 = new Punto(7,1);
let vertice3 = new Punto(7, 5);

let triangulo = new Triangulo(vertice1, vertice2, vertice3)

console.log(triangulo.calcularLongitudLados());



