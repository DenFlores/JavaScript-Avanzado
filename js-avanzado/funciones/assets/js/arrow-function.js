/* arrow function
Funcion de flecha

Antes de utilizarlas tienen que estar declaradas 

*/

/*function sumar(num1, num2){
    //operaciones o codigo a ejecutar
    return num1 + num2;

}*/
const sumar = (num1, num2) =>{
    return num1 +  num2;

}
let num1 = parseInt(prompt('Número 1'));
let num2 = parseInt(prompt('Número 2'));
let sumaNumeros = sumar(num1, num2);

document.write(`La suma de ${num1} y ${num2} es ${sumaNumeros} </br>`);