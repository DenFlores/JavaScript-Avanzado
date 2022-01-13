/*const numeros = [5];*/
//Otra manera de declarar arreglos
let numeros = new Array();
numeros = [1, 2, 2, 3, 4, 5, 6];
//imprimir en pantalla el arreglo 5

//document.write(numeros[5]);

//numeros.length ayuda a que el numero de arreglos se extienda sin tener que poner un numero en especifico

/*la letra i es una variable que se usa como contador en el for, cada vez que se realiza una ejecución, i va cambiando de valor, (de uno en uno por la expresión i++)
*/
for(let i = 0; i < numeros.length; i++ ){
    //${numeros[i]} va accediendo a cada posicion para mostrarla.
    document.write(`${numeros[i]} <br/>`);

    /* const numero = numeros[i];
    document.write(numero + '<br>');*/
}
