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