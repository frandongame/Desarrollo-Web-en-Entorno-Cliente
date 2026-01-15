function ejercicio5() {
    const opcion = prompt("Elige una opción:\n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría");
    let resultado = '';

    try {
        switch (opcion) {
            case '1':
                const base = parseFloat(prompt("Introduce la base:"));
                const exponente = parseFloat(prompt("Introduce el exponente:"));
                if (isNaN(base) || isNaN(exponente)) throw new Error("Valores no válidos");
                resultado = `La potencia de ${base} elevado a ${exponente} es: ${Math.pow(base, exponente)}`;
                break;
            case '2':
                const numRaiz = parseFloat(prompt("Introduce un número (no negativo):"));
                if (isNaN(numRaiz) || numRaiz < 0) throw new Error("Valor no válido");
                resultado = `La raíz de ${numRaiz} es: ${Math.sqrt(numRaiz)}`;
                break;
            case '3':
                const numRedondeo = parseFloat(prompt("Introduce un número decimal:"));
                if (isNaN(numRedondeo)) throw new Error("Valor no válido");
                resultado = `Número: ${numRedondeo}\nRedondeo (Math.round): ${Math.round(numRedondeo)}\nRedondeo al alta (Math.ceil): ${Math.ceil(numRedondeo)}\nRedondeo a la baja (Math.floor): ${Math.floor(numRedondeo)}`;
                break;
            case '4':
                const angulo = parseFloat(prompt("Introduce un ángulo (en grados, 0-360):"));
                if (isNaN(angulo)) throw new Error("Valor no válido");
                const radianes = angulo * (Math.PI / 180);
                resultado = `Ángulo: ${angulo}°\nSeno: ${Math.sin(radianes).toFixed(4)}\nCoseno: ${Math.cos(radianes).toFixed(4)}\nTangente: ${Math.tan(radianes).toFixed(4)}`;
                break;
            default:
                resultado = 'Opción no válida.';
        }
    } catch (error) {
        resultado = `Error: ${error.message}. Introduce números válidos.`;
    }

    document.getElementById('resultado5').innerText = resultado;
}