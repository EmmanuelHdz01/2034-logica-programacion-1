// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = prompt('Agrega un numero entre 1 y 10 por favor');

    console.log(numeroUsuario);
    /*
    Este codigo realiza 
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condicion
        alert(`Acertaste, tu numero fue: ${numeroUsuario} Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos ++;
        palabraVeces = 'veces';
        // No fue verdadera la condicion
        // alert('Ups, este no es el numero secreto, intenta nuevamente');
        
    }
    
}