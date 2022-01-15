/* Operadores Aritmeticos
// + - / * %  () */

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5/2 * 4;
console.log(operacion2);


/*Operadores relacionales
<, >, <=, >=, ==, ===, !=, !==
Nos daran como resultado un boolean, true, false */

console.log(7 < 7); // no estamos incluyendo el numero a comparar
console.log(7 <= 7); // incluyendo el numero a comparar

console.log(7 == "7"); // compara el valor
console.log(7 === "7"); // compara el valor y el tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/* Incremento y decremento
+=, -=, /=
*/

let Incremento = 5;
Incremento += 5; //se toma el valor que ya tiene y se le suma el valor que se indica ( 5) es igual a↓

//Incremento = Incremento + 5;
console.log(Incremento);

Incremento -= 5;
console.log(Incremento);

Incremento *= 5;
console.log(Incremento);// 25, tenia un valor de 5 y se multiplica por 5.

Incremento /= 5;
console.log(Incremento);// 5, porque tenia valor de 25 entre 5.

/* Operador unario 
++, --
sumar uno, restar uno*/
let suma =  0;
console.log(suma + 'linea 49');
suma++;
console.log(suma + 'linea 51');
suma++;
console.log(suma);
suma --;
suma --;
suma --;
console.log(suma); // -1


/*
 */

for(let i = 0; i < 10; i ++){
    /* codigo  */
}
/* ++variable = preincremento -primero modifica el valor y ya despues hace uso de la variable
 variable ++ = postincremento - usando la variable y despues hace el incremento*/
let num = 5;
console.log(num++);//5
console.log(num);//6

for(let i = 0; i < 5; i ++){
    /*iteracion (hace referencia a una vuelta, un for hace iteraciones) 
    primera iteracion se detiene*/
    console.log('este es el ciclo padre');
    for(let j = 0; j < 5; j ++){
        //hace sis iteraciones (repeticiones) propias
    console.log('este es el ciclo hijo');

    }
}
