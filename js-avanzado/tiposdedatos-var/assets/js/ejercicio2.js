let añoActual = document.getElementById("añoActual");
let anioActual = 2022;
function getInformation(){
    let fecha = parseInt(prompt('Ingresa tu año de nacimiento'));
  
    añoActual.textContent =  anioActual - fecha ;
}