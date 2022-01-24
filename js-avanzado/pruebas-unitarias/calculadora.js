const sumar = (n1, n2) => {
    return n1 + n2;
}

const restar = (n1, n2) => {
    return n1 - n2;
}

const multiplicar = (n1, n2) => {
    return n1 * n2;
}

const dividir = (n1, n2) => {
    return n1 / n2 ;
}

const mostrarResultado = (operacion, n1, n2, resultado) => {
    //createElement crea un documento html
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${n1} y el ${n2} es ${resultado}`;
    document.body.appendChild(respuesta);
}
 module.exports = {
     sumar, restar, multiplicar, dividir
 }

/*
export{
    sumar, 
    restar,
    multiplicar,
    dividir,
    mostrarResultado
}*/