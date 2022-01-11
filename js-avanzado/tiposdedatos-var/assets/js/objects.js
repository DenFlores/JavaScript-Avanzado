let miObjeto = {
    //pares de clave valor
   // clave: 'valor'
    nombre: 'Deny Flores'
};

let nombre = 'Deny Flores'
let edad = 31;
let direccion = 'Ecatepec de Morelos';
let numero = 55010;

console.log(nombre);
// estructura objeto
let persona = {
    nombre: 'deny flores',
    edad: 31,
    direccion: 'Ecatepec de Morelos',
    numero:[34,35],
suma: (num1,num2)=>{
    return num1 + num2;
},
};
 

console.log(persona);
console.log(persona.suma(4,5));



    // a su vez puede ser otro objeto
    //   direccion: {
    //   ciudad:
    //   estado:
    //   }
    /*numero:[
        // [] son arreglos
        337585,
        586756,
        6756,*/
    
//};
//direccion.ciudad para entrar en objetos
// [0] [3] para acceder a arreglos
//console.log(persona.nombre);

//areglos vs objetos
//almacenar informacion

//cuando quiero almacenar informacion
// ['valor1', 'valor2', 'valor3'];


// cuando trabajocon objetos necesito una estructura muy clara 
//let otroObjeto={
//  nombre: "jfhf"
//  apellido: "ajgsa"
// }

let calzado = {
    talla: {
        niños: 17,
        adultos: 26
        
    },
    colores: ['azul', 'cafe', 'negro'],
    tipo: 'tenis',
};