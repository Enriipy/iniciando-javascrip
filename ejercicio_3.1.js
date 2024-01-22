/**Ejercicio 3.1
Crea un array para usar en tus compras al supermercado, una lista de tres items.
Revisa tu lista usando length.
Actualiza uno de los elementos.
Muestra la lista entera en consola */

let listaDeCompras = ["Manzanas", "Peras", "Zanahorias"];
const cantidadDeCompras = listaDeCompras.length;
console.log(listaDeCompras.length);

listaDeCompras[2] = "Cerveza";

console.log(listaDeCompras);