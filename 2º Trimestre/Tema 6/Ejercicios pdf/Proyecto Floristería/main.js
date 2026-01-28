function iniciar() {
    const controlesSup = document.getElementById("controles-superiores");

    const btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar planta";
    btnGenerar.className = "btn-estilo";
    btnGenerar.addEventListener("click", generarPlanta);
    controlesSup.appendChild(btnGenerar);

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar fila";
    btnBorrar.style.marginLeft = "10px"; 
    btnBorrar.addEventListener("click", borrarFila);
    controlesSup.appendChild(btnBorrar);

    const controlesInf = document.getElementById("controles-inferiores");

    const btnContar = document.createElement("button");
    btnContar.textContent = "Mostrar número de filas";
    btnContar.addEventListener("click", contarFilas);
    controlesInf.appendChild(btnContar);
}

function generarPlanta() {
    let nombre = prompt("Nombre de la planta:");
    if (nombre === null) return;

    let ubicacion = prompt("Ubicación (Interior/Exterior):");
    let ejemplares = prompt("Número de ejemplares:");
    let flor = prompt("¿Tiene flor? (Sí/No):");

    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    const nuevaFila = document.createElement("tr");

    const datosPlanta = [nombre, ubicacion, ejemplares, flor];

    datosPlanta.forEach(dato => {
        const celda = document.createElement("td");
        celda.textContent = dato === "" ? "-" : dato;
        nuevaFila.appendChild(celda);
    });

    cuerpoTabla.appendChild(nuevaFila);
}

function borrarFila() {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    
    const ultimaFila = cuerpoTabla.lastElementChild;

    if (ultimaFila) {
        cuerpoTabla.removeChild(ultimaFila);
    } else {
        alert("¡La tabla ya está vacía!");
    }
}

function contarFilas() {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    
    const numeroFilas = cuerpoTabla.childElementCount; 
    
    alert(`Actualmente hay ${numeroFilas} plantas en la tabla.`);
}

iniciar();