const imagenes = [
    "imagenes/bart.png", 
    "imagenes/lisa.jpeg", 
    "imagenes/Homer.webp", 
    "imagenes/Marge.webp",
    "imagenes/Maggie.webp", 
    "imagenes/ayudante_de_santa.png", 
    "imagenes/bart.png", 
    "imagenes/lisa.jpeg", 
    "imagenes/Homer.webp", 
    "imagenes/Marge.webp",
    "imagenes/Maggie.webp", 
    "imagenes/ayudante_de_santa.png"
];


let carta1 = null;
let bloqueo = false;

const tablero = document.getElementById("tablero");

for (let i = 0; i < imagenes.length; i++) {
    let div = document.createElement("div");
    div.className = "carta";
    
    let img = document.createElement("img");
    img.src = imagenes[i];
    div.appendChild(img);

    div.onclick = function() {
        jugar(this);
    };

    tablero.appendChild(div);
}

function jugar(cartaSeleccionada) {
    if (bloqueo || cartaSeleccionada.className.includes("resuelto") || cartaSeleccionada === carta1) {
        return;
    }

    cartaSeleccionada.classList.add("visible");

    if (carta1 === null) {
        carta1 = cartaSeleccionada;
    } else {
        let img1 = carta1.querySelector("img").src;
        let img2 = cartaSeleccionada.querySelector("img").src;

        if (img1 === img2) {
            carta1.classList.add("resuelto");
            cartaSeleccionada.classList.add("resuelto");
            carta1 = null;
        } else {
            bloqueo = true;
            setTimeout(() => {
                carta1.classList.remove("visible");
                cartaSeleccionada.classList.remove("visible");
                carta1 = null;
                bloqueo = false;
            }, 1000);
        }
    }
}