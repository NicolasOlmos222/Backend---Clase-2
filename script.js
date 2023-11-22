const generarNumeroAleatorio = () => {
    //Funcion que genera un numero aleatorio
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    //Funcion que verifica el numero
    if (numeroAdivinado === numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

module.exports = {
    //Sirve para hacer la llamada a las funciones
    generarNumeroAleatorio,
    verificarAdivinanza
};