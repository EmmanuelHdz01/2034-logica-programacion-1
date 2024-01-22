let numeroSecreto = 6;
let numeroUsuario = prompt('Agrega un numero por favor');


console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('El numero es el numero secreto');
} else {
    alert('Ups, este no es el numero secreto, intenta nuevamente');
}