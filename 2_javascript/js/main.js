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


// TO DO: Explicar asincronia en JavaScript
