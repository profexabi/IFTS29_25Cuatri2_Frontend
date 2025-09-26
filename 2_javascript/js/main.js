/*====================================
    Control de flujo en JavaScript
======================================

El control de flujo en JavaScript determina como se ejecutan las instruccione sde un programa.
Al diseñar un programa, es importante establecer que partes del codigo se ejecutan y bajo que condiciones.

En JavaScript esto se logra mediante estructuras de control que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones específicas.


1. Condicionales
    - if, else if, else
    - Operadores logicos: &&, ||, !
    - Operadores ternarios
    
2. Bucles
    - for, while, do...while

3. Control de flujo avanzado
    - break
    - continue
    - switch
*/

// Condicionales if, else if y else: Se usan para ejecutar un bloque de codigo si una condicion es verdadera

let edad = 20;

if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida")
}

/* ========================
    Operadores logicos
===========================

AND (&&):   Ambas condiciones deben ser verdaderas

OR (||):    Al menos una condicion debe ser verdadera

NOT (!):    Niega el valor de una condicion. Es el operador de negacion basica
*/

// Le pedimos input al usuario
let edadUser = parseInt(prompt("Introduci tu edad")); // prompt devuelve string, asi que convertimos ese valor en entero
console.log(typeof edadUser); // Pedimos el tipo de dato que nos devuelve prompt 

let tieneLicencia = confirm("Tenes licencia che?");
console.log(tieneLicencia);


if (edad >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if( edad < 18 || !tieneLicencia ) {
    console.log("No podes manejar");
}


// El operador ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa

// Usaremos comunmente el operador ! para implementar la logica "toggle" o interruptor que alterna entre true y false

let estado = true;

// Una funcion es un bloque de codigo que podre reutilizar todas las veces que llame o invoque a la funcion
function alternarEstado() {
    estado = !estado;
    console.log("Nuevo estado:", estado);
}

alternarEstado(); // false
alternarEstado(); // true

/*=======================================
    Valores truthy y falsy en JS 
=========================================
Valores truthy:
https://conermurphy.com/images/blog/Truthy-Falsy-Values-Explained/truthy-values.png

Valores falsy:
https://conermurphy.com/images/blog/Truthy-Falsy-Values-Explained/falsy-values.png

El operador ! nos permite verificar si una variable es falsy

Los valores "falsy" son aquellos que en un contexto booleano, resultan en false */


// El operador ternario es una forma mas compacta de escribir una condicion if...else

let temperatura = 30;

// Condicion con operador ternario
let mensaje = (temperatura > 25) ? "Hace calor" : "Hace frio";

console.log(mensaje);


/*=================================
    Bucles en JavaScript
===================================

for: Se usa cuando se conoce de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }


*/

for (let i = 0; i < 5; i++) {

    //console.log("Iteracion: " + i); // Concatenacion clasica
    //console.log(`Iteracion: ${i}`); // Sintaxis con template literals
}

// Tabla de multiplicar del 1 al 3 anidando bucles for

for (let i = 1; i <= 3; i++) {

    console.log(`Iteracion i: ${i}`);

    for(let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${(i * j)}`);
    }

}


// Ejercio sugerido, armen una tabla de multiplicar del 1 al 10

// Continuar desde aca