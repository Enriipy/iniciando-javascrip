// Variables normales y sus tipos
let unaVariable = "naranja";

// Arrays
let razasDePerros = ("Labrador", "Pastor Aleman", "Chiguagua", "Pitbul");

// Sobreescribiendo un array en la posicion -36
razasDePerros[-36] = null;

razasDePerros[2] = "Dalmata";

console.log((razasDePerros));

console.log(razasDePerros[4]);
console.log(razasDePerros[-36]);


// Uso de la propiedad Length
const cantidadRazaDePerros = razasDePerros.length;
console.log(razasDePerros.length);
console.log(cantidadRazaDePerros);