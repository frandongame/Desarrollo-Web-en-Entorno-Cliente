function ejercicio3() {
    const formato = document.getElementById('formatoFecha').value;
    const hoy = new Date();
    let resultado = '';

    switch (formato) {
        case '1':
            resultado = hoy.toLocaleDateString('es-ES'); 
            break;
        case '2':
            resultado = hoy.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            break;
        case '3':
            resultado = hoy.toLocaleDateString('eS-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            break;
        default:
            resultado = 'Opción no válida. Introduce 1, 2 o 3.';
    }
    document.getElementById('resultado3').innerText = resultado;
}