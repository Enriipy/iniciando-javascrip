/** Proyecto 2
Convertidor de millas a kilómetros
Crea una variable que contenga un valor en millas, conviértelo a kilómetros, muestra el mensaje en consola del valor en kilómetros, el formato a mostrar será:

La distancia de 130 Km es igual a 209.2142 millas

Referencia, 1 milla es igual a 1.60934 kilómetro */

const milla = prompt("Ingrese la distancia en millas:");
const Km = milla * 1.60934;
if (!isNaN(Km)){
    console.log(`La distancia de ${milla} millas es igual a ${Km.toFixed(4)} kilómetros.`);
    console.log(`La distancia de ${milla} millas es igual a ${Km}`);
    alert("Por favor, ingrese un número válido para la distancia en millas.");
}
