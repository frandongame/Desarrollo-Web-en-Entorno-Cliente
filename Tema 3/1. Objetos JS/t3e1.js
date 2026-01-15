function ejercicio1() {
    const hoy = new Date();
    const finDeCurso = new Date(hoy.getFullYear(), 5, 24);

    if (hoy > finDeCurso) {
        finDeCurso.setFullYear(hoy.getFullYear() + 1);
    }

    const diffMs = finDeCurso - hoy;
    const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    document.getElementById('resultado1').innerText = `Quedan ${diffDias} días hasta el 24 de junio.`;
}