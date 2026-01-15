function arrays_continuacion() {
    let opcion = prompt(
        "Elige una opción:\n" +
        "1. Mostrar número de países\n" +
        "2. Mostrar listado de países\n" +
        "3. Mostrar intervalo\n" +
        "4. Añadir un país\n" +
        "5. Borrar un país\n" +
        "6. Consultar un país"
    );

    let mensaje = "";
    const contenedor = document.getElementById('resultado2');


    switch (opcion) {
        case "1":
            mensaje = mostrar_numero_elementos(paises);
            break;

        case "2":
            let tipo = prompt("¿Cómo quieres verlos? (1: Normal, 2: Revés, 3: Ordenados)");
            if (tipo === "1") mensaje = mostrar_elementos(paises);
            else if (tipo === "2") mensaje = elementos_inverso(paises);
            else if (tipo === "3") mensaje = elementos_ordenados(paises);
            else mensaje = "Opción de listado no válida.";
            break;

        case "3":
            let intervalo = prompt("Introduce el intervalo (ej: 0-2):");
            if (intervalo.includes("-")) {
                let partes = intervalo.split("-");
                let inicio = parseInt(partes[0]);
                let fin = parseInt(partes[1]);
                mensaje = elementos_intervalo(paises, inicio, fin);
            } else {
                mensaje = "Formato incorrecto. Debe ser inicio-fin.";
            }
            break;

        case "4":
            let nuevoPais = prompt("Introduce el nombre del país:");
            let dondeAnadir = prompt("¿Dónde añadir? (1: Principio, 2: Final)");
            if (dondeAnadir === "1") mensaje = anadir_principio(paises, nuevoPais);
            else if (dondeAnadir === "2") mensaje = anadir_final(paises, nuevoPais);
            else mensaje = "Opción no válida.";
            break;

        case "5":
            let dondeBorrar = prompt("¿Dónde borrar? (1: Principio, 2: Final)");
            if (dondeBorrar === "1") mensaje = borrar_principio(paises);
            else if (dondeBorrar === "2") mensaje = borrar_final(paises);
            else mensaje = "Opción no válida.";
            break;

        case "6":
            let tipoConsulta = prompt("¿Cómo consultar? (1: Por posición, 2: Por nombre)");
            if (tipoConsulta === "1") {
                let pos = parseInt(prompt("Introduce la posición (número):"));
                mensaje = elemento_por_posicion(paises, pos);
            } else if (tipoConsulta === "2") {
                let nom = prompt("Introduce el nombre:");
                mensaje = posicion_por_elemento(paises, nom);
            } else {
                mensaje = "Opción no válida.";
            }
            break;

        default:
            mensaje = "Operación cancelada o no válida.";
    }

    let htmlOutput = "<h3>Resultado de la operación:</h3>";
    htmlOutput += "<p style='font-size: 1.2em; color: blue;'>" + mensaje + "</p>";
    htmlOutput += "<hr><h4>Lista actual de países:</h4>";
    htmlOutput += "<ul>";
    paises.forEach(pais => {
        htmlOutput += "<li>" + pais + "</li>";
    });
    htmlOutput += "</ul>";

    contenedor.innerHTML = htmlOutput;
}