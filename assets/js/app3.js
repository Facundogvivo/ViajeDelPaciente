// Limpiar canvas

function limpiar() {
    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, ancho, alto);
}

// Colocar imagen en canvas

function piso1AKinesiologia(){

    limpiar();

    const mi_canvas = document.getElementById("canvas");
    const contexto = mi_canvas.getContext("2d");

    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/nivel 1B.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);
    }
}

// Mensajes

function mensaje1() {
    document.getElementById('piso').innerHTML = "Piso 1"
    document.getElementById('titulo1').innerHTML = "Debe dirigirse a la <font color='red'><em><b>Sala de espera de kinesiología de la Torre A</b></em></font>"

}

function sonido1(){
    // Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido1 = function (fuente) {
    const sonido1 = document.createElement("audio");
    sonido1.src = fuente;
    sonido1.setAttribute("preload", "auto");
    sonido1.setAttribute("controls", "none");
    sonido1.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido1);
    return sonido1;
};
const sonido1 = cargarSonido1("assets/audio/nivel 1B.mp3");
    sonido1.play();
}

const mi_canvas = document.getElementById("canvas");
const contexto = mi_canvas.getContext("2d");

// Trayectorias

function SE1TAK() {

    const lineas = [
        { x1: 65, y1: 125, x2: 65, y2: 108 },
        { x1: 65, y1: 108, x2: 86, y2: 108 },
        { x1: 86, y1: 108, x2: 125, y2: 87 },
        { x1: 125, y1: 87, x2: 135, y2: 87 },
        { x1: 135, y1: 87, x2: 135, y2: 73}
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
                document.getElementById("encuesta").style.display ="block";
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
    piso1AKinesiologia();
    mensaje1();
    SE1TAK();
}


// Ventana modal
var modal1 = document.getElementById("ventanaModal1");

// Botón que abre el modal
var boton1 = document.getElementById("encuesta");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span1 = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton1.addEventListener("click",function() {
  modal1.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span1.addEventListener("click",function() {
  modal1.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});