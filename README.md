# IFTS29_25Cuatri2_Frontend
Repositorio de la materia Frontend IFTS 29 2025 2o cuatri

## Notas cursada
- **Saltar directos a asincronia**

---

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

### Consumiendo recursos de una API Rest, con .then y async/await
```js
let contenedorApi = document.getElementById("contenedorApi");
let contenedorAlbums = document.getElementById("contenedorAlbums");

/*==============================================
    Consumiendo informacion de una API Rest
================================================

- Opcion 1: Trabajando con promesas y encadenando con .then() -> Opcion tradicional

- Opcion 2: Utilizando la sintaxis mas moderna para trabajar con promesas, async/await

Consumiremos informacion de esta API Rest publica
https://jsonplaceholder.typicode.com/
*/

// Ejemplo de opcion 1: Encadenando promesas con .then()
// 1. Hacemos una solicitud a esta URL para traer todo el choclo de datos en JSON
fetch("https://jsonplaceholder.typicode.com/users")

    // 2. Una vez que obtengamos estos datos en JSON (texto plano), los parseamos
    .then(response => response.json()) // Transformamos este texto plano en objetos JS

    // 3. Una vez que tenemos nuestros dataos procesos, mostramos esta informacion por consola
    .then(data => {
        console.log(data); // Estoy mostrando la informacion contenida en esta URL, que nos proporciona la API Rest

        console.table(data); // Tambien puedo mostrarla en formato tabla

        mostrarUsuarios(data);
    })

    .catch(error => console.error(error));


function mostrarUsuarios(array) {
    let htmlUsuarios = `<ul>`;

    array.forEach(user => {
        htmlUsuarios += `
            <li>Usuario: ${user.username}, email: ${user.email}, telefono: ${user.phone}</li>
        `;
    })

    htmlUsuarios += `</ul>`; // Llenado toda nuestra nueva lista dinamica de contenido proveniente de la API Rest, pasamos a mostrarlo o renderizarlo

    contenedorApi.innerHTML = htmlUsuarios;
}


// Ejemplo opcion 1: Utilizando una solucion mas moderna, async/await
async function obtenerAlbumes() {
    try {

        // Detenemos el codigo con await a la espera de obtener los datos de albums de esta url
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");

        // Convertimos el texto plano JSON en objetos JavaSript
        const data = await response.json(); // Esperamos a que esta informacion de arriba se procese a objetos javascript

        // Procesados nuestros datos, secuencialmente gracias a await, podemos mostrarlos por consola
        console.table(data);

        mostrarAlbums(data);


    } catch(error) {
        console.error("Se produjo un error: ", error);
    }
}

function mostrarAlbums(array) {
    let htmlAlbums = "";

    array.forEach(album => {
        htmlAlbums += `
            <ul class="lista-data album">
                <li>Id: ${album.id}</li>
                <li>Titulo: ${album.title}</li>
            </ul>
        `;
    })

    contenedorAlbums.innerHTML = htmlAlbums;
}

obtenerAlbumes();
```

---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis y debug en javascript

#### [Videos cortos / Playlist todocode como funciona la web](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)

#### [Clase 2hs / Procolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)
```js

```

---

## JavaScript VI / Manipulacion del DOM en JavaScript
### Que es el `DOM`?
El `DOM` (Document Object Model) o Modelo de Objetos de Documento es una interfaz de programacion que representa un documento HTML como una estructura jerarquica de objetos conocida como arbol DOM.

Esta estructura permite a los programas y A JavaScript, acceder, modificar, añadir o eliminar elementos, contenido, estilos y atributos del documento de forma dinamica.

Cada elemento HTML se convierte en un nodo dentro de este arbol y todos los elementos estan relacionados entre si mediante padres, hijos y hermanos creando una representacion en memoria del documento que el navegador puede manipular.

### En resumen
- **DOM es una representacion en memoria de la estructura de una pagina web**. Transforma el HTML en una estructura de nodos y objetos que puede ser manipulada con JavaScript

- **Cada etiqueta HTML es un nodo en el DOM**

- El DOM permite que JavaScript modifique el contenido, la estructura y el estilo de una pagina

