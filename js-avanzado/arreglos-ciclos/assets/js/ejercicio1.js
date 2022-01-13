const numeros = [1,2,23,4,5,6,7,8,9,2,3,5,3,4,5,1,2,3,4];
for(let i = 0; i < numeros.length; i++ ){
    //${numeros[i]} va accediendo a cada posicion para mostrarla.
    document.write(`${numeros[i]} <br/>`);
}
let suma = 0;
let promedio;

numeros.forEach((numero) =>{
    suma = suma + numero;

});

document.write(`La suma de los numeros es: <b> ${suma} </b>`);
promedio = suma / 20;
document.write(`El promedio es: <b> ${promedio} </b>`);

