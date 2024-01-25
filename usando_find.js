// Definiendo la función
// Funciones normales
function decirHola() {
    // Bueno, aqui dentro vas a 
    // escribir las sentencias de tu programa o
    // algoritmo
    console.log("Hola");
}

function otraFuncion() {
    alert("Soy una alerta");
}

// Lo que esta dentro del parentesis se llama parametro, y es por defecto
function decirNombre(nombre="no puso el nombre") {
    console.log(`El nombre ingresado es ${nombre}`);
}

function dameElNombreDeMiMascota (nombre) {
    return nombre;
}
// funciones anonimas
const recibiendoFuncionAnonima = function() {console.log("Soy una funcion anomima")};


// Invoco, llamo, call
decirHola();
otraFuncion();
recibiendoFuncionAnonima();
// Lo que esta dentro del parentesis se llama argumento
decirNombre("Abigails");
decirNombre();
const nombreDeMascota = dameElNombreDeMiMascota("Firulais");

// Al fin vamos a usar find
const frutas = ("Pomelo", "Manzana", "Banana");
const frutaEncontrada = frutas.find(function (frutas) { return frutas === "Pomelo"});
console.log(frutaEncontrada);