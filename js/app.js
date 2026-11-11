// 1. Buscar elementos del DOM.
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#boton");
const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const bienvenida = document.querySelector("#bienvenida");

// 2. Escuchar el evento click del botón.
boton.addEventListener("click", function () {
    // 3. Cambiar el contenido del mensaje.
    mensaje.textContent = "¡Hola, mundo!";
});

// 4. Escuchar el envío del formulario.
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que la página se recargue

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        bienvenida.textContent = "Por favor, ingrese su nombre.";
    } else {
        bienvenida.textContent = "Bienvenido a la clase, " + nombre + ".";
        formulario.reset(); // limpia el campo
    }
});