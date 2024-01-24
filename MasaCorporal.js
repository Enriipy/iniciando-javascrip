/**desarrollar un programa que permita ingresar dos valores (peso en Kg) y (altura en metros) utilizando el prompt(), realice el cálculo y muestre el resultado en consola: */

const pesoKg = prompt("Ingrese su peso en Kilogramos:");
const alturaMetros = prompt("Ingrese su altura en metros:");
const peso = parseFloat(pesoKg);
const altura = parseFloat(alturaMetros);

if(!isNaN(peso) && !isNaN(altura)) {
    const imc = peso / (altura * altura);
    console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);
    if (imc < 18.5) {
        console.log("Está bajo peso.");
    } else if (imc < 24.9) {
        console.log("Su peso es normal.");
    } else if (imc < 29.9) {
        console.log("Tiene sobrepeso.");
    } else {
        console.log("Tiene obesidad.")
    }
} else {
    console.log("Por favor, ingrese valores numéricos válidos para peso y altura.");
}