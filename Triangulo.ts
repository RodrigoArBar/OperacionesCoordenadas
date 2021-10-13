import { Punto } from './Punto';


export class Triangulo
{
    private A: Punto;
    private B: Punto;
    private C: Punto;

    constructor(A: Punto, B: Punto, C: Punto)
    {
        this.A = A;
        this.B = B;
        this.C = C;
    }

    public getA():Punto
    {
        return this.A;
    }

    public setA(newA:Punto)
    {
        this.A = newA;
    }

    public getB():Punto
    {
        return this.B;
    }

    public setB(newB:Punto)
    {
        this.B = newB;
    }

    public getC():Punto
    {
        return this.C;
    }

    public setC(newC:Punto)
    {
        this.C = newC;
    }

    public calcularLongitudLados():number[]
    {
        let lados: number[] =[];
        
        let lado1: number = this.A.calcularDistancia(this.B);
        let lado2: number = this.A.calcularDistancia(this.C);
        let lado3: number = this.B.calcularDistancia(this.C);

        lados.push(lado1, lado2, lado3);

        return lados;

    }
}