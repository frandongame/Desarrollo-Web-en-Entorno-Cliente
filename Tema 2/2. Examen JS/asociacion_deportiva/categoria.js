function determinarCategoria() {
    let añoNacimiento;
    const añoActual = new Date().getFullYear();

    // Validación del año de nacimiento
    
    while (true) {
        añoNacimiento = parseInt(prompt("Introduce tu año de nacimiento (ej: 2005):"));
        if (!isNaN(añoNacimiento) && añoNacimiento > 1920 && añoNacimiento <= añoActual) {
            break;
        }
        alert(`Valor incorrecto. Introduce un año válido entre 1920 y ${añoActual}.`);
    }

    // Cálculo de edad

    const edad = añoActual - añoNacimiento;

    // Definición de categorías (basado en edad que se cumple ese año)

    const categorias = [
        { nombre: "Micro / Chupetín", min: 4, max: 5 },
        { nombre: "Pre-Benjamín", min: 6, max: 7 },
        { nombre: "Benjamín", min: 8, max: 9 },
        { nombre: "Alevín", min: 10, max: 11 },
        { nombre: "Infantil", min: 12, max: 13 },
        { nombre: "Cadete", min: 14, max: 15 },
        { nombre: "Juvenil", min: 16, max: 18 },
        { nombre: "Senior", min: 19, max: 99 }
    ];

    let categoriaUsuario = "No definida";
    if (edad < 4) {
        categoriaUsuario = "Demasiado joven (menor de 4 años)";
    }

    // categoría del usuario

    for (const cat of categorias) {
        if (edad >= cat.min && edad <= cat.max) {
            categoriaUsuario = cat.nombre;
            break;
        }
    }

    // 5. Crear el HTML de salida

    let htmlOutput = `<h3>Tu categoría para ${añoActual} (edad: ${edad} años) es:</h3>`;
    htmlOutput += `<h2 style="text-align: center;">${categoriaUsuario}</h2>`;
    htmlOutput += "<h4>Listado de categorías:</h4><ul>";

    // Recorremos la lista y marcamos la que coincide

    categorias.forEach(cat => {
        if (cat.nombre === categoriaUsuario) {
            htmlOutput += `<li class="highlight">${cat.nombre} (Edades ${cat.min}-${cat.max})</li>`;
        } else {
            htmlOutput += `<li>${cat.nombre} (Edades ${cat.min}-${cat.max})</li>`;
        }
    });

    htmlOutput += "</ul>";

    // 6. Escribir el HTML en el cuerpo de la página

    document.getElementById('resultado').innerHTML = htmlOutput;
}