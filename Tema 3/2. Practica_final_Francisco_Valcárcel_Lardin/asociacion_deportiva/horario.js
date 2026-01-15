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