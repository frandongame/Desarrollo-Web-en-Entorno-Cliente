function ejercicio4() {
    const formato = document.getElementById('formatoHora').value;
    const ahora = new Date();
    let resultado = '';

    switch (formato) {
        case '1':
            resultado = ahora.toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            break;
        case '2':
            resultado = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            break;
        default:
            resultado = 'Opción no válida. Introduce 1 o 2.';
    }
    document.getElementById('resultado4').innerText = resultado;
}