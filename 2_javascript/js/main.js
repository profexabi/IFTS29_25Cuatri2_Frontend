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


/*==========================
    Destructuring
============================
El destructuring o "desestructuracion" es basicamente una forma de de descomponer estructuras de datos como arrays y objetos en variables individuales sin tener que acceder manualmente a cada elemento o propiedad

Ventajas:
    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas de codigo para obtener exactamente lo mismo)
*/

// Con arrays
// Sin destructuring
const numerosArray = [1, 2, 3]; 
const unoArray = numerosArray[0]; // 1
const dosArray = numerosArray[1]; // 2

// Con destructuring
const [uno, dos] = [1, 2, 3];
console.log(uno, dos); // 1 2


// Con objetos
const persona = {nombre: "Lucia", edad: 30};
const { nombre, edad } = persona;
console.log(nombre, edad); // Lucia 30


// Destructuring de arrays con valores omitidos
const [primero, , tercero] = [10, 20, 30];
console.log(primero, tercero); // 10 30


// Rest operator con destructuring
const [a, ...resto] = [1, 2, 3, 4]; // El rest operator junta multiples elementos en un arary simple o un objeto
console.log(a); // 1
console.log(resto); // (3) [2, 3, 4]

/* EXTRA Spread Operator vs Rest Operator

Los operadores spread y rest en JavaScript utilizan la misma sintaxis de tres puntos (...), pero tienen funciones distintas. El operador spread expande un iterable (como una matriz u objeto) en elementos individuales, lo que lo hace útil para tareas como crear copias superficiales de matrices u objetos, fusionar matrices u objetos y pasar elementos de matrices como argumentos a funciones.  

Por ejemplo, se puede utilizar para expandir los elementos de una matriz en una llamada a una función o para combinar varias matrices en una sola.  Por el contrario, el operador rest recopila varios elementos en una sola matriz u objeto, utilizado principalmente en parámetros de funciones para reunir un número indefinido de argumentos en una matriz o en asignaciones de desestructuración para capturar los elementos o propiedades restantes.  

El operador de resto debe ser el último parámetro de la lista de parámetros de una función y se utiliza comúnmente para manejar listas de argumentos de longitud variable, asegurando que los argumentos recopilados sean una matriz real con acceso a todos los métodos de la matriz.  Esta distinción permite un código más flexible y conciso, especialmente cuando se trata de estructuras de datos dinámicas o argumentos de funciones. 
*/

// Rest operator en objetos
const { apodo, ...otros } = { apodo: "Branko", edad: 30, pais: "Argentina"};
console.log(otros); // {edad: 30, pais: 'Argentina'}


/*=======================
    Spread operator
=========================
El spread operator (operador de propagacion) -> ...
es una sintaxis introducida en ES6 (EcmaScript 2015) que permite descomponer elementos iterables (arrays, strings y objetos) en elementos individuales. Su comportamiento varia segun el contexto en el que se use, pero su principal funcion es:

    - copiar
    - combinar
    - expandir

Estructuras de datos de manera eficiente.

Para que nos sirve?

    - Manipulacion de arrays (copiar y concatenar)
    - Combinacion de objetos
    - Paso de argumentos a funciones
*/


// Spread operator en arrays


const original = [1, 2, 3]; // Copia superficial o shallow copy
const copia = [...original]; 
console.log(copia); // [1, 2, 3]


/* EXTRA Shallow Copy 
Copia Superficial en JavaScript

Una copia superficial, o shallow copy en JavaScript, es una operación que crea un nuevo objeto y copia las propiedades de nivel superior del objeto original, pero solo copia las referencias a los objetos anidados, no los objetos en sí Esto significa que si el objeto original contiene propiedades que son otros objetos o arreglos, la copia superficial solo copiará las direcciones de memoria de esos elementos, no sus valores reales Como resultado, cualquier modificación realizada en un objeto anidado dentro de la copia superficial también afectará al objeto original, ya que ambos comparten la misma referencia a ese objeto anidado Métodos comunes para realizar una copia superficial incluyen el operador de propagación (`...Una copia superficial, o shallow copy en JavaScript, es una operación que crea un nuevo objeto y copia las propiedades de nivel superior del objeto original, pero solo copia las referencias a los objetos anidados, no los objetos en sí Esto significa que si el objeto original contiene propiedades que son otros objetos o arreglos, la copia superficial solo copiará las direcciones de memoria de esos elementos, no sus valores reales Como resultado, cualquier modificación realizada en un objeto anidado dentro de la copia superficial también afectará al objeto original, ya que ambos comparten la misma referencia a ese objeto anidado Métodos comunes para realizar una copia superficial incluyen el operador de propagación (`...`), `Object.assign()` y `Array.slice()`
*/

// Concatenacion de Arrays
const arrayUno = [1, 2];
const arrayDos = [3, 4];
const combinado = [...arrayUno, ...arrayDos]; // Mucho mas eficiente que concat()
console.log(combinado); // (4) [1, 2, 3, 4]


// Convierte strings en arrays (sin necesidad de usar split(""))
const saludito = "Holis";
const caracteres = [...saludito];
console.log(caracteres); // (5) ['H', 'o', 'l', 'i', 's']


// Combinacion de objetos
const defaults = { theme: "dark", fontSize: 14 };
const userSettings = { fontSize: 18 };
const finalConfig = {...defaults, ...userSettings};

console.log(finalConfig); // {theme: 'dark', fontSize: 18}



/*========================
    Web APIs
==========================

// 1. Que es una API?
API significa Application Programming Interface (Interfaz de Programacion de Aplicaciones)

Una API es basicamente un conjunto de funciones y herramientas que podemos usar para interactuar con algo, como el navegador, el servidor o una libreria



// 2. Que es una web API?
En el contexto del navegador, una Web API es una funcion o conjunto de funciones que el navegador nos proporciona para que las usemos con JavaScript

JavaScript por si solo es un lenguaje de programacion muy basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionaliades especiales que el navegador nos proporciona como: 

//////////////////
// APIs del DOM (Document Object Model)
Permite acceder y modificar el HTML y CSS de la pagina
Manipulacion de elementos, eventos, clases, estilos, etc

    - document.getElementById()
    - element.addEventListener()
    - document.createElement


//////////////////
// APIs de Red
Permiten comunicarnos con servidores o cargar recursos
Peticiones HTTP, chats, notificaciones en tiempo real

    - fetch()
    - XMLHttpRequest (el fetch antiguo)
    - WebSocket para comunicacion en tiempo real


//////////////////
// APIs de almacenamiento
Guardan informacion en el navegador
Gardar preferencias, datos de sesion, apps sin conexion

    - localStorage
    - sessionStorage
    - IndexDB
    - Cookies (mediante document.cookie)


//////////////////
// Timers
Permiten ejecutar funciones luego de un cierto tiempo
Retrasos, animaciones

    - setTimeout()
    - setInterval()
    - clearTimeout y clearInterval


//////////////////
// APIs de dispositivos y multimedia
Interaccion con hardware o medios
Apps moviles, camara, permisos, grabaciones, notificaciones

    - navigator.geolocation para GPS
    - MediaDevices.getUserMedia() para microfono y camara
    - Notificacion para notificaciones del sistema
    - Battery API, Clipboard API


//////////////////
// APIs de interfaz grafica
Controlan animaciones, graficos y visualizacion
Juegos, visualizaciones y graficos dinamicos
    - Canvas API
    - WebGL
    - Fullscreen API
    - Screen Orientation API
*/