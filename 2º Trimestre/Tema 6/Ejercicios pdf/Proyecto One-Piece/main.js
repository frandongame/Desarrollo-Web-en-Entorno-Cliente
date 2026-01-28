function iniciar() {
    const divTop = document.getElementById("controles-top");

    const btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar personaje";
    btnGenerar.addEventListener("click", generarPersonaje);
    divTop.appendChild(btnGenerar);

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar personaje";
    btnBorrar.style.marginLeft = "10px";
    btnBorrar.addEventListener("click", borrarPersonaje);
    divTop.appendChild(btnBorrar);

    const divBottom = document.getElementById("controles-bottom");
    const nombres = ["Sanji", "Zoro", "Nami", "Luffy"];

    nombres.forEach(nombre => {
        const btn = document.createElement("button");
        btn.textContent = "No " + nombre;
        btn.style.margin = "5px";
        
        btn.addEventListener("click", function() {
            contarPersonajes(nombre.toLowerCase());
        });
        
        divBottom.appendChild(btn);
    });
}

function generarPersonaje() {
    let opcion = prompt("Elija el nombre del personaje:\n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy");

    let rutaImagen = "";
    let clasePersonaje = "";

    switch (opcion) {
        case "1":
            rutaImagen = "img_onepeace/sanji.png";
            clasePersonaje = "sanji";
            break;
        case "2":
            rutaImagen = "img_onepeace/zoro.png";
            clasePersonaje = "zoro";
            break;
        case "3":
            rutaImagen = "img_onepeace/nami.png";
            clasePersonaje = "nami";
            break;
        case "4":
            rutaImagen = "img_onepeace/luffy.png";
            clasePersonaje = "luffy";
            break;
        default:
            alert("Opción no válida. Introduce un número del 1 al 4.");
            return;
    }

    const img = document.createElement("img");
    img.src = rutaImagen;
    img.className = "ficha-personaje " + clasePersonaje;

    document.getElementById("galeria-imagenes").appendChild(img);
}

function borrarPersonaje() {
    const galeria = document.getElementById("galeria-imagenes");
    if (galeria.lastElementChild) {
        galeria.removeChild(galeria.lastElementChild);
    } else {
        alert("No hay personajes para borrar.");
    }
}

function contarPersonajes(personaje) {
    const total = document.getElementsByClassName(personaje).length;
    alert("Número de imágenes de " + personaje + ": " + total);
}

iniciar();