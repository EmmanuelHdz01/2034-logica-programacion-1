// Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

// console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Agrega un numero entre 1 y 10 por favor"));

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