// Variables
let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;
let rangoDeNumeros = 0;

rangoDeNumeros = parseInt(prompt('Ingresa hasta que numero seria el maximo para adivinar'));

numeroSecreto = Math.floor(Math.random() * rangoDeNumeros) + 1;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Agrega un numero entre 1 y ${rangoDeNumeros} por favor`));

    console.log(typeof(numeroUsuario));
    /*
        Este codigo realiza 
        la comparacion
        */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condicion
        alert(`Acertaste, tu numero fue: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        intentos++;
        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        // No fue verdadera la condicion
        // alert('Ups, este no es el numero secreto, intenta nuevamente');
    }
}