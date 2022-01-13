
let numeros = [1, 2, 2, 3, 4, 5, 6];

/*for each
nombre de arreglos y despues forEach*/

/*numero representa la recuperacion de cada numero del arreglo, 1, 2, 2, uno por uno.
numeros.forEach(elemento=> {
    document.write(elemento + '.');

});*/

// ↓ equivale a forEach 
/*for(let i = 0; i < numeros.length; i++ ){
    //${numeros[i]} va accediendo a cada posicion para mostrarla.
    document.write(`${numeros[i]} <br/>`);*/

    //for each recorre todos los elementos de un arreglo
numeros.forEach(function(numero){
    document.write(numero + '.');
});
let numeros2 = numeros.map(function(elemento){
    return elemento *0.90;
});

document.write('<br>' + numeros2);

/*let frutas = ['mango', 'uva', 'piña', ];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');*/


//map agrega un elemento a un arreglo, crea un nuevo arreglo y lo modifica si asi se hace.
/*let frutas = ['mango', 'uva', 'piña', ];
let frutas2 = frutas.map(function(elemento) {
    return elemento;
});

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');*/

//Includes, obtiene un verdadero o un falso, si existe o no un elemento dentro del arreglo.

document.write('<br>' + numeros.includes(328) + '<br>');


//filter, filtra elementos y los muestra
let numerosPares = numeros.filter((elemento) => {
   /* if( elemento %2 == 0){
        return true;
    }
    else {
        return false
    }*/
    /*return elemento % 2== 0;*/
    if(elemento >10) {
        return true;
    }
});
document.write('<br>' + numerosPares + '<br>');


let frutas = ['mango', 'uva', 'sandia', 'manzana'];

let frutasFiltro = frutas.filter((fruta) => {
//solamente mostrara las frutas que contengan una i /filtra/
    if(fruta.includes('a') == true){
        return true;

    }
});
document.write('<br>' + frutasFiltro + '<br>');


/* sort*/
//ordena como si fuera string/ alfabeticamente
let otrosNumeros = [2, 3, 5, 6, 12, 54]
document.write('<br>' + otrosNumeros.sort() + '<br>');


//reverse, invierte el orden de los elementos de un arreglo
document.write('<br>' + numeros.reverse() + '<br>' );


//find, nos devolvera el primer elemento que encuentre con la condicion que se pide, en este caso, 'ma'
let frutaEncontrada = frutas.find((elemento) => {
    return elemento.includes('ma');
});
document.write('<br>' + frutaEncontrada + '<br>');
