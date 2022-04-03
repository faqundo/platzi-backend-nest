const myName = 'Facundo';
const myAge = 32;

const suma = (a: number , b: number)=>{
    return a+b;
}

class Persona {

    constructor(private age: number ,private name: string){}
    
    getSummary(){
        return `my name is ${this.name}, ${this.age}`
    }
}

const facu = new Persona(32,'Facundo');

facu.getSummary()