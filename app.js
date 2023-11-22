//Llama a libreria readline -- sirve para escribir por consola:
const readlineSync = require('readline-sync');

//LLama a las funciones que se van a utilizar = indicando desde donde vienen
const { generarNumeroAleatorio, verificarAdivinanza } = require('./script.js');

const obtenerNumeroUsuario = () => {
    //Funcion para leer el teclado, parseInt para pasarlo a entero
    return parseInt(readlineSync.question('Ingresa un número: '));
};

const juegoAdivinanza = () => {
    //Genera un numero aleatorio
    const numeroSecreto = generarNumeroAleatorio();

    let numeroAdivinado = 0;
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');
    //console.log(numeroSecreto);
    
    while (numeroAdivinado !== numeroSecreto) {
        //Bucle del juego

        //Llama a la funcion para obtener la lectura del usuario
        numeroAdivinado = obtenerNumeroUsuario();
        //console.log(numeroAdivinado);
        
        //Verifica si se adivino el numero, tambien se podria hacer sin la funcion de verificar
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

//LLama a main del juego
juegoAdivinanza();