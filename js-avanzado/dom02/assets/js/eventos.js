let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

//a este boton se le dara un evento
//Cuando des click pasara algo, aparecera en consola "No me presiones"
$btnMensaje.addEventListener('click', () =>{
    console.log('No me presiones');
} );
//keydown sucede cuando presiono una tecla
// e hace referencia al evento, puede ser cualquier nombre pero por lo regular sera una e que hace referencia a (e)vento 
$mensaje.addEventListener('keydown', (e) =>{
    console.log(e.target.value);

// si el texto que escribe el ususario es menor a tres mostrara error 
    if(e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }
// si es mayor quitara la clase error y añadira hide 
    else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');

    }
});
