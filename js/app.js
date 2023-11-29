const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");
const error = document.querySelector("[data-error-message]");

const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validarCampo = {
    nombre: false
}

btn.addEventListener("click", () => {
    validarCorreo();
})

input.addEventListener("keyup", () => {
    validarCorreo();
})

input.addEventListener("blur", () => {
    validarCorreo();
})

const validarCorreo = () => {
    if(expresionCorreo.test(input.value)) {
        error.classList.remove("error-message-active");
        input.classList.remove("input-active");
        validarCampo.nombre = true;
    } else {
        error.classList.add("error-message-active");
        input.classList.add("input-active");
        validarCampo.nombre = false;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validarCampo.nombre) {
        form.reset();
    }
})