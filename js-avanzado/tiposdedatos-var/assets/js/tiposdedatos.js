
//string /texto
let nombre = 'Deny Flores';
//number /numero
let edad = 31;

//tipo boolean- tienen valor verdadero o falso
let tienesTrabajo = true;

//el contenido nulo
let variableNull = null;

//
let variableUndefined = undefined;

console.log(typeof(nombre)); //string o cadenas
console.log(typeof(edad)); 
console.log(typeof(tienesTrabajo));
console.log(typeof(variableNull));
console.log(typeof(variableUndefined));

console.log(variableNull === variableUndefined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10 + 10)); //number

//a todo lo que le sume un string sera un string
console.log(typeof('10' + true)); //string


let numero = 10;
//() siempre son funciones
console.log(numero.toString());