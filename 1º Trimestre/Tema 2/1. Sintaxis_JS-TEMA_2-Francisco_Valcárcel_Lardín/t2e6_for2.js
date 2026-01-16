//declaro las variables

var hora;
var minutos;

//bucle for para ir de 5 en 5 min desde las 9 hasta las 21

var min = true;

for (hora = 9; hora <= 21; hora++) {
    for (minutos = 0; minutos <= 30; minutos += 30) {
        if (hora === 21 && minutos === 30) {
            break;
        }
        document.write(hora + ":" + minutos + "<br>");
    }
}