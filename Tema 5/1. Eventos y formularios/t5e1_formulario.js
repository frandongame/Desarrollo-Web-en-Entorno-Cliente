function Formulario_discos() {
    class Disco {
    constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    cambiarEstanteria(nuevaEstanteria) {
        this.localizacion = newEstanteria;
    }

    cambiarPrestado(nuevoEstado) {
        this.prestado = Boolean(nuevoEstado);
    }

    mostrarInfo() {
        let estado = this.prestado ? "Prestado" : "Disponible";
        return `Disco: ${this.nombre} | Grupo: ${this.grupo} | Año: ${this.año} | Tipo: ${this.tipo} | Estantería: ${this.localizacion} | Estado: ${estado}`;
    }
}


}

let coleccionDiscos = [];

function guardarDisco() {
    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("grupo").value;
    let año = document.getElementById("año").value;
    let tipo = document.getElementById("tipo").value;
    let localizacion = document.getElementById("localizacion").value;
    let esPrestado = document.getElementById("prestado").checked;

    let nuevoDisco = new Disco(nombre, grupo, año, tipo, localizacion);

    if (esPrestado) {
        nuevoDisco.cambiarPrestado(true);
    }

    coleccionDiscos.push(nuevoDisco);
}

document.getElementById("btnGuardar").addEventListener("click", guardarDisco);