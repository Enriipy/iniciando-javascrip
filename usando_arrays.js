// Variables normales y sus tipos
let unaVariable = "naranja";

// Arrays
let razasDePerros = ["Labrador", "Pastor Aleman", "Chiguagua", "Pitbul"];

const ultimoElemento = razasDePerros.length - 1;
console.log(ultimoElemento);

// Sobreescribiendo un array en la posicion -36
razasDePerros[-36] = null;


razasDePerros[2] = "Dalmata";

console.log((razasDePerros));

console.log(razasDePerros[3]);
console.log(razasDePerros[-36]);


// Uso de la propiedad Length
const cantidadRazaDePerros = razasDePerros.length;
console.log(razasDePerros.length);
console.log(cantidadRazaDePerros);

// Agregando nuevos elementos al array
razasDePerros.push("Delmer");
console.log({razasDePerros});
console.log(`Hemos agregado un delmer a las raza ${razasDePerros}`);
