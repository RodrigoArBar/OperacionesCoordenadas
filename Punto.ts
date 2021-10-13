export class Punto
{
    private x: number;
    private y: number;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;

    }

    public getX():number
    {
        return this.x;
    }

    public setX(newX:number)
    {
        this.x = newX;
    }

    public getY():number
    {
        return this.y;
    }

    public setY(newY:number)
    {
        this.y = newY;
    }

    public toString()
    {
        console.log("("+this.x.toString()+", "+this.y.toString()+")");
    }

    public distanciaAlOrigen():number
    {

        let distancia: number; 
        
        distancia = Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2));

        return distancia;
    }

    public calcularDistancia(otroPunto: Punto):number
    {
        let dist: number;

        dist = Math.sqrt(Math.pow((otroPunto.getX() - this.x), 2) + Math.pow((otroPunto.getY() - this.y), 2))

        return dist;
    }

    public calcularCuadrante():number
    {
        let cuadrante: number;

        if(this.x == 0 || this.y == 0)
        {
            cuadrante = 0;
        }else if(this.x > 0 && this.y >0)
        {
            cuadrante = 1;
        }else if(this.x < 0 && this.y >0)
        {
            cuadrante = 2;
        }else if(this.x < 0 && this.y < 0)
        {
            cuadrante = 3;
        }else if(this.x > 0 && this.y < 0)
        {
            cuadrante = 4;
        }

        return cuadrante;
    }

    public calcularMasCercano(puntos: Punto[]):Punto
    {
        let distancias: number[]=[];
        

        for(let i: number = 0; i<puntos.length; i++)
        {
            
            distancias.push(this.calcularDistancia(puntos[i]))

        }

        let minimo: number = Math.min(...distancias)

        return puntos[distancias.indexOf(minimo)]


    }







}