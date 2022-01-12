
let precio = parseFloat(prompt('¿Cuanto cuesta?'));
let cupon = prompt('Que tiepo de cupon tienes?');



switch(cupon){
    case 'Bronce':
    console.log(`El precio es ${precio}, tienes un cupon tipo ${cupon}, tu precio final es ${precio*0.95}`);
        break;
    case 'Plata':
        console.log(`El precio es ${precio}, tienes un cupon tipo ${cupon}, tu precio final es ${precio*0.90}`);
        break;
    case 'Oro':

        console.log(`El precio es ${precio}, tienes un cupon tipo ${cupon}, tu precio final es ${precio*0.80}`);
        break;
    case 'Platino':
        console.log(`El precio es ${precio}, tienes un cupon tipo ${cupon}, tu precio final es ${precio*0.75}`);
        break;
    default: 
        console.log('Cupon no valido');        
}


