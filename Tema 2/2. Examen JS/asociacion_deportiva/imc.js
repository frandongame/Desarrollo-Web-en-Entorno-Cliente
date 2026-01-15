function calcularIMC() {
    let peso;
    let alturaCm;

    // Validación de entrada de PESO

    while (true) {
        peso = parseFloat(prompt("Introduce tu peso en kg (ej: 70.5):"));
        if (!isNaN(peso) && peso > 0) {
            break;
        }
        alert("Valor de peso incorrecto. Introduce un número positivo.");
    }

    // Validación de entrada de ALTURA

    while (true) {
        alturaCm = parseFloat(prompt("Introduce tu altura en centímetros (ej: 175):"));
        if (!isNaN(alturaCm) && alturaCm > 0) {
            break;
        }
        alert("Valor de altura incorrecto. Introduce un número positivo.");
    }

    // Cálculos

    const alturaMetros = alturaCm / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    const imcRedondeado = imc.toFixed(2);

    // Definir la clasificación

    let clasificacion = "";
    if (imc < 16.00) clasificacion = "Infrapeso (delgadez severa)";
    else if (imc <= 16.99) clasificacion = "Infrapeso (delgadez moderada)";
    else if (imc <= 18.49) clasificacion = "Infrapeso (delgadez aceptable)";
    else if (imc <= 24.99) clasificacion = "Peso normal";
    else if (imc <= 29.99) clasificacion = "Sobrepeso";
    else if (imc <= 34.99) clasificacion = "Obeso (Tipo I)";
    else if (imc <= 40.00) clasificacion = "Obeso (Tipo II)";
    else clasificacion = "Obeso (Tipo III)";

    // Crear el HTML de salida
    
    // array con la escala para construir la lista fácilmente

    const escala = [
        { rango: "< 16.00", desc: "Infrapeso (delgadez severa)" },
        { rango: "16.00 – 16.99", desc: "Infrapeso (delgadez moderada)" },
        { rango: "17.00 - 18.49", desc: "Infrapeso (delgadez aceptable)" },
        { rango: "18.50 - 24.99", desc: "Peso normal" },
        { rango: "25.00 - 29.99", desc: "Sobrepeso" },
        { rango: "30.00 - 34.99", desc: "Obeso (Tipo I)" },
        { rango: "35.00 - 40.00", desc: "Obeso (Tipo II)" },
        { rango: "> 40.00", desc: "Obeso (Tipo III)" }
    ];

    let htmlOutput = `<h3>Resultado de tu IMC: ${imcRedondeado}</h3>`;
    htmlOutput += `<p>Tu clasificación es: <strong>${clasificacion}</strong></p>`;
    htmlOutput += "<h4>Escala de clasificación de la OMS:</h4><ul>";

    // Recorremos la escala y marcamos la que coincide

    escala.forEach(item => {
        if (item.desc === clasificacion) {
            htmlOutput += `<li class="highlight">${item.rango}: ${item.desc}</li>`;
        } else {
            htmlOutput += `<li>${item.rango}: ${item.desc}</li>`;
        }
    });

    htmlOutput += "</ul>";

    // Escribir el HTML en el cuerpo de la página

    document.getElementById('resultado').innerHTML = htmlOutput;
}