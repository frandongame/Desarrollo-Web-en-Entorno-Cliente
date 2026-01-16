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