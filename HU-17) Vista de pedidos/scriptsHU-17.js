const buscarClienteBtn = document.getElementById("buscarCliente");
const inputBuscar = document.getElementById("inputBuscar");

buscarClienteBtn.addEventListener("click", function() {
    buscarClienteBtn.style.display = "none";
    inputBuscar.style.display = "block";
    inputBuscar.focus();
});

inputBuscar.addEventListener("blur", function() {
    buscarClienteBtn.style.display = "block";
    inputBuscar.style.display = "none";
});
