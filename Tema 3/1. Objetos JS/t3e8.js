function ejercicio8() {
    const nombreCompleto = document.getElementById('nombreCompleto').value.trim();
    if (nombreCompleto === '' || nombreCompleto.split(' ').length < 2) {
        document.getElementById('resultado8').innerText = 'Introduce al menos un nombre y un apellido.';
        return;
    }

    const sinEspacios = nombreCompleto.replace(/\s/g, '');
    const partes = nombreCompleto.split(' ');
    
    const nombre = partes[0] || '';
    const apellido1 = partes[1] || '';
    const apellido2 = partes[2] || '';

    let resultado = `1. Tamaño (sin espacios): ${sinEspacios.length}\n\n`;
    resultado += `2. Minúsculas: ${nombreCompleto.toLowerCase()}\n`;
    resultado += `   Mayúsculas: ${nombreCompleto.toUpperCase()}\n\n`;
    resultado += `3. Partes:\n`;
    resultado += `   Nombre: ${nombre}\n`;
    resultado += `   Apellido 1: ${apellido1}\n`;
    resultado += `   Apellido 2: ${apellido2}\n\n`;

    const user1 = (nombre[0] || '') + apellido1 + (apellido2[0] || '');
    resultado += `4. Propuesta 1 (lfolgadog): ${user1.toLowerCase()}\n`;

    const user2 = (nombre.substring(0, 3) || '') + (apellido1.substring(0, 3) || '') + (apellido2.substring(0, 3) || '');
    resultado += `5. Propuesta 2 (laufolgal): ${user2.toLowerCase()}`;
    
    document.getElementById('resultado8').innerText = resultado;
}