function ejercicio7() {
    const inputVal = document.getElementById('numero').value;
    const num = parseFloat(inputVal); 

    if (isNaN(num)) {
        document.getElementById('resultado7').innerText = 'Introduce un número válido.';
        return;
    }
    
    let resultado = `Número introducido: ${num}\n\n`;
    resultado += `1. Valor exponencial: ${num.toExponential()}\n`;
    resultado += `2. Con 4 decimales: ${num.toFixed(4)}\n`;

    const numEntero = parseInt(inputVal, 10);
    if (!isNaN(numEntero)) {
         resultado += `3. En binario (entero): ${numEntero.toString(2)}\n`;
         resultado += `4. En octal (entero): ${numEntero.toString(8)}\n`;
         resultado += `5. En hexadecimal (entero): ${numEntero.toString(16)}`;
    } else {
        resultado += "3-5. Introduce un entero para ver binario, octal y hex."
    }

    document.getElementById('resultado7').innerText = resultado;
}