class Disco {
    constructor(nombre = "", grupo = "", anio = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anio = anio;
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
        return `Disco: ${this.nombre} | Grupo: ${this.grupo} | Año: ${this.anio} | Tipo: ${this.tipo} | Estantería: ${this.localizacion} | Estado: ${estado}`;
    }
}

let coleccionDiscos = [];

function objetos() {
    let discoPrueba = new Disco("Thriller", "Michael Jackson", 1982, "pop", 5);
    
    let htmlOutput = "<h3>Ejemplo de Objeto Disco</h3>";
    htmlOutput += "<p>" + discoPrueba.mostrarInfo() + "</p>";
    
    document.getElementById('resultado2').innerHTML = htmlOutput;
}