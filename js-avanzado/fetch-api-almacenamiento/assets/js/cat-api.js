let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () =>{

fetch('https://dog.ceo/api/breeds/image/random').then(resp => resp.json()).then(data => {
    console.log(data);

    //aqui se crea etiqueta img 
    let imagenGatito = document.createElement('img');
    //aqui le estoy dando valor src
    imagenGatito.src = data.message;
    //aqui lo estoy agregando a mi body
    document.body.appendChild(imagenGatito);
}); 
    
    
});