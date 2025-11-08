/*==================
    Callbacks
====================
Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o alguna operacion */

// Ejemplo 1
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);

    // Aca podemos definir cualquier tipo de operaciones

    callback(); // Se ejecuta el callback, es decir la funcion que pasamos por parametro
}

function despedirse() {
    console.log(`Chau nos vemos`);
}

// Invocamos a la funcion saludar y el segundo parametro es la otra funcion
saludar("Xacobe", despedirse); // Hola Xacobe       Chau nos vemos


// Ejemplo 2
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");

    let resultado = datos.toUpperCase(); // Transformamos a mayusculas el primer parametro

    callback(resultado);
}


procesarDatos("hola mundo", (res) => {
    console.log("Resultado: ", res); // Procesando datos...     Resultado:  HOLA MUNDO
});


// Ejemplo 3, ejecutamos un temporizador que recibe una funcion como 1er parametro y como segundo recibe un numero (milisegundos en ejecutarse)
setTimeout(() => {
    console.log(`Esto se ejecuta despues de 1 segundo`);
}, 1000);



/*==================================
    Caracteristicas principales
====================================

1. En JavaScript, las funciones son ciudadanos de primera clase o "first class citizens", lo que significa que pueden ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignando una funcion a una variable
const miCallback = function() {
    console.log(`Callback ejecutado`);
}

// Pasar como argumento
function ejecutarCallback(callback) {
    callback();
}

ejecutarCallback(miCallback); // Callback ejecutado


/*==================================
    Sincronia vs Asincronia
===================================*/
/*
// Callback sincrono -> Bloquea el hilo principal de la aplicacion
function procesoPesado(callback) {
    console.log(`Iniciando proceso`);

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 3000; i++) {
        console.log("Iteracion del bucle");
    }

    callback(); // Ejecutamos el callback
}

procesoPesado(function() {
    console.log("Proceso completado");
});

// Prestemos atencion a ver cuanto tarda en ejecutarse esta linea
console.log("Esto se va a ejecutar despues del callback");
*/

// Callback asincrono -> NO bloquea el hilo principal de la aplicacion
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    setTimeout(function(){
        callback()
    }, 2000);
}

procesoAsincrono(function() {
    console.log(`Proceso asincrono completado al cabo de 2 segs`);
});

// Prestemos atencion a ver cuanto tarda en ejecutarse esta linea
console.log(`Esto se ejecuta inmediatamente`);



/*==========================
    Casos de uso comunes
===========================*/

//////////////////////////////
// Temporizadores (timers)
// setTimeout se ejecuta una vez al cabo de x milisegundos
setTimeout(function() {
    console.log(`Esto se ejecuta una sola vez despues de 3 segundos`);
},3000);


// setInterval se ejecuta cada x milisegundos (de manera ininterrumpida)
let contador = 0;
let intervalo = setInterval(function() {
    contador++;
    console.log(`Contador: ${contador}`);
    
    if(contador === 5) {
        clearInterval(intervalo);
    }
}, 1000);


//////////////////////////////
// Eventos del DOM
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function(event) {
    console.log(`Boton clickeado`, event.target); // Imprimimos el mensaje y el elemento que detono el evento
});


//////////////////////////////
// Operaciones con arrays
let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, valor: ${numero}`);
});

// map
let duplicados = numeros.map(function(numero) {
    return numero * 2;
});
console.log("Numeros duplicados: ", duplicados);


//////////////////////////////
// Peticiones HTTP (ver ejemplo fetch)


//////////////////////////////
// Lectura de archivos con Node.js (lectura asincrona cuando usamos el modulo nativo fs y leemos archivos de nuestra computadora)
/*
const fs = require("fs");

// Lectura asincrona
fs.readFile("archivo.txt", "utf8", function(error, contenido) {
    if(error) {
        console.error("Error leyendo archivo: ", error);
        return;
    }

    console.log(`Contenido del archivo: `, contenido);
});
*/


/*============================================
    Ventajas y desventajas de los callbacks
==============================================

Ventajas
    - Simplicidad: Facil de entender para operaciones simples
    - Universalidad: Compatibilidad con todos los navegadores
    - Flexibilidad: Permite crear codigo reutilizable


Desventajas
    - Callback hell: Anidamiento excesivo que dificulta la lectura
    - Manejo de errores: Complicado con callbacks anidados
    - Flujo de control: Dificil de seguir con operaciones complejas
*/

// Ejemplo de Callback Hell -> Dificil de leer, dificil de mantener, facil de romper
setTimeout(() => {
    console.log("Paso 1");
    setTimeout(() => {
        console.log("Paso 2");
        setTimeout(() => {
            console.log("Paso 3");
            setTimeout(() => {
                console.log("Paso 4")
                setTimeout(() => {
                    console.log("Paso 5")
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Y como solucionamos el callback hell y hacemos que una operacion asincrona se ejecute despues de otra y viceversa?

// Solucion 1: Usando Promises. Vamos encadenando secuencialmente las operaciones que se ejecutan de manera ordenada y al termino de la anterior
fetch("api.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));


// Solucion 2: Usando async / await (una forma mas moderna y legible de trabajar con promesas)
async function obtenerDatos() {
    try {
        const res = await fetch("api.com/data");
        const data = await res.json();
        console.log(data);

    } catch(err) {
        console.error(err);
    }
}

// AMBOS patrones estan basados en callbacks, pero ofrecen una sintaxis mas limpia y estructurada

// TO DO: Proxima clase, destructuring, spread operator y web apis