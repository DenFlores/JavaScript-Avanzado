/* */

let cadena1 = 'hola';
//console.log(cadena1);



//asi se esta creando un objeto que es cadena
let cadena2 = new String('Adios');
console.log(cadena2);


// un metodo siempre llevara parentesis
//toLowerCase convierte a minusculas y mayusculas
console.log(cadena2.toLowerCase().includes('a'));
console.log(cadena2.toLowerCase());
console.log(cadena2.toLowerCase());
// includes, busca una cadena en otra y regresa un true o false

//cohersion y conversion, realiza una accion automaticamente sobre un dato

//cohersion Js convierte en automatico un tipo de dato en otro
console.log(cadena1.toLowerCase());

//funcion que recibe una palabra y la regresa invertida

let palabra = 'Hola mundo';
let arreglo = palabra.split('');
//console.log(arreglo);
//console.log(arreglo.reverse());

// split convierte  una cadena de texto en un arreglo
function invertirPalabra(cadena){
    let arreglo = cadena.split('');
    arreglo.reverse();
    let cadenaInvertida = arreglo.join('');
    //join, une los elementos de un arreglo y regresa un string
    
    return console.log(cadenaInvertida);
}
invertirPalabra('Generation');

