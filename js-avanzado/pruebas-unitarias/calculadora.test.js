
/*const {sumar} = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {
    test('Prueba en la función sumar', () => {
        expect (sumar(3, 5)).toBe(8);

    });
});*/

const {restar} = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {
    test('Prueba en la función restar', () => {
        expect (restar(3, 5)).toBe(-2);

    });
});