class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodos 
    atacar(){
        return console.log(`${this.nombre} esta atacando`)
    }
}
    //extends que se extiende de la clase Pokemon
class Pikachu extends Pokemon {
    constructor(nombre, tipo, edad){
        //esta palabra reservada hace referencia a la clase superior
        super(nombre, tipo);
        this.edad = edad;

    }
    // metodos
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando`)
    }

}

const PikachU1 = new Pikachu('Juan', 'Electrico', 2);
console.log(PikachU1);
PikachU1.atacar();
PikachU1.evolucionar();


const Pokemon1 = new Pokemon('Charmander', 'Fuego');
Pokemon1.atacar();
