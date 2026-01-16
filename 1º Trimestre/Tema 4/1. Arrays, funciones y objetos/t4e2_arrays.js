let paises = ["España", "Alemania", "Bélgica", "Bulgaria", "Francia"];

function mostrar_numero_elementos(arr) {
    return "Hay " + arr.length + " países en total.";
}

function mostrar_elementos(arr) {
    return "Los países son: " + arr.join(", ");
}

function elementos_inverso(arr) {
    const inverso = [...arr].reverse();
    return "Países orden inverso: " + inverso.join(", ");
}

function elementos_ordenados(arr) {
    const ordenados = [...arr].sort();
    return "Países orden alfabético: " + ordenados.join(", ");
}

function anadir_principio(arr, elemento) {
    arr.unshift(elemento);
    return "Añadido " + elemento + " al principio.";
}

function anadir_final(arr, elemento) {
    arr.push(elemento);
    return "Añadido " + elemento + " al final.";
}

function borrar_principio(arr) {
    if (arr.length === 0) return "El array está vacío.";
    let borrado = arr.shift();
    return "Se ha borrado: " + borrado;
}

function borrar_final(arr) {
    if (arr.length === 0) return "El array está vacío.";
    let borrado = arr.pop();
    return "Se ha borrado: " + borrado;
}

function elemento_por_posicion(arr, pos) {
    if (pos >= 0 && pos < arr.length) {
        return "En la posición " + pos + " está: " + arr[pos];
    } else {
        return "Posición incorrecta.";
    }
}

function posicion_por_elemento(arr, nombre) {
    let indice = arr.indexOf(nombre);
    if (indice !== -1) {
        return "El país " + nombre + " está en la posición: " + indice;
    } else {
        return "El país no se encuentra en la lista.";
    }
}

function elementos_intervalo(arr, inicio, fin) {
    if (inicio >= 0 && fin < arr.length && inicio <= fin) {
        let trozo = arr.slice(inicio, parseInt(fin) + 1);
        return "Intervalo (" + inicio + "-" + fin + "): " + trozo.join(", ");
    }
    return "Intervalo incorrecto.";
}


function arrays() {
    let htmlOutput = "<h3>Estado actual del Array:</h3>";
    htmlOutput += "<p>" + paises.join(", ") + "</p>";
    htmlOutput += "<hr>";    

    htmlOutput += "<p>" + mostrar_numero_elementos(paises) + "</p>";
    htmlOutput += "<p>" + elementos_ordenados(paises) + "</p>";

    document.getElementById('resultado2').innerHTML = htmlOutput;
}