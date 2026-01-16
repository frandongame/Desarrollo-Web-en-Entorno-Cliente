function calcularFCM() {
    let edad;
    let sexo;

    // Validación de entrada de EDAD

    while (true) {
        edad = parseInt(prompt("Introduce tu edad:"));
        if (!isNaN(edad) && edad > 0 && edad < 120) {
            break; 
        }
        alert("Valor de edad incorrecto. Introduce un número válido.");
    }

    // Validación de entrada de SEXO

    while (true) {
        sexo = prompt("Introduce tu sexo (H para hombre, M para mujer):");
        if (sexo === 'H' || sexo === 'M') {
            break; 
        }
        alert("Valor de sexo incorrecto. Introduce 'H' o 'M'.");
    }

    // Cálculo de FCM (Usamos fórmulas más precisas para deportistas)

    let fcm;
    if (sexo === 'H') {
        fcm = 209 - (0.7 * edad);
    } else { // Para mujeres
        fcm = 214 - (0.8 * edad);
    }

    // Cálculo de Zonas

    const zonaRecuperacion = `${(fcm * 0.60)} - ${(fcm * 0.70)} ppm`;
    const zonaAerobica = `${(fcm * 0.70)} - ${(fcm * 0.80)} ppm`;
    const zonaAnaerobica = `${(fcm * 0.80)} - ${(fcm * 0.90)} ppm`;
    const zonaLineaRoja = `${(fcm * 0.90)} - ${fcm} ppm`;

    // Crear el HTML de salida

    let htmlOutput = `<h2>Tu Frecuencia Cardíaca Máxima (FCM) estimada es:</h2>`;
    htmlOutput += `<h1 style="text-align: center;">${fcm} ppm</h1>`;
    htmlOutput += "<h4>Zonas de entrenamiento:</h4>";
    htmlOutput += "<ul>";
    htmlOutput += `<li><strong>Zona de recuperación (60%-70%):</strong> ${zonaRecuperacion}</li>`;
    htmlOutput += `<li><strong>Zona aeróbica (70%-80%):</strong> ${zonaAerobica}</li>`;
    htmlOutput += `<li><strong>Zona anaeróbica (80%-90%):</strong> ${zonaAnaerobica}</li>`;
    htmlOutput += `<li><strong>Línea roja (90%-100%):</strong> ${zonaLineaRoja}</li>`;
    htmlOutput += "</ul>";

    // Escribir el HTML en el cuerpo de la página

    document.getElementById('resultado').innerHTML = htmlOutput;
}