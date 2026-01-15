function norm (s) {
    return s
    .tolowerCase()
    .trim()
    .normalize("NFD")
}

//declaro la variable
var respuesta = "Adolfo Suárez";
//bucle while para pedir la respuesta hasta que sea correcta
while (respuesta !== "Adolfo Suárez") {
    respuesta = prompt("¿Cuál fue el primer presidente de la democracia?");
}

if (respuesta !== "Adolfo Suárez") {
    alert("ERROR. inténtelo de nuevo, ¿?Cuál fue el primer presidente de la democracia?");
}
else if (respuesta !== "Adolfo") {
    alert("ERROR. Te falta el apellido, ¿?Cuál fue el primer presidente de la democracia?");
}
else if (respuesta !== "Suárez") {
    alert("ERROR. Te falta el nombre, ¿?Cuál fue el primer presidente de la democracia?");
}