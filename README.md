# IFTS29_25Cuatri2_Frontend
Repositorio de la materia Frontend IFTS 29 2025 2o cuatri

## Notas cursada
- Repasar rapido JavaScript IV viernes 17
- Saltar directo a JavaScript

---

## JavaScript VII / JSON, asincronia, promesas, fetch, async/await y try/catch

---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis y debug en javascript

---

## JavaScript VI / Manipulacion del DOM en JavaScript

---

## JavaScript V / Objetos, objetos globales. Almacenamiento persistente. Iteración en arrays, iteración en objetos e iteración en arrays de objetos

---

## JavaScript IV / Metodos de Strings y Arrays

#### Tareas: Chusmear machetes google drive de `js strings methods.jpeg` y `js strings methods.png`

```js
/* =======================
    Arrays y objetos
==========================
En JS los arrays y objetos son estructuras de datos fundamentales.
Los arrays se utilizan para almacenar una lista ORDENADA de elementos.
Los objetos son ideales para almacenar datos con propiedades clave-valor.


Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice.
Los arrays pueden conteneer cualquier tipo de datos (numeros, strings, booleanos, otros arrays, objetos, funciones, etc)


Un objeto es una coleccion de pares clave-valor.
Las claves son cadenas que identifican cada valor, lo cual permite un acceso rapido y estructurado a los datos
Los objetos son utiles cuando deseamos representar una entidad con multiples propiedades.

Podemos acceder a un objeto a traves de 
    - notacion de punto:    objeto.propiedad
    - notacion de corchete: objeto["propiedad"]

Los objetos pueden tener metodos, que son funciones almacenadas en una propiedad


==================
    Comparacion
==================

Uso principal
    - Array: Lista ordenada de elementos
    - Objeto: Coleccion pares clave-valor


Acceso a datos:
    - Array: Por indice -> array[0]
    - Objeto: Por clave -> objeto.clave / objeto["clave"]

Metodos:
    - Array: push(), pop(), forEach()
    - Objetos: Metodos personalizados y funciones

Iteracion
    - Arrays: forEach(), map(), etc
    - Objetos: for...in, Object.key(), Object.values(), Object.entries()
*/

// Array en JavaScript
let frutas = ["pera", "banana", "pomelo"];
console.log(frutas[0]); // Accedemos a la primera posicion, notacion 0
console.log(frutas[2]); // Accedemos a la tercer posicion


// Creacion de un objeto literales
let persona = {
    nombre: "Miguel",
    edad: 23,
    ciudad: "Buenos Aires",
    presentacion: function() {
        // this hace referencia al objeto desde el cual se esta invocando el metodo
        console.log(`Hola! me llamo ${this.nombre} y soy de ${this.ciudad}`);
    }
};

console.log(persona);
console.table(persona);


console.log(persona.nombre); // Miguel
console.log(persona["ciudad"]); // Buenos Aires
persona.presentacion();

// Agregamos y eliminamos propiedades
persona.preferencias = "Backend";
delete persona.ciudad;



/* ======================================
    Metodos de strings en JavaScript
=======================================*/

// length: devuelve la longitud del string
console.log("Holis".length);

let agite = "Aguante JavaScript vieja!";
for (let i = 0; i < agite.length; i++) {
    // console.log(agite[i]);
}

// charAt: Devuelve el caracter en la posicion especificada
console.log("Holis".charAt(3));


// concat: Concatena strings
let agiteFinal = "No me importa nada";
console.log(agite.concat(" ", agiteFinal));


// includes: Devuelve true si el substring esta dentro del string
console.log("JavaScript".includes("Script")); // Ojo porque es case sensitive


// startsWith: Comprueba si el string comienza con el substring
console.log("Hola mundo".startsWith("hola")); // false, es case sensitive tambien


// endsWith: Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("mundo"));


// indexOf: Devuelve el indice de la PRIMERA aparicion en el substring
console.log("banana".indexOf("a"));


// lastIndexOf: Devuelve el indice de la ULTIMA aparicion del substring
console.log("banana".lastIndexOf("a"));


// replace: Reemplaza una parte del string
console.log(agite.replace("JavaScript", "Megadeth"));


// replaceAll: Reemplazar TODAS las apariciones
console.log("1, 2, 3". replaceAll(", ",";"));


// toLowerCase: Convierte a minusculas
console.log("AGUANTE JAVASCRIPT".toLowerCase());


// toUpperCase: Convierte a mayusculas
console.log("holu! uwu".toUpperCase());


// trim: Elimina espacios en blanco al principio y al final
console.log("            holu            ".trim());


// trimStart: Elimina espacios en blanco al principio
console.log("            holu            ".trimStart());


// trim: Elimina espacios en blanco al final
console.log("            holu            ".trimEnd());


// slice: Extrae parte del string
console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(-3)); // slice tambien acepta negativo para los ultimos caracteres


// substring: Similar a slice, pero no acepta negativos
console.log("JavaScript".slice(4, 10));


// substr -> Deprecado


// split: Divide el string en un array
console.log("hola".split(""));
console.log("rojo, verde, azul".split(", "));


// repeat: repite el string
console.log("ji".repeat(3));


// match: devuelve coincidencias con una expresion regular (REGEX)
console.log("abc123".match(/[^0-9]/g)); // extrae los caracteres
console.log("abc123".match(/\d/g)); // extrae los numeros



/* ======================================
    Metodos de arrays en JavaScript
========================================*/

let caracteres = ["a", "b", "c", "d"];

// length: Devuelve la longitud del array
console.log(caracteres.length); // 4

for(let i = 0; i < caracteres.length; i++) {
    console.log(caracteres[i]);   
}


// push: Agrega un elemento al FINAL del array
let arr = [1, 2];
console.log(arr);
arr.push(3);


// pop: Elimina el ultimo elemento y lo devuelve
console.log(arr.pop());


// unshift: Agrega un elemento al inicio del array
arr.unshift(0);


// shift: Elimina el primer elemento y lo devuelve
console.log(arr.shift());


// concat: Concatena arrays
console.log(arr.concat([3, 4])); // No altera el array original
let arr2 = [3, 4];
let nuevoArr = arr.concat(arr2);
console.log(nuevoArr);


// join: Une los elementos en un string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// https://www.w3schools.com/jsref/jsref_join.asp
let nuevoStr = [1, 2, 3].join("-");
console.log(nuevoStr);


// slice: Extrae una copia parcial del array
console.log(nuevoArr.slice(1, 3));


// splice: Modifica el array in situ, permite borrar y agregar
/* 
Guia referencia W3 Schools: https://www.w3schools.com/jsref/jsref_splice.asp

cincoNums.splice(1, 2, "dos"); 

- Primer parametro es la posicion en el array

- Segundo parametro (opcional) es el numero de elementos a ser eliminados en esa posicion 

    - podemos no eliminar nada, pondremos 0
    - podemos eliminar el elemento en esa posicion, pondremos 1
    - podemos eliminar dos elementos desde esa posicion, pondremos 2

- Tercer parametro (opcional), el nuevo elemento a ser añadido en esa posicion
*/
const cincoNums = [1, 2, 3, 4, 5];
console.log(cincoNums);
cincoNums.splice(1, 2, "dos"); 

// Ojo a la hora de realizar ciertas operaciones adentro de un console.log! -> splice y concat


// indexOf: Devuelve la PRIMERA posicion del elemento
console.log([1, 2, 3].indexOf(2)); // Devuelve 1, porque preguntamos por la posicion del elemento 2 en el array
// Nos indica, que el numero 2, esta en la posicion 1


// lastIndexOf: Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3, el ultimo numero 2 esta en la posicion 3
// En caso de no encontrar nada, devuelve -1

```

