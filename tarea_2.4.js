/**Ejercicio 2.4
Crea variables para tres números: a, b, c. Actualiza los valores de esas variables usando los operadores de asignación:

Suma b en a
Divide a con c
Reemplaza el valor de c con el módulo de c y b
Imprimir los tres números en consola */

let a = prompt("Colocar el valor de a");
let b = prompt("Colocar el valor de b");
let c = prompt("Colocar el valor de c");
let resultado_Suma = b + a;
console.log(`El resultado de la suma es ${resultado_Suma}`);

let resultado_Divi = a / c;
console.log(`El resusltado de la diviciòn es ${resultado_Divi}`);

let resdult_modulo = c % b;
console.log(`${c} % ${b} = ${resdult_modulo}`);
