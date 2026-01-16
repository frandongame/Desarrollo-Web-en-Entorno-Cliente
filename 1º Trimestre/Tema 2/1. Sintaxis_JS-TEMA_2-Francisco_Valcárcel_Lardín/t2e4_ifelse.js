//Declaro las variables

var edad = parseInt(prompt("Introduce tu edad:"));

//Estructura if else

if (isNaN(edad) < 0) {
    alert("Error: La edad no puede ser un número negativo.");
}
else if (isNaN(edad) <= 12) {
    alert("Niño");
}
else if (isNaN(edad) <= 26) {
    alert("Joven");
}
else if (isNaN(edad) <= 60) {
    alert("Adulto");
}
else {
    alert("Jubilado");
}

function esNaN(valor) {
    return valor !== valor;
}

alertisNaN(edad);