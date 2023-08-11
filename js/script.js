// alert("Mensaje desde archivo externo");

var nombre = "Jose";
var apellido = "Garcia";
console.log(apellido);
var numero1 = 10;
var numero2 = 20;
var resultado = numero1 + numero2;
// console.log(resultado);
var bool1 = true;
var bool2 = false;
console.log(bool1);

let texto = "Hola " + nombre + " " + apellido + numero1 + numero2;
console.log(texto);

document.write("<h4> Hola "+ nombre + " " + apellido + "</h4>");
document.write("<p> Hola desde parrafo</p>");

//	Tipos de Operadores:
// - Asignacion (=)
let numero3 = 10;

// - Matematicos o Aritmeticos (+, -, *, /, %)

let resta = numero2 - numero1;
let mult = numero2 * numero1;
let cociente = numero2 / numero1;
/*
   20 |__10__
    0    2
 */
let resto  = numero2 % numero1;

// - Incremento y Decremento (++, --)
numero1++ // numero1 = numero1 + 1 
numero1-- // numero1 = numero1 - 1

// - Operadores Logicos o De Comparacion
// Operadores:
// ==  Igual a
// === Igual en valor y tipo
// !=  Distinto o no iguales
// !== Distintos en valor y tipo
// >   Mayor que
// <   Menor que
// >=  Mayor o igual que
// <=  Menor o igual que

//     - Negacion (!)
let bool3 = !bool2;
console.log(!bool1);

//     - AND y (&&)
console.log(numero1 < numero2 && nombre != apellido);

//     - OR o (||)
console.log(numero1 > numero2 || nombre == apellido);

// Adquirir informacion del usuario
let nombre2 = prompt("Ingrese su nombre");
document.write("<h4> Hola "+ nombre2 + "</h4>");

let numero4 = Number(prompt("Ingrese un numero"));
// numero4 = Number(numero4);
let numero5 = Number(prompt("Ingrese otro numero"));
// numero5 = Number(numero5);
console.log(numero4 + numero5);


// Condicionales
// if (condition) {
//   codigo
// }

let flor = "flor";
if(flor != "flor"){
  console.log("Recoletar polen");
} else{
  console.log("Hacer miel");
}

// estrictamente iguales en valor y tipo
if (1 === '1') {
  console.log("Elementos iguales");
}

// Iteracion While
// while (condition) {
//   codigo
// }
let contador = 1;
console.log("Comienzo del while");
while (contador <= 10) {
  console.log("El valor es: " + contador);
  contador++;
}
console.log("Fin del while");

// let palabra = prompt("Ingresa una palabra");
// while (palabra != "secreto") {
//   console.log(palabra + " No es la palabra correcta, vuelve a intentar");
//   palabra = prompt("Ingresa una palabra");
// }

// Iteracion For
console.log("Comienzo del For");
for (let index = 1; index <= 10; index++) {
  console.log("El valor es: " + index);
}
console.log("Fin del For");

// Iteracion do while
// do {
//   codigo
// } while (condition);

// emular doWhile con un while
// let condicion = 0
// while (condicion == 0) {
//   codigo
//   condicion = Number(prompt("ingrese numero"))
// }