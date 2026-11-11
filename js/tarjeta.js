// 1. Buscar elementos del DOM.
const tarjeta = document.querySelector("#tarjeta");
const btnAzul = document.querySelector("#btnAzul");
const btnVerde = document.querySelector("#btnVerde");
const btnRojo = document.querySelector("#btnRojo");
const btnRestablecer = document.querySelector("#btnRestablecer");

// 2. Cambiar el color al presionar cada botón.
btnAzul.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "lightblue";
});

btnVerde.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "lightgreen";
});

btnRojo.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "lightcoral";
});

// 3. Restablecer el color original.
btnRestablecer.addEventListener("click", function () {
    tarjeta.style.backgroundColor = ""; // vuelve al color del CSS
});