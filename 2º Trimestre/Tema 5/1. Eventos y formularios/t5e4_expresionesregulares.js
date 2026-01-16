window.onload = function() {
    
    var formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function(evento) {
        
        evento.preventDefault();

        var todoCorrecto = true;


        var inputFecha = document.getElementById("fecha");
        var patronFecha = /^\d{2}\/\d{2}\/\d{4}$/;

        if (patronFecha.test(inputFecha.value) == false) {
            marcarError("fecha", true);
            todoCorrecto = false;
        } else {
            marcarError("fecha", false);
        }


        var inputCocinero = document.getElementById("cocinero");
        var patronCocinero = /^[A-Z]{2}[^A-Za-z0-9]\d{4}$/;

        if (patronCocinero.test(inputCocinero.value) == false) {
            marcarError("cocinero", true);
            todoCorrecto = false;
        } else {
            marcarError("cocinero", false);
        }


        var inputDest = document.getElementById("destinatario");
        var patronDest = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;

        if (patronDest.test(inputDest.value) == false) {
            marcarError("destinatario", true);
            todoCorrecto = false;
        } else {
            marcarError("destinatario", false);
        }


        var inputGramos = document.getElementById("gramos");
        var valorGramos = parseFloat(inputGramos.value);

        if (isNaN(valorGramos) || valorGramos < 100 || valorGramos > 5000) {
            marcarError("gramos", true);
            todoCorrecto = false;
        } else {
            marcarError("gramos", false);
        }


        var inputComp = document.getElementById("composicion");
        var patronComp = /^\d+g([A-Za-z]{1,2}\d?){2}$/;

        if (patronComp.test(inputComp.value) == false) {
            marcarError("composicion", true);
            todoCorrecto = false;
        } else {
            marcarError("composicion", false);
        }


        var cuentaEsValida = validarCuentaAmericana();
        
        if (cuentaEsValida == false) {
            todoCorrecto = false;
        }


        if (todoCorrecto == true) {
            alert("¡Validado correctamente!");
        }

    });
};


function marcarError(idInput, hayError) {
    var input = document.getElementById(idInput);
    var etiqueta = document.querySelector('label[for="' + idInput + '"]');

    if (hayError == true) {
        input.classList.add("error-input");
        if (etiqueta) {
            etiqueta.classList.add("error-label");
        }
    } else {
        input.classList.remove("error-input");
        if (etiqueta) {
            etiqueta.classList.remove("error-label");
        }
    }
}


function validarCuentaAmericana() {
    var inputCuenta = document.getElementById("cuenta");
    var inputResultado = document.getElementById("cuentaCorrecta");
    var texto = inputCuenta.value;

    var patronEstructura = /^[A-Z]{2}\d{2}-\d{12}-\d{2}$/;
    
    if (patronEstructura.test(texto) == false) {
        marcarError("cuenta", true);
        return false;
    }


    var partes = texto.split("-");
    
    var parteLetras = partes[0];
    var parteNumeros = partes[1];
    var parteControl = partes[2];

    var letra1 = parteLetras.charAt(0);
    var letra2 = parteLetras.charAt(1);
    

    var valorLetra1 = letra1.charCodeAt(0) - 64;
    var valorLetra2 = letra2.charCodeAt(0) - 64;
    var sumaLetras = valorLetra1 + valorLetra2;

    var numeroUsuario = parseInt(parteLetras.substring(2));

    if (sumaLetras != numeroUsuario) {
        marcarError("cuenta", true);
        return false;
    }

    var sumaPrimeros = 0;
    for (var i = 0; i < 6; i++) {
        var numero = parseInt(parteNumeros.charAt(i));
        sumaPrimeros = sumaPrimeros + numero;
    }
    var controlCalculado1 = Math.floor(sumaPrimeros / 6);


    var sumaUltimos = 0;
    for (var i = 6; i < 12; i++) {
        var numero = parseInt(parteNumeros.charAt(i));
        sumaUltimos = sumaUltimos + numero;
    }
    var controlCalculado2 = Math.floor(sumaUltimos / 6);


    var controlUsuario1 = parseInt(parteControl.charAt(0));
    var controlUsuario2 = parseInt(parteControl.charAt(1));

    if (controlUsuario1 != controlCalculado1 || controlUsuario2 != controlCalculado2) {
        marcarError("cuenta", true);
        return false;
    }

    marcarError("cuenta", false);
    
    inputResultado.value = texto.replace(/-/g, "");
    return true;
}