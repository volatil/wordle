// PROMPT
// en un parrafo escribe 1000 palabras en español, que tengan solo 5 letras cada una, que no contengan tilde, que no contengan la letra ñ, no tiene que tener sentido la oracion, no uses articulos ni conectores
import { diccionario } from "../js/diccionario.js";

export const GLOBAL = {
    cantidadFilas: 5,
}

const eligePalabra = function() {
    let arrUnidos = diccionario;
    const palabra = arrUnidos[ Math.floor( Math.random() * arrUnidos.length ) ];
    if ( $("span.palabra").length >= 1 ) {
        $("span.palabra").html( palabra );
    } else {
        $("body").append(`<span class='palabra' style='display: none;'>${ palabra }</span>`);
    }
    console.warn( palabra );
}
eligePalabra();

const juegoTerminado = function({ estado, palabra }) {
    if ( estado ) {
        alert(`¡Correcto! ${ palabra }`);
    } else {
        console.warn( `No quedan mas intentos ${ palabra }` );
    }
    $(".caja .fila input").removeAttr("class")
    $(".caja .fila input").val("");
    $(".caja .fila .status").attr( "data-estado", "listen" );
    $(".caja .fila").addClass("deshabilitada");
    $(".caja .fila").removeClass("habilitada");
    $( $(".caja .fila")[ 0 ] ).addClass("habilitada");
    $( $(".caja .fila")[ 0 ] ).removeClass("deshabilitada");
    
    
    $(".caja .fila.deshabilitada input").attr("disabled", true);
    $(".caja .fila.habilitada input").attr("disabled", false);
    $(".caja .fila.habilitada input")[0].focus();
    eligePalabra();
}

export const reiniciarJuego = function() {
    $(".caja .fila input").removeAttr("class")
    $(".caja .fila input").val("");
    $(".caja .fila .status").attr( "data-estado", "listen" );
    $(".caja .fila").addClass("deshabilitada");
    $(".caja .fila").removeClass("habilitada");
    $( $(".caja .fila")[ 0 ] ).addClass("habilitada");
    $( $(".caja .fila")[ 0 ] ).removeClass("deshabilitada");
    
    
    $(".caja .fila.deshabilitada input").attr("disabled", true);
    $(".caja .fila.habilitada input").attr("disabled", false);
    $(".caja .fila.habilitada input")[0].focus();
    eligePalabra();
}

const siguienteOportunidad = function() {
    console.warn( `siguiente oportunidad` );
    let hayOtraFila = Boolean( Boolean( $(".fila.habilitada").next().attr("class") ) );
    if ( hayOtraFila ) {
        // CAMBIA CLASES
        $(".caja .fila.habilitada").next().removeClass("deshabilitada");
        $(".caja .fila.habilitada").next().addClass("habilitada");
        $( $(".caja .fila.habilitada")[ 0 ] ).addClass("deshabilitada");
        $( $(".caja .fila.habilitada")[ 0 ] ).removeClass("habilitada");
        // FOCUS Y HABILITA INPUTS
        $(".caja .fila.deshabilitada input").attr("disabled", true);
        $(".caja .fila.habilitada input").attr("disabled", false);
        $(".caja .fila.habilitada input")[0].focus();
    } else {
        juegoTerminado({ estado: false, palabra: $(".palabra").html() });
    }
}

const verificaCoincidencias = function() {
    const palabra = $(".palabra").html();
    for ( let count = 0; count <= $(".fila.habilitada > input").length-1; count++ ) {
        const letra = $( $(".fila.habilitada > input")[ count ] ).val();
        if ( letra == palabra[ count ] ) {
            $( $(".fila.habilitada > input")[ count ] ).addClass("exacto");
        } 
        if ( palabra.includes( letra ) ) {
            $( $(".fila.habilitada > input")[ count ] ).addClass("casi");
        }
    }
}

// CAMBIO DE INPUT FOCUS AL TECLEAR UNA LETRA
{
    if ( $(document).width() <= 768 ) {
        if ( location.href.includes("127") ) {
            $("body").on("keyup", ".fila.habilitada input", function(event){
                let valor = $( this ).val();
                if ( valor.length >= 1 ) {
                    if ( event.key.length == 1  ) {
                        $( this ).val( event.key );
                        $( this ).next().focus();
                    }
                }
            });
        } else {
            document.addEventListener('keyup', function(event) {
                const inputElement = event.target;
                const nextInput = inputElement.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            });
        }
    } else {
        $("body").on("keyup", ".fila.habilitada input", function(event){
            let valor = $( this ).val();
            if ( valor.length >= 1 ) {
                if ( event.key.length == 1  ) {
                    $( this ).val( event.key );
                    $( this ).next().focus();
                }
            }
        });
    }
}

// APRETAR ENTER PARA ENVIAR LA PALABRA
{
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            $(".caja .fila .status[ data-estado='ready' ]").click();
        }
    });
}

// ACTIVA EL BOTON QUE PRUEBA SI ES LA FRASE CORRECTA
{
    $("body").on("keyup", ".fila.habilitada input", function(){
        let intentopalabra = "";
        for ( let count = 0; count <= $(".fila.habilitada > input").length-1; count++ ) {
            const letra = $( $(".fila.habilitada > input")[ count ] ).val();
            intentopalabra += letra;
            
            if ( intentopalabra.length == 5 ) {
                $(".caja .fila.habilitada .status").attr( "data-estado", "ready" );
            } else {
                $(".caja .fila.habilitada .status").attr( "data-estado", "listen" );
            }
        }
    })
}

// AGREGA FILAS
{
    for ( let count = 0; count <= GLOBAL.cantidadFilas - 1; count++ ) {
        $( ".caja" ).append( `
            <div class="fila deshabilitada">
                <input type="text" maxlength="1" disabled>
                <input type="text" maxlength="1" disabled>
                <input type="text" maxlength="1" disabled>
                <input type="text" maxlength="1" disabled>
                <input type="text" maxlength="1" disabled>
                <div class="status" data-estado="listen">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27"><path d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1z"/></svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928 1280"><path d="M608 1000v240q0 16-12 28t-28 12H328q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28m316-600q0 54-15.5 101t-35 76.5t-55 59.5t-57.5 43.5t-61 35.5q-41 23-68.5 65T604 848q0 17-12 32.5T564 896H324q-15 0-25.5-18.5T288 840v-45q0-83 65-156.5T496 530q59-27 84-56t25-76q0-42-46.5-74T451 292q-65 0-108 29q-35 25-107 115q-13 16-31 16q-12 0-25-8L16 319Q3 309 .5 294T6 266Q166 0 470 0q80 0 161 31t146 83t106 127.5T924 400"/></svg>
                </div>
            </div>
        `);
    }
}

// VERIFICA SI ES CORRECTO
{
    $("body").on("click", ".caja .fila.habilitada .status[ data-estado='ready' ]", function () {
        verificaCoincidencias();
        
        const palabra = {
            poradivinar: $(".palabra").html() ,
            posible: function() {
                let elposible = "";
                for ( let count = 0; count <= $(".fila.habilitada > input").length-1; count++ ) {
                    const letra = $( $(".fila.habilitada > input")[ count ] ).val();
                    elposible += letra;
                }
                return elposible;
            } ,
        }
        
        if ( palabra.poradivinar === palabra.posible() ) {
            juegoTerminado({ estado: true, palabra: palabra.posible() });
        } else {
            console.warn( `NO son iguales ...` );
            siguienteOportunidad();
        }
        console.warn( `${ palabra.poradivinar } // ${ palabra.posible() }` );
    });
}