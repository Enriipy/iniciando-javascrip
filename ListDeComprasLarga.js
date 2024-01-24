/**Crear un array vacío para usar en una lista de compras.
Agregar leche, pan, manzanas a tu lista.
Actualizar pan con bananas y huevos.
Remover el último elemento del array y mostrar en consola.
Ordenar la lista alfabéticamente
Encuentra y muestra la salida del index del valor "leche".
Después de bananas, agrega zanahorias y lechuga.
Crea una nueva lista conteniendo jugo y pop.
Combina ambas listas, agrega la nueva lista dos veces al final de la primera lista.
Obtener el último valor de index de pop y muestra en consola.
Tu lista final debería verse así: ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"] */

let listadCombras = [];
listadCombras.push("Leche", "Pan", "Manzanas");
listadCombras[1] = "Bananas";
listadCombras.push("Huevos");

const ultimoElemento = listadCombras.pop();
console.log(`Se ha removido el elemento: ${ultimoElemento}`);

listadCombras.sort();

const indiLeche = listadCombras.indexOf("Leche");
console.log(`El índice de "Leche" es: ${indiLeche}`);

const indiBananas = listadCombras.indexOf("Bananas");

listadCombras.splice(indiBananas + 1, 0, "Zanahorias", "Lechuga");

const nuevaLista = ["Jugo", "Gaseosa"];

listadCombras = listadCombras.concat(nuevaLista, nuevaLista);

const indiGaseosa = listadCombras.lastIndexOf("Gaseosa");
console.log(`El último índice de "Gaseosa" es: ${indiGaseosa}`);

console.log("Tu lista final de compras es:");
console.log(listadCombras);