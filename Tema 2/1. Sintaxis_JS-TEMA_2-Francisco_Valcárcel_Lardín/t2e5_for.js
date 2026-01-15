//declaro las variables

var hora;
var minutos;

//variable booleana para alternar entre hora en punto y hora media
var horaMedia = false; 

//bucle for para las horas desde las 9 hasta las 21
for (hora = 9; hora <= 21; hora++) {
    //bucle para los minutos, que alterna entre 0 y 30
    for (minutos = 0; minutos <= 30; minutos += 30) {
        //si la hora es 21 y los minutos son 30, se detiene el bucle
        if (hora === 21 && minutos === 30) {
            break;
        }
        //muestro la hora y los minutos en el documento
        document.write(hora + ":" + minutos + "<br>");
    }
}