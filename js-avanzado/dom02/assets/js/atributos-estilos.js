let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');

$texto.id = 'texto';
/*$texto.style = 'color: red';*/

//en vez de estilo se le pone clase
$texto.className = 'bg-purple h3';
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');

