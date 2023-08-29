// Limpiar canvas

function limpiar() {
    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, ancho, alto);
}

// Colocar imagen en canvas

function piso1general(){

    limpiar();

    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");

    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso1general.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);
    }
}
function pisomenos1general(){

    limpiar();

    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");

    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso-1A.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);
    }
}

// Mensajes

function mensaje1() {
    document.getElementById('piso').innerHTML = "Piso 1"
    document.getElementById('titulo1').innerHTML = "Debe dirigirse al <font color='red'><em><b>Acensor de la Torre A</b></em></font>"

}
function mensaje2() {
    document.getElementById('piso').innerHTML = "Piso -1"
    document.getElementById('titulo1').innerHTML = "Debe dirigirse a la <font color='red'><em><b>Sala de espera</b></em></font>"

}

const mi_canvas = document.getElementById("canvas");
const contexto = mi_canvas.getContext("2d");

// Trayectorias

function ascensor() {

    const lineas = [
        { x1: 126, y1: 63, x2: 130, y2: 65 },
        { x1: 130, y1: 65, x2: 140, y2: 80 },
        { x1: 140, y1: 80, x2: 111, y2: 107 }
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
                document.getElementById("abrirModal").style.display ="block";
                return;
            }
        }

        fx_animar_linea = requestAnimationFrame(animar_linea);
    }

    let fx_animar_linea = requestAnimationFrame(animar_linea);
    
}
function SEmenos1TA() {
    document.getElementById("abrirModal").style.display ="none";
    document.getElementById("info1").style.display ="block";
    document.getElementById("info2").style.display ="block";

    const lineas = [
        { x1: 140, y1: 72, x2: 123, y2: 85 },
        { x1: 123, y1: 85, x2: 138, y2: 88 }
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
    piso1general();
    mensaje1();
    ascensor();
}
function paso2(){
    limpiar();
    pisomenos1general();
    mensaje2();
    SEmenos1TA()
}

// Ventana modal
var modal1 = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton1 = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span1 = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton1.addEventListener("click",function() {
  modal1.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span1.addEventListener("click",function() {
  modal1.style.display = "none";
  paso2();
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    paso2();
  }
});