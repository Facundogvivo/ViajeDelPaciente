// Limpiar canvas

function limpiar() {
    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, ancho, alto);
}

// Colocar imagen en canvas

function piso1AVacunatorio(){

    limpiar();

    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");

    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso1E.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);
    }
}

// Mensajes

function mensaje1() {
    document.getElementById('piso').innerHTML = "Piso 1"
    document.getElementById('titulo1').innerHTML = "Debe dirigirse a la <font color='red'><em><b>Sala de espera del Vacunatorio de la Torre A</b></em></font>"

}

const mi_canvas = document.getElementById("canvas");
const contexto = mi_canvas.getContext("2d");

// Trayectorias

function SE1TAV() {

    const lineas = [
        { x1: 126, y1: 63, x2: 130, y2: 65 },
        { x1: 130, y1: 65, x2: 142, y2: 84 },
        { x1: 142, y1: 84, x2: 103, y2: 116 },
        { x1: 103, y1: 116, x2: 130, y2: 125 }
    ];
    
    let indiceLineaActual = 0;
    let longitudDibujo = 0;

    function animar_linea() {
        contexto.beginPath();
        contexto.strokeStyle = "yellow";
        contexto.lineWidth = 2;

        contexto.moveTo(lineas[indiceLineaActual].x1, lineas[indiceLineaActual].y1);
        contexto.lineTo(
            lineas[indiceLineaActual].x1 + (lineas[indiceLineaActual].x2 - lineas[indiceLineaActual].x1) * longitudDibujo,
            lineas[indiceLineaActual].y1 + (lineas[indiceLineaActual].y2 - lineas[indiceLineaActual].y1) * longitudDibujo
        );

        contexto.stroke();
        contexto.closePath();

        longitudDibujo += 0.01; // Ajusta este valor para controlar la velocidad de dibujo

        if (longitudDibujo >= 1) {
            longitudDibujo = 0;
            indiceLineaActual++;

            if (indiceLineaActual >= lineas.length) {
                cancelAnimationFrame(fx_animar_linea);
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
    
}

//Mostrar recorrido

function paso1(){
    limpiar();
    piso1AVacunatorio();
    mensaje1();
    SE1TAV();
}
