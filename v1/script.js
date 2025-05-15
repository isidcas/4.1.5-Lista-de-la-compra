function añadirElemento() {
    let input = document.getElementById("nuevoElemento");
    let lista = document.getElementById("lista");

    // Verifica si el usuario ha escrito algo (elimina espacios en blanco con .trim())
    if (input.value.trim()) {
        
        let nuevoElemento = document.createElement("li");// Crea un nuevo elemento <li> 
        nuevoElemento.textContent = input.value;        // Asigna el texto que el usuario escribió en el input al nuevo <li>
        lista.appendChild(nuevoElemento);        // Agrega el nuevo elemento a la lista en la página
        input.value = "";        // Vacía el campo de entrada para que el usuario pueda escribir otro producto

    }
}

// Función para eliminar el primer elemento de la lista
function eliminarPrimerElemento() {
    let lista = document.getElementById("lista");    // Obtiene la lista de elementos en la página
    if (lista.firstChild) {    // Verifica si hay al menos un elemento en la lista
        lista.removeChild(lista.firstChild);   // Elimina el primer elemento de la lista

    }
}

// Función para borrar un elemento de la lista según la posición ingresada por el usuario
function borrarElemento() {
    let lista = document.getElementById("lista"); // Obtiene la lista de productos
    let posicion = Number(document.getElementById("posicionElemento").value) - 1; // Obtiene la posición ingresada y ajusta para que empiece desde 1

    // Verifica que la posición ingresada sea válida (dentro del rango de la lista)
    if (posicion >= 0 && posicion < lista.children.length) {
        lista.removeChild(lista.children[posicion]); // Elimina el elemento en la posición indicada
        actualizarMensaje(`Elemento en posición ${posicion + 1} eliminado.`); // Muestra un mensaje indicando qué elemento fue eliminado
    } else {
        actualizarMensaje("Posición inválida."); // Mensaje de error si la posición no es válida
    }
}

// Función para actualizar el mensaje en pantalla con la acción realizada
function actualizarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto; // Muestra el texto de actualización en el párrafo de mensajes
}
