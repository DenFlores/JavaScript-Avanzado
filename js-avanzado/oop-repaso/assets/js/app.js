

class Animalitto{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;

    }
    //this es una palabra reservada que hace referencia al atributo que se esta dando
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}, `)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];

    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes ++;
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }
     
    //suma 1 a pacientes revisados
    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }
    revisarPacientes(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            //this.pacientesRevisados++;
            
            //agregamos metodo en ottro metodo
            this.modificarPacientesRevisados();
            document.write('Paciente revisado');

        }else{
            document.write('Este paciente ya fue revisado');
        }
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(' ' + this.listaPacientes[i].nombre);

        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes} <br>Paciente revisados: ${this.pacientesRevisados} <br>`)
    }
}
//se hace instancia 'new' estamos haciendo copia de la clase y el resultado es un objeto, el metodo vivira dentro de la clase 
const VeterinariaPanchito = new Veterinario();
//objetos creados de la clase animalito
const Animalito1 = new Animalitto('Manchas', 5, 'Perro', false );
const Animalito2 = new Animalitto('Galleta', 2, 'Gato',true);
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);


console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPacientes(Animalito1);
VeterinariaPanchito.mostrarLista();

VeterinariaPanchito.revisarPacientes(Animalito2);


//operador de corto circuito, nos permite dejar un valor por defecto, en caso que no ingresen un valor, o que sea negativo


