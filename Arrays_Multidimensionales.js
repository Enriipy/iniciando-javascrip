/**Ejercicio 3.3
Crear un array que contenga tres valores, 1, 2, 3.
Anidar el array original en un nuevo array, tres veces.
Mostrar en pantalla el valor 2 de uno de los arrays en la consola */

let someValues = [1, 2, 3];
let arrOfArrays = [someValues];
console.log(arrOfArrays[0][1]);

/**Pueba */

let someV1 = [1, 2, 3];
let someV2 = [4, 5, 6];
let someV3 = [7, 8, 9];
let arrOfArray = [someV1, someV2, someV3];

let arrOfArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let value1 = arrOfArray[0][1];
let arrOfArrayOfArrays = [arrOfArray, arrOfArray, arrOfArray];
let middleValue = arrOfArrayOfArrays[1][1][1];