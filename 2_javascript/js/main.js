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