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


// TO DO, continuar desde 2.2 Modificar contenido y atributos