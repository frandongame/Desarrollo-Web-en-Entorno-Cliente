function objetos_continuacion() {
    let opcion = prompt(
        "GESTIÓN DE DISCOS\n" +
        "1. Mostrar número de discos\n" +
        "2. Mostrar listado de discos\n" +
        "3. Mostrar intervalo de discos\n" +
        "4. Añadir un disco\n" +
        "5. Borrar un disco\n" +
        "6. Consultar un disco"
    );

    let mensaje = "";
    const contenedor = document.getElementById('resultado2');

    switch (opcion) {
        case "1":
            mensaje = "Tienes " + coleccionDiscos.length + " discos en la colección.";
            break;

        case "2":
            let orden = prompt("¿Orden? (1: Normal, 2: Revés, 3: Alfabético por nombre)");
            let listaTemp = [...coleccionDiscos];

            if (orden === "2") listaTemp.reverse();
            if (orden === "3") listaTemp.sort((a, b) => a.nombre.localeCompare(b.nombre));

            mensaje = "<ul>";
            listaTemp.forEach(d => mensaje += "<li>" + d.mostrarInfo() + "</li>");
            mensaje += "</ul>";
            break;

        case "3":
            let rango = prompt("Introduce intervalo inicio-fin (ej: 0-1):");
            if (rango.includes("-")) {
                let [ini, fin] = rango.split("-");
                let trozo = coleccionDiscos.slice(ini, parseInt(fin) + 1);
                mensaje = "<ul>";
                trozo.forEach(d => mensaje += "<li>" + d.mostrarInfo() + "</li>");
                mensaje += "</ul>";
            } else {
                mensaje = "Formato incorrecto.";
            }
            break;

        case "4":
            let nombre = prompt("Nombre del disco:");
            let grupo = prompt("Grupo/Cantante:");
            let anio = prompt("Año:");
            let tipo = prompt("Tipo (rock, pop, punk, indie):");
            let loc = prompt("Número de estantería:");
            
            let nuevoDisco = new Disco(nombre, grupo, anio, tipo, loc);
            
            let donde = prompt("¿Añadir al (1) Principio o (2) Final?");
            if (donde === "1") coleccionDiscos.unshift(nuevoDisco);
            else coleccionDiscos.push(nuevoDisco);
            
            mensaje = "Disco añadido correctamente.";
            break;

        case "5":
            if (coleccionDiscos.length === 0) {
                mensaje = "No hay discos para borrar.";
            } else {
                let sitio = prompt("¿Borrar del (1) Principio o (2) Final?");
                let borrado;
                if (sitio === "1") borrado = coleccionDiscos.shift();
                else borrado = coleccionDiscos.pop();
                
                mensaje = "Se ha eliminado: " + borrado.nombre;
            }
            break;

        case "6":
            let modo = prompt("(1) Por posición o (2) Por nombre del disco");
            if (modo === "1") {
                let idx = parseInt(prompt("Posición:"));
                if (coleccionDiscos[idx]) mensaje = coleccionDiscos[idx].mostrarInfo();
                else mensaje = "Posición no existe.";
            } else {
                let busca = prompt("Nombre del disco:");
                let encontrado = coleccionDiscos.find(d => d.nombre.toLowerCase() === busca.toLowerCase());
                if (encontrado) mensaje = encontrado.mostrarInfo();
                else mensaje = "No encontrado.";
            }
            break;

        default:
            mensaje = "Cancelado.";
    }

    let htmlOutput = "<h3>Gestión de Discos</h3>";
    htmlOutput += "<div>" + mensaje + "</div>";
    
    htmlOutput += "<hr><h4>Colección actual (" + coleccionDiscos.length + "):</h4>";
    htmlOutput += "<ol>";
    coleccionDiscos.forEach(disco => {
        htmlOutput += "<li>" + disco.nombre + " (" + disco.grupo + ")</li>";
    });
    htmlOutput += "</ol>";

    contenedor.innerHTML = htmlOutput;
}