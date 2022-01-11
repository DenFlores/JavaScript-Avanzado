//en el documento (las paginas) accede al elemento con id "title"
//se almacena como variable porque se va a usar
let title = document.getElementById("title");

//ide se usa para javascript, class para css
console.log(title);
title.textContent = 'Este texto esta escrito con java Script';

//clasname, tagne name, para acceder a parrafos
let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

//parrafos[0].textContent ='parrafos escritos desde Javascript';

//length define el tamaño del arreglo
/*for(let i = 0; i < parrafos.length; i++){
parrafos[].textContent = 'Parrafo' + i + 'escritos desde Javascript';
}*/

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}