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