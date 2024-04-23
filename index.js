/*Actividad: Determinando la longitud de una palabra/frase: Ejemplo 03*/
const frase = prompt("Escriba una Frase");
const cantidad = frase.length;
const mensajeCantidad = ("La cantidad de caracteres es: " +cantidad);
alert (mensajeCantidad);

/*Actividad: Cambio de minúsculas/mayúsculas: Ejemplo 04*/

const fraseMinuscula = frase.toLowerCase();
const fraseMayuscula = frase.toUpperCase();
const minMay = ("Frase en frase Minuscula " + fraseMinuscula + " " + fraseMayuscula);

alert (minMay);
