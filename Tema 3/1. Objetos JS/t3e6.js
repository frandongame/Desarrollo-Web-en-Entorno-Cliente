function ejercicio6() {
    const radio = parseFloat(document.getElementById('radio').value);
    if (isNaN(radio) || radio < 0) {
        document.getElementById('resultado6').innerText = 'Introduce un radio válido (número positivo).';
        return;
    }

    const diametro = radio * 2;
    const perimetro = 2 * Math.PI * radio;
    const areaCirculo = Math.PI * Math.pow(radio, 2);
    const areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
    const volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

    let resultado = `Resultados para un radio de ${radio.toFixed(2)} cm:\n\n`;
    resultado += `1. Radio: ${radio.toFixed(2)} cm\n`;
    resultado += `2. Diámetro: ${diametro.toFixed(2)} cm\n`;
    resultado += `3. Perímetro Circunferencia: ${perimetro.toFixed(2)} cm\n`;
    resultado += `4. Área Círculo: ${areaCirculo.toFixed(2)} cm cuadrados\n`;
    resultado += `5. Área Esfera: ${areaEsfera.toFixed(2)} cm cuadrados\n`;
    resultado += `6. Volumen Esfera: ${volumenEsfera.toFixed(2)} cm cúbicos`;
    
    document.getElementById('resultado6').innerText = resultado;
}