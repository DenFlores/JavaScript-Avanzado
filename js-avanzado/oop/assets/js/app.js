// clases, molde que nos permite crear objetos

class Animal{
    //constructor es una funcion y es opcional, nos permite crear nuestros objetos
    //function constructor (){} ↓
   constructor(nombre, especie){
       this.nombre = nombre;
       this.especie = especie;
       //this palabra reservada, nos permite utulizar variables y funciones dentro de la misma clase, la primera es el atributo que se le asignara a nuestro objeto, el siguiente es la variable que introducimos
    
        /*console.log('Este es un constructor');*/
    }
    //getters y setters, solo tiene ek proposito de leer o modificar el atributo, debe haber un  get y un set por cada atributo
    // esto le dice al compilador que es una funcion del tipo get, lee un atributo
    get getNombre(){
        return this.nombre;

    }
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        return this.especie;
    }
    //metodos == function, metodo que pertenece a la clase animal

    
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>` );
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje);
    }
    //metodos estaticos
    // pertenece solo a la clase y no se hereda a los objetos 
    static saludar(){
        return console.log('Hola, soy un metodo estatico');
    }



}

//Animal.presentarse
//console.log(Animal.getNombre);

Animal.saludar();
//Heredan los atributos y los metodos de la clase que estan utilizando 
//para formar nuestra clase, se utuliza palabra reservada const y daremos nombre al objeto empezando con mayusc, new crean un nuevo objeto
const Animal1 = new Animal('Scooby','Perro');//creamos un objeto utilizando el plano Animal.

//instanciar = hacer una copia, crear un objeto 
console.log(Animal1); //{} indica que es un objeto

const Animal2 = new Animal('Pecas', 'Gato');
console.log(Animal2);
const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy'; //notacion de punto para cambiar el valor 
console.log(Animal1.nombre);
console.log(Animal1);


Animal1.cambiarNombre('Oddie');//metodo que hicimos para cambiar el valor

//Getters, get, obtener el valor de un atributo y Setters, set = fijar o cambiar el valor de un atributo

//variable en clases son atributos

console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);













