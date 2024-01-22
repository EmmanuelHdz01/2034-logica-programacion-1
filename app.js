// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt('Agrega un numero entre 1 y 10 por favor');


console.log(numeroUsuario);
/*
Este codigo realiza 
la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    // Acertamos, fue verdadera la condicion
    alert(`Acertaste, tu numero fue: ${numeroUsuario}`);
} else {
    // No fue verdadera la condicion
    alert('Ups, este no es el numero secreto, intenta nuevamente');
}