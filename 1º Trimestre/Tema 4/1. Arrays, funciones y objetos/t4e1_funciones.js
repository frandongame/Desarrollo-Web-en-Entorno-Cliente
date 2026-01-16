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



function consultarHorario() {
    
    // Crear el horario de entrenamientos

    alert ("<h2>Horario de Entrenamientos</h2>");
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const horario = {
        "Lunes": "9:00 - 15:00",
        "Martes": "9:00 - 15:00",
        "Miércoles": "9:00 - 15:00",
        "Jueves": "9:00 - 15:00",
        "Viernes": "9:00 - 15:00",
        "Sábado": "9:00 - 15:00",
        "Domingo": "Descanso"
    };

    const horario2 = {
        "Lunes": "16:00 - 21:00",
        "Martes": "16:00 - 21:00",
        "Miércoles": "16:00 - 21:00",
        "Jueves": "16:00 - 21:00",
        "Viernes": "16:00 - 21:00",
        "Sábado": "16:00 - 21:00",
        "Domingo": "Descanso"
    };

    // Horario de mañana como el de tarde

    let htmlOutput = "<h3>Horario de Mañana:</h3><ul>";
    diasSemana.forEach(dia => {
        htmlOutput += `<li><strong>${dia}:</strong> ${horario[dia]}</li>`;
    });
    htmlOutput += "</ul>";

    htmlOutput += "<h3>Horario de Tarde:</h3><ul>";
    diasSemana.forEach(dia => {
        htmlOutput += `<li><strong>${dia}:</strong> ${horario2[dia]}</li>`;
    });
    htmlOutput += "</ul>";

    // Escribir el HTML en el cuerpo de la página

    document.getElementById('resultado').innerHTML = htmlOutput;
}



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



document.addEventListener('DOMContentLoaded', function() {
    
    // Lógica del Calendario
    const now = new Date();
    
    // 'es-ES' (español) para el mes
    const mes = now.toLocaleString('es-ES', { month: 'short' });
    const dia = now.getDate();
    const anio = now.getFullYear();

    // HTML del calendario actualizado
    const calDia = document.querySelector('#calendario .cal-dia');
    const calMes = document.querySelector('#calendario .cal-mes');
    const calAnio = document.querySelector('#calendario .cal-anio');

    if (calDia && calMes && calAnio) {
        calDia.textContent = dia;
        calMes.textContent = mes.replace('.', '');
        calAnio.textContent = anio;
    }


    setTimeout(function() {

        alert("¡Bienvenido/a!\n\nGracias por visitar la web de la Asociación Deportiva Castro Urdiales.");
    
    }, 10000); 

});



function abrirAvisoLegal() {

    const opciones = 'width=600,height=500,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no';
    
    const popupAviso = window.open('', 'AvisoLegal', opciones);

    const contenidoHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Aviso Legal</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                padding: 20px; 
                line-height: 1.6; 
            }
            h1 { color: #333; }
            p { text-align: justify; }
            .boton-cerrar {
                display: block;
                margin: 20px auto 0 auto;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
        </style>
    </head>
    <body>

        <h1>Aviso Legal</h1>
        
        <p><strong>1. DATOS IDENTIFICATIVOS:</strong></p>
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es <strong>Asociación Deportiva Castro Urdiales</strong> (en adelante AD Castro Urdiales), con domicilio a estos efectos en Calle Deportiva nº 1, 39700, Castro Urdiales, Cantabria.</p>

        <p><strong>2. USUARIOS:</strong></p>
        <p>El acceso y/o uso de este portal de AD Castro Urdiales atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

        <p><strong>3. PROPIEDAD INTELECTUAL E INDUSTRIAL:</strong></p>
        <p>AD Castro Urdiales por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).</p>

        <button class="boton-cerrar" onclick="window.close()">Cerrar</button>

    </body>
    </html>
    `;


    popupAviso.document.write(contenidoHtml);

    popupAviso.document.close();
}



function ejercicio9() {
    const password = document.getElementById("contraseña").value;
    const resultado = document.getElementById("resultado9");

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-_@#$%&]).{8,16}$/;

    if (regex.test(password)) {
        resultado.textContent = "Contraseña segura";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Contraseña no segura";
        resultado.style.color = "red";
    }
}

function cargarHtmlContraseña() {
    const contenedorResultado = document.getElementById('resultado');
    
    let htmlOutput = `
        <h2>Validador de Contraseña</h2>
        <p>Introduce tu contraseña para comprobar su seguridad (8-16 caracteres, Mayús, minús, número y especial: -_@#$%&).</p>
        
        <div>
            <label for="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" style="margin: 0 10px;">
            
            <button onclick="ejercicio9()">Validar</button>
        </div>
        
        <div id="resultado9" style="margin-top: 20px; font-weight: bold; font-size: 1.2em;">
            </div>
    `;
    
    contenedorResultado.innerHTML = htmlOutput;
}