---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos
```js
/*====================================
    Scope o Ambito
======================================

El scope o ambito en JavaScript, se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas. Entender el scope es clave para que tengamos un control preciso en nuestro codigo.


Global Scope o Ambito Global

    - Todas las variables que declaramos fuera de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo


Local Scope o Function Scope / Alcance local o de Funcion
    
    - Las variables declaradas dentro de una funcion solo son accesibles DENTRO de esa funcion. Estas variables tienen un ambito local


Block Scope o Ambito de bloque

    - A partir de ES6 (JavaScript moderno), las variables declaradas con let y const tienen alcance de bloque
    - El alcance de bloque esta limitado por las llaves {} que estan dentro de un if, de un for, etc 
*/

// Global Scope
var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}


mostrarGlobal();
console.log(globalVar);


// Local Scope
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // ReferenceError: localVar is not defined



// Block Scope

if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); //Uncaught ReferenceError: bloqueLet is not defined




/*==========================
    Hoisting o Elevacion
============================

Las declaraciones de variables y de funciones en JavaScript se mueven hacia arriba de su contexto de ejecucion.

- Variables con var: Se elevan y se inicializan con undefined

- Variables let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/

console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var";
console.log(elevadaVar);


// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let";
console.log(elevadaLet);




/*==================================
    Diferencias var, let y const
====================================

- var: Tiene ambito de funcion, por lo que si se decalara dentro de una funcion, esta disponible en todo momento dentro de esta. Permite la redeclaracion y la reasignacion

- let: Tiene ambito de bloque {}, no permite la redeclaracion pero si la reasignacion

- const: Tiene ambito de bloque {}, no permite la redeclaracion ni la reasignacion
*/




/*=================================
    Funciones en JavaScript
===================================

Las funciones son bloques de codigo reutilizables que podemos ejecutar cuando las llamamos por su nombre
- Son fundamentales para la modularidad y la reutilizacion de codigo

*/

function sumarDosYDos() {
    let resultado = 2 + 2;
    return resultado; // Como esta la palabra clave return, esta funcion no imprime nada, devuelve el valor
}


console.log(sumarDosYDos()); // Ya que esta funcion tiene return, para verla tiene que ir dentro de un console.log


function suma(a, b) { // Los parametros son VARIABLES que definimos en la declaracion de la funcion
    return a + b;
}

console.log(suma(5, 6)); // Los argumentos son los VALORES que le pasamos a la funcion cuando la llamamos



/*=====================================
    Tipos de funciones en JavaScript
=======================================

1. Funcion declarada / Named function o Basic function

- Es la declaracion basica de JavaScript, usa la keyword function
- Se recomienda para funciones con nombre o cuando se necesite hoisting.
- Las funciones declaradas con la keyword function se pueden elevar a la parte superior de su ambito. Por lo que podemos llamar a la funcion antes de ser declarada

    ciclon();

    function ciclon() {
        console.log(`Aguante San Lorenzo`);
    }


2. Funcion expresada / Function expression

- Es la funcion que esta dentro de una variable

- Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion

    const casla = function() {
        console.log(`Aguante el ciclon`);
    }

    casla();


3. Funcion anonima / Anonymous function
- No tiene nombre y se usan como callbacks generalmente
    
    setTimeout(function() {
        console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
    }, 1000);


4. Funcion flecha / Arrow function
- Muy utiles para escribir funciones de una sola linea

const sumarFlecha = (a, b) => a + b;


5. Funcion de metodos / Method function
- Funciones definidas dentro de un objeto o clase

    const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
- Funciones que se ejecutan inmediatamente despues de haberse definido

(function() {
    console.log(`Esta es una IIFE`);
}());




==========================================
    Tipos de funciones flecha
==========================================
// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"))
*/

// 1. Funcion declarada
ciclon();

function ciclon() {
    console.log(`Aguante San Lorenzo`);
}


// 2. Funcion expresada
const casla = function() {
    console.log(`Aguante el ciclon`);
}

casla();


// 3. Funcion anonima
setTimeout(function() {
    console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
}, 1000);


// 4. Funcion flecha
const sumarMuestra = (a, b) => a + b;


// 5. Funcion de metodos / Method function
const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
(function() {
    console.log(`Esta es una IIFE`);
}());




// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"));
```

---

# JavaScript II / Control de Flujo, Estructuras de Control, Condicionales y Bucles I
```js
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

/*
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
*/

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


while: Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while(condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }


do...while: Muy similar a while, pero la condicion se evalua despues de ejecutar el bloque de codigo, por lo que se garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar
    } while (condicion);

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


// TO DO -> Ejercio sugerido, armen una tabla de multiplicar del 1 al 10

// Bucle while
let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}


// do.. while
let i = 0;

do {
    console.log(`Iteracion: ${i}`);
    i++
} while (i < 5);



////////////////////////////////
// Control de flujo avanzado //

// break: Se usa para salir inmediatamente de un bucle o estructura de control

for (let i = 0; i < 10; i++) {

    if (i === 5) { // Salimos del bucle cuando i es 5
        break;
    }

    console.log(`Iteracion con break: ${i}`);
    
}


// continue: Se salta a la siguiente iteracion del bucle, omitiendo el codigo restante dentro del bucle para esa iteracion

for (let i = 0; i < 10; i++) { 
    if (i % 2 === 0) { // Se salta la iteracion cuando i es par
        continue;
    }
    console.log(i);
}


/////////////
// Switch //

// Es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

let diaSemana = 3;

// Verificamos que dia de la semana es

switch(diaSemana) {
    case 1: 
        console.log("Lunes");
        break;

    case 2: 
        console.log("Martes");
        break;

    case 3: 
        console.log("Miercoles");
        break;

    case 4: 
        console.log("Jueves");
        break;

    case 5: 
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");

}

// TO DO -> EJERCICIO SUGERIDO JAVASCRIPT II, creen una calculadora que reciba dos numeros por un cuadro de texto prompt y realice operaciones usando la estructura de control switch
```

---

## JavaScript 1 / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores
```js
/*=======================
    Que es JavaScript?
=========================

Es un lenguaje de programacion que usamos para crear paginas web interactivas.
Si HTML se encarga de la estructura y CSS se encarga de los estilos, JavaScript hará que las páginas respondan a las acciones del usuario y a cambios que ocurren en el documento, realizar calculos, alterar elementos, realizar operaciones personalizadas, etc.

Es el lenguaje de programacion que vamos a usar para procesar informacion y manipular documentos. Sus instrucciones se ejecutan de forma secuencial, para indicarle al sistema lo que queremos que haga.

Cuando el navegador (nuestro entorno de ejecucion de JavaScript) encuentra este codigo en nuestro documento, ejecuta las instrucciones al momento y cualquier cambio realizado en el documento se muestra en la pantalla.
*/

// Mensaje por consola
console.log("Hola mundo en JavaScript");


/*==============================================
    Tipos de datos primitivos en JavaScript
==============================================*/

let numero = 42;        // Numero: Valor numerico
let texto = "Hola";     // String: Cadena de caracteres, texto encerrado en '' o ""
let verdadero = true;   // Booleanos: true o false
let vacio = null;       // null: Representa un valor intencionalmente vacio
let indefinido;         // undefined: una variable declarada pero sin valor

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);


/*=====================================
    Operadores en JavaScript
=======================================

Los operadores son simbolos especiales que nos permiten realizar operaciones sobre otros valores.
Pueden ser aritmeticos, de comparacion, logicos, de asignacion, entre otros.

https://www.w3schools.com/js/js_operators.asp


Aritmeticos______________

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement


Operadores de asignacion___

=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y


Operadores de comparacion___

==	equal to	x == 5
===	equal value and equal type	x === 5
!=	not equal	x != 5
!==	not equal value or not equal type	x !== 5
>	greater than	x > 5
<	less than	x < 5
>=	greater than or equal to	x >= 5
<=	less than or equal to	x <= 5

Operadores logicos__________

&&	logical and
||	logical or
!	logical not
*/
```