```html

Ejemplo de estructura DOM__________

<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>
```

Este HTML seria representado en el DOM como una estructura en forma de arbol.
document es el objeto que representa toda la pagina web

    Diagrama de arbol del DOM__________

    - document
        - html
            - head
                - title
            - body
                - h1
                - p


#### Como funciona la manipulacion del DOM?
JavaScript puede acceder y modificar cualquier elemento del DOM, utilizando el objeto global document.

JavaScript puede
    - Modificar el contenido (textos, atributos, clases)
    - Añadir o eliminar elementos del DOM
    - Escuchar eventos de usuario (clicks, teclas, etc) 
    
    
#### Como seleccionar elementos?
- `getElementById()`:         Selecciona un elemento por su Id. Este es el metodo clave que usamos siempre
- `querySelector()`:          Selecciona el primer elemento que coincida con un selector CSS
- `querySelectorAll()`:       Selecciona todos los elementos que coincidan con un selector CSS

- `getElementByClassName()`:  Selecciona todos los elementos que tengan una clase especifica
- `getElementsByTagName()`:   Selecciona todos los elementos de un tipo de etiqueta dado



*En JavaScript V veiamos que*

    Objetos y metodos importantes del objeto window

    - document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. El DOM es la representacion en memoria de una pagina HTML y gracias al DOM, podremos manipular la pagina web con JavaScript

```js
/*=============================================
    Seleccionando elementos en el DOM
===============================================

getElementById()
    - Metodo que selecciona un unico elemento por su id. Si no lo encuentra, devuelve null
    - Solo selecciona el primer elemento que coincida con el id
*/

// Recomendacion, poner el mismo nombre de variable que el id o clase
let titulo  = document.getElementById("titulo");

console.log(titulo);
console.log(titulo.textContent);

/*
querySelector() y querySelectorAll
    - querySelector: Selecciona el primer elemento que coincida con un selector CSS (#nombreId, .nombreClase o etiqueta)
    - querySelectorAll: Selecciona TODOS los elementos que coincidan con el selector CSS
*/

let mensaje = document.querySelector(".mensaje");
console.log(mensaje.textContent);

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos); // Devuelve algo parecido a un array, que es una lista de nodos

parrafos.forEach(parrafo => console.log(parrafo.textContent));


/*=============================================
    Modificar contenido y atributos
===============================================

Una vez seleccionado un elemento, podemos modificar su contenido, atributos o estilo

- textContent(): Modificar el texto dentro de un elemento

- innerHTML: Modificar el contenido HTML dentro de un elemento

- setAttribute(): Modificar los atributos de un elemento

- style: Cambiar el estilo CSS en linea de un elemento


Que solemos hacer para la manipulacion del DOM?
1. Seleccionar elemento
2. Cambiar su contenido o asignar un evento
*/

// Seleccionamos el elemento con id parrafo
let parrafo = document.getElementById("parrafo");

// Cambiar el texto
parrafo.textContent = "Nuevo texto desde JavaScript";

// Modificar el contenido HTML (incluyendo etiquetas)
parrafo.innerHTML = `<strong>Nuevo texto en negrita</strong>`;


// Seleccionamos el boton por su id #boton
let boton = document.getElementById("boton");

// Cambiar el atributo id
boton.setAttribute("id", "nuevoId");

// Cambiar el estilo
boton.style.backgroundColor = "green";
boton.style.color = "white";
boton.style.padding = "5px";


/*============================
    Eventos en JavaScript
==============================

Un evento es una señal que se envia cuando ocurre una interacción o cambio en el documento, como un click, una pulsacion de tecla, etc.

JavaScript permite escuchar estos eventos y ejecutar funciones específicas cuando ocurren

- Eventos de mouse: click, mouseover, mouseout, mousemove

- Eventos de teclado: keydown, keyup

- Eventos de formulario: submit, change, input, focus

- Eventos de ventana: resize, scroll, load, unload
*/

let input = document.getElementById("input");
let texto = document.getElementById("texto");
let valor = document.getElementById("valor");


// Seleccionado nuestro elemento, le asignamos un escuchador de eventos para que responda a los clicks
input.addEventListener("click", () => {
    alert("hiciste click, maquina");
});

// Voy a imprimir por consola el tipo de tecla que estoy pulsando

// El objeto event, que se pasa por parametro aca nos permite acceder a informacion y metodos relacionados con el evento
texto.addEventListener("keydown", function (event) { 
    console.log(`Tecla presionada: ${event.key}`);
    console.log(`Codigo fisico de la tecla: ${event.code}`);
});

/*  Tecla presionada: 1
    Codigo fisico de la tecla: Digit1
    
    Tecla presionada: 1
    Codigo fisico de la tecla: Numpad1
*/

/*================================
    Propagacion de eventos
==================================

Los eventos se propagan a traves del DOM en dos fases:
    - Fase de captura (de arriba hacia abajo)
    - Fase de burbuja (de abajo hacia arriba)

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchar el click en el evento padre
padre.addEventListener("click", () => {
    console.log("Se hizo click en el evento padre");
});

hijo.addEventListener("click", (event) => {
    event.stopPropagation(); // Para evitar que el elemento hijo propague el evento del padre
    console.log("Se hizo click en el evento hijo");
});


let miForm = document.getElementById("miForm");

miForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenimos el envio por defecto del formulario HTML gracias a este metodo
    alert("Formulario no enviado");
});
```

