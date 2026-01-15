function ejercicio2() {
    const dia = parseInt(document.getElementById('cumpleDia').value);
    const mes = parseInt(document.getElementById('cumpleMes').value) - 1; 

    if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 31 || mes < 0 || mes > 11) {
        document.getElementById('resultado2').innerText = 'Por favor, introduce un día y mes válidos.';
        return;
    }

    const añoActual = new Date().getFullYear();
    let domingos = [];

    for (let año = añoActual; año <= 2100; año++) {
        let fecha = new Date(año, mes, dia);
        if (fecha.getDay() === 0) {
            domingos.push(año);
        }
    }

    if (domingos.length > 0) {
        document.getElementById('resultado2').innerText = `Tu cumpleaños caerá en domingo los años:\n${domingos.join(', ')}`;
    } else {
        document.getElementById('resultado2').innerText = `Tu cumpleaños no caerá en domingo ningún año entre ${añoActual} y 2100.`;
    }
}