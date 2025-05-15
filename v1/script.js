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
