window.onload = function() {
    const formulario = document.getElementById("formularioDisco");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        let esValido = true;

        const inputNombre = document.getElementById("nombre");
        const inputGrupo = document.getElementById("grupo");
        const inputAño = document.getElementById("año");
        const inputLocalizacion = document.getElementById("localizacion");


        if (!campo20(inputNombre)) {
            esValido = false;
        }

        if (!campo20(inputGrupo)) {
            esValido = false;
        }

        if (!validarAño(inputAño)) {
            esValido = false;
        }


        if (!validarLocalizacion(inputLocalizacion)) {
            esValido = false;
        }


        if (esValido) {

            alert("¡Formulario validado correctamente! Enviando datos...");
            formulario.submit();
        }
    });
};


function campo20(input) {
    const valor = input.value.trim();
    
    if (valor === "" || valor.length > 20) {
        cambiarEstilo(input, true);
        return false;
    } else {
        cambiarEstilo(input, false);
        return true;
    }
}


function validarAño(input) {
    const valor = input.value.trim();
    const regexAño = /^\d{4}$/;

    if (!regexAño.test(valor)) {
        cambiarEstilo(input, true);
        return false;
    } else {
        cambiarEstilo(input, false);
        return true;
    }
}


function validarLocalizacion(input) {
    const valor = input.value.trim();

    if (valor === "") {
        cambiarEstilo(input, false);
        return true;
    }

    if (isNaN(valor)) {
        cambiarEstilo(input, true);
        return false;
    } else {
        cambiarEstilo(input, false);
        return true;
    }
}


function cambiarEstilo(input, hayError) {
    const label = document.querySelector(`label[for="${input.id}"]`);

    if (hayError) {
        input.classList.add("error-input");
        if (label) label.classList.add("error-label");
    } else {
        input.classList.remove("error-input");
        if (label) label.classList.remove("error-label");
    }
}