
//el simbolo de pesos en la variable hace referencia al dom
/*let $titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde JS';*/
//textContent accede al contenido de texto de la etiqueta, el = cambia el elemento 


//sola hace referencia a una de javascript
/*let numero = 10;*/

//queryselector, hace referencia a seleccionar una clase, un id, o una etiqueta, .clase #id si no se coloca nada se accede a etiqueta, trae el primer elemento que encuentre
let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JS';

/*let $parrafo = document.querySelector('p');*/



//querySelectorAll devuelve todos los elementos indicados y devuelve un arreglo
let $parrafos = document.querySelectorAll('p');
//accede a el arreglo que se solicita

/*console.log($parrafos[1].textContent);*/

/*console.log($parrafos);*/

//crea elemento en memoria
let subtitulo =document.createElement('h3');
//aqui ya estoy modificando el contenido que cree
subtitulo.textContent = 'Este es un subtitulo desde JS';
//se agrega al HTML y se le agregas donde quieras ponerlo .body.append y se agrega al final
/*document.body.append(subtitulo);*/




//insertar, eliminar elementos en el dom

let $contenido = document.querySelector('#contenido');
//textContent devuelve texto
/*console.log($contenido.textContent = '<br>');*/
//inner devuelve todo lo que hay por dentro, ademas de texto permite codigo html
/*console.log($contenido.innerHTML = '<br>');*/
// outer afecta todo el elemento 
/*console.log($contenido.outerHTML = 'Hola');*/
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi  nuevo parrafo';
//appendChild se agrega al contenido, lo que contenga dentro de los parentesis se colocara dentro del $ que hagas referencia ↓ $contenido el appendChild hace referencias mas explicitas, se agrega al final 
$contenido.appendChild(contenidoParrafo);

//insertAdjacentElement se coloca a un lado del elemento depende de donde lo mande, ↓ me estoy posicionando en titulo se inserta un elemento adjacente y quiero que este elemento subtitulo se posicione despues de que termines 
$titulo.insertAdjacentElement("afterend", subtitulo);
/*document.body.insertAdjacentElement("beforebegin",subtitulo);*/

//removeChild, remueve elementos (se ocultan)
$titulo.remove();

