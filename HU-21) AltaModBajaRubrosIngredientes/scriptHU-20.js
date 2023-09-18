// Obtener elementos
const ventanaEmergente = document.getElementById("ventanaEmergente");
const nuevoButton = document.querySelector(".contenedor-botones-botonNuevo");
const editarIcon = document.querySelectorAll(".editar-icon");
const cancelButton = document.getElementById("cancelar");
const guardarButton = document.getElementById("guardar");

//Mostrar ventana emergente
function mostrarventanaEmergente() {
    ventanaEmergente.style.display = "block";
}

//Ocultar ventana emergente
function ocultarventanaEmergente() {
    ventanaEmergente.style.display = "none";
}

// Evento botón "Nuevo"
nuevoButton.addEventListener("click", mostrarventanaEmergente);

// Evento ícono "Editar"
editarIcon.forEach((icon) => {
    icon.addEventListener("click", mostrarventanaEmergente);
});

// Evento botón "Cancelar"
cancelButton.addEventListener("click", ocultarventanaEmergente);

// Evento botón "Guardar"