---

## JavaScript V / Objetos, objetos globales. Almacenamiento persistente. Iteración en arrays, iteración en objetos e iteración en arrays de objetos
```js
/* ====================================
    Objetos Globales en JavaScript
=======================================

El entorno de ejecucion es el lugar donde podemos correr JavaScript. Podemos correrlo en el navegador y en Node.js

El navegador es el Entorno de Ejecucion de JavaScript. Es decir, es donde ejecutamos JavaScript y nos proporciona un motor para interpretar codigo JavaScript, tambien nos proporciona herramientas y facilidades para introducir codigo, depurar, etc

El entorno de ejecucion de JavaScript que veremos despues de frontend. Va a ser Node.js, Express.js sera el framework que trabaja sobre este nuevo entorno de ejecucion.


Los entornos de ejecucion, sea el navegador o sea Node.js, nos proporcionan Objetos Globales.
Estos son objetos que estan disponibles en todo el entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente. Varian depende del entorno de ejecucion.
Pero la idea central de los objetos globales es facilitarnos el acceso a ciertas funciones o valores predeterminados



============================================
    Objetos globales en el navegador
============================================

En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript (como Array, String, Object, etc), asi como todo un conjunto de objetos especificos para la interaccion con la pagina web y su entorno


El objeto global principal en el entorno del navegador es window.
Este objeto representa toda la ventana del navegador y actua como el contenedor global para todas las variables, funciones definidos en el ambito global y estna automaticamente disponibles como propiedaes del objeto window.


Objetos y metodos importantes del objeto window

- document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. El DOM es la representacion en memoria de una pagina HTML y gracias al DOM, podremos manipular la pagina web con JavaScript


- alert(), prompt(), confirm(): Metodos que permiten mostrar dialogos al usuario y recoger input


- setTimeout() y setInterval(): Metodos para programar la ejecucion de codigo despues de un tiempo (setTimeout) o en intervalos regulares (setInterval)

- location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL

- navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion

- console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

- history: Proporciona acceso al historia de navegacion del navegador


===================================
    Objetos globales en Node.js
===================================

En Node.js, el entorno de ejecucion no tiene un objeto window como en los navegadores. En su lugar existen otros objetos globales diseñados para trabajar con servidores, archivos y otros aspectos del Sistema Operativo

- process: Proporciona información y control sobre el proceso de ejecución de Node.js

- __dirname y __filename: Variables globales que contienen la ruta al directorio actual y al archivo actual, respectivamente.

- setTimeout y setInterval: Igual que en los navegadores, estos métodos permiten programar la ejecución de funciones de manera
asincrónica.

- console: Igual que en el navegador, proporciona acceso a la consola para depuracion y mensajes
*/

// location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);


// navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);
console.log(navigator);


// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion
console.log(console);


// history: Proporciona acceso al historia de navegacion del navegador
console.log(history);




/* ===================================
    Almacenamiento de datos en JS
======================================

JavaScript proporciona varios tipos de estructuras para almacenar datos

- Variables simples:    valores unicos como numeros, strings
- Objetos:              para representar datos complejos con propiedades
- Arrays:               Para almacenar una serie de elementos, idealmente del mismo tipo
- Arrays de objetos:    Para manejar listas de elementos complejos que contienen multiples propiedades


Cuando usar arrays?
    - Para listas ordenadas de elementos individuales (lista nombres)


Cuando usar objetos?
    - Cuando deseamos representar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombre


Cuando usar arrays de objetos?
    - Cuando necesitamos almacenar multiples instancias de una entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados o agrupaciones
    - Si necesitamos aplicar metodos de arrays como map, filter, reduce, find, etc
    - Ejs: listado de usuarios, inventario de productos, historial de registros, etc



========================================================
    Iteracion en arrays, objetos y arrays de objetos
========================================================

Iteracion de arrays: Arrays como una lista ordenada de elementos accesibles por indice

Bucle for clasico

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    - Maximo control, podemos usar break y continue. Muy eficiente
    - Como desventajas, mas verboso (mas difil de leer)


forEach()

    array.forEach((elemento, índice, arrayOriginal) => {
        console.log(elemento, índice);
    });

    - Sintaxis limpia, no necesita contador
    - Como desventajas, es mas lento y no se puede romper el bucle (break, continue)


map()
    const nuevosValores = array.map(elemento => elemento * 2);

    - Transforma cada elemento
    - Retorna un nuevo array con los resultados


filter()
    const filtrados = array.filter(elemento => elemento > 10);

    - Selecciona los elementos que cumplan una condicion
    - Retorna un nuevo array con los elementos filtrados


reduce()
    const suma = array.reduce((total, elemento) => total + elemento, 0);

    - Reduce el array a un unico valor
    - Retorna el valor acumulado


find() y findIndex()
    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

    - Buscan el primer elemento que cumpla una condicion
    - Retorna el elemento -> find o indice -> findIndex (o devuelve undefined o -1 si no lo encuentra)



for...of

    for (const elemento of array) {
        console.log(elemento);
        if (elemento === "stop") {
            break;
        }
    }

    - Proporciona una sintaxis limpia, permite break y continue
    - No provee indice automatico



some() y every() 
    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumplen = array.every(elemento => elemento > 0);

    - Verifica si alguno o todos cumplen una condicion
    - Retorna un booleano
*/

////////////////////////
// Bucle for clasico //

// Sumando elementos
let numeros = [1, 2, 3, 4, 5];
let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(suma);

// Buscar elemento
const frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        console.log(frutas[i]); // banana
        break;
    }
}



// Filtrando objetos
// Lista ordenada de elementos del mismo tipo
const productos = [
    { id: 1, nombre: "laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "mouse", precio: 20, cantidad: 2, completada: false },
    { id: 3, nombre: "teclado", precio: 50, cantidad: 3, completada: true },
    { id: 4, nombre: "tarjeta grafica", precio: 200, cantidad: 2, completada: true },
    { id: 5, nombre: "monitor", precio: 100, cantidad: 4, completada: false },
    { id: 6, nombre: "pendrive", precio: 10, cantidad: 2, completada: false }
];

console.log(productos.length); // 6
console.log(productos[2]); // {id: 3, nombre: 'teclado', precio: 50}
console.log(productos[1].precio); // 20

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 100) {
        productosCaros.push(productos[i]);
    }
}

console.log(productosCaros);




////////////////////
// Bucle forEach //

// Imprimos elementos
let colores = ["rojo", "verde", "azul"];

colores.forEach(color => console.log(color));



// Modificar array externo
// let numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];

numeros.forEach(num => numerosDobles.push(num * 2));
console.log(numerosDobles);




// Actualizar propiedades
let estudiantes = [
    { nombre: "Gricel", nota: 10},
    { nombre: "Francisco", nota: 9},
    { nombre: "Mirko", nota: 8},
    { nombre: "Xabi", nota: 2},
    { nombre: "Leon", nota: 7},
    { nombre: "Miguel", nota: 3}
];

console.log(estudiantes);

/* Recordemos como se agregaban y eliminaban propiedades en un objeto

persona.preferencias = "Backend"; // Agregamos la propiedad preferencias y un valor

delete persona.ciudad; // Eliminamos la propiedad ciudad
*/

// Crearemos la propiedad aprobado para todos los alumnos que superen el 4
estudiantes.forEach(estud => {

    estud.aprobado = estud.nota >= 4;

    /* Otra manera de resolver la instruccion de arriba

    if (estud.nota >= 4) {
        estud.aprobado = true;
    } else {
        estud.aprobado = false;
    }
    */
});




//////////
// map //

// Crear un array de cuadrados
// let numeros = [1, 2, 3, 4, 5];

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);



// Convertimos a string
let edades = [23, 20, 33, 30, 25];
let edadesStr = edades.map(edad => `Tengo ${edad} años`); // "tengo " + edad + " años"
console.log(edadesStr);



/* Extraer propiedades

    let estudiantes = [
        { nombre: "Gricel", nota: 10},
        { nombre: "Francisco", nota: 9},
        { nombre: "Mirko", nota: 8},
        { nombre: "Xabi", nota: 2},
        { nombre: "Leon", nota: 7},
        { nombre: "Miguel", nota: 3}
    ];*/

    let estudNombre = estudiantes.map(estud => estud.nombre);
    console.log(estudNombre);


/////////////
// filter //

// filtrar numeros pares
let masNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = masNumeros.filter(num => num % 2 === 0);
console.log(numerosPares);

// filtrar palabras largas (>4)
let palabras = ["hola", "holiiita", "veciniiiiito", "chau"];

let palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);

let estudiantesNotables = estudiantes.filter(estudiante => estudiante.nota > 7);
console.log(estudiantesNotables);


/////////////
// reduce //

// Sumar elementos
let decenas = [10, 20, 30, 40, 50];

let sumaDecenas = decenas.reduce((total, num) => total + num, 0);
console.log(sumaDecenas);

// Sumar propiedades con reduce
const ventasRopa = [
    { producto: "Remera", cantidad: 3, precio: 25},
    { producto: "Pantalon", cantidad: 2, precio: 40},
    { producto: "Zapatos", cantidad: 1, precio: 80}
];

// Ejemplo en single line
let totalVentas = ventasRopa.reduce((total, item) => total + (item.cantidad * item.precio), 0);
let totalVendido = ventasRopa.reduce((total, item) => {
    return total + (item.cantidad * item.precio)
}, 0);

console.log(`El total de mi venta fue: ${totalVendido}`);


///////////
// find //

let numerosRandom = [5, 12, 8, 130, 44];

// Buscar el primer numero del array mayor a 10

// con find encontramos el primer elemento de array que cumple una condicion
let mayorDiez = numerosRandom.find(num => num > 10); 
console.log(mayorDiez);

// con findIndex buscamos el INDICE del primer numero mayor a 100
let mayorCien = numerosRandom.findIndex(num => num > 100);
console.log(mayorCien); // el numero 130 esta en la posicion 3 del array


// Buscamos objeto por propiedad
const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];

let usuarioActivo = usuariosWeb.find(user => user.activo);
console.log(usuarioActivo);


///////////////////
// some y every //

let listaNums = [1, 3, 5, 7, 8];

// Verificamos si hay numeros pares
let existePar = listaNums.some(num => num % 2 === 0);
console.log(`Existe algun par? ${existePar}`);

// Verificamos si son todos positivos
let todosPositivos =listaNums.every(num => num > 0);
console.log(`Todos positivos? ${todosPositivos}`);

// Verificamos si hay algun usuario admin
let existeAdmin = usuariosWeb.some(user => user.rol === "admin");
console.log(existeAdmin);


// Iteramos objetos
const empleados = [
    { nombre: "Jonathan", salario: 3000 },
    { nombre: "Mirko", salario: 3500 },
    { nombre: "Emiliano", salario: 4000 }
];

// Filtrar el empoleado que gane mas de 3500
for(let empleado of empleados) {
    if(empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana alta guita, gana ${4000}`);
    }
}
```

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