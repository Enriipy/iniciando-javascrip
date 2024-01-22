/** Proyecto 2
Convertidor de millas a kilómetros
Crea una variable que contenga un valor en millas, conviértelo a kilómetros, muestra el mensaje en consola del valor en kilómetros, el formato a mostrar será:

La distancia de 130 Km es igual a 209.2142 millas

Referencia, 1 milla es igual a 1.60934 kilómetro */

let milla_1 = m;
console.log(`Ingrese el valor de la milla ${m}`)
let km = m * 1.60934;
console.log(`La distancia de millas es igual a kilómetros ${km.toFixed(4)}`);