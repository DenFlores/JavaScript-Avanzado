/*funcion
Es un bloque de codigo reutilizable.
Puede tener o no parametros de entrada.
Puede devolver un valor.
*/

function sumar(num1, num2) {
    //operaciones o codigo a ejecutar
    return num1 + num2;
    console.log('Hola desde la función');
}

function restar(num1, num2) {
    return num1 - num2;
}

let num1 = parseInt(prompt('Número 1'));
let num2 = parseInt(prompt('Número 2'));
let sumaNumeros = sumar(num1, num2)

//aparece directamente en el html
document.write(`La suma de ${num1} y ${num2} es ${sumaNumeros} </br>`);
// template string ($ {}) representa la cadena y se entiende que lo que este dentro es codigo de javascript (``) backstick o comilla invertida

document.write('La suma de' + num1 + ' y ' + num2 + 'es' + sumaNumeros);

document.write(`La resta de ${num1} y ${num2} es ${num1 - num2} </br>`);
