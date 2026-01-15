//Delcaro las variables

var edad = parseInt(prompt("Introduce tu edad:"));

//Estructura switch

switch (true) {
    case 1: if (isNaN(edad) < 0) {
        alert("Error: La edad no puede ser un número negativo.");
        break;
    }
    case 2: if (isNaN(edad) <= 12) {
        alert("Niño");
        break;
    }
    case 3: if (isNaN(edad) <= 26) {
        alert("Joven");
        break;
    }
    case 4: if (isNaN(edad) <= 60) {
        alert("Adulto");
        break;
    }
}

function esNaN(valor) {
    return valor !== valor;
}
alertisNaN(edad);