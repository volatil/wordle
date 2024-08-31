// ELIGE PALABRA RANDOM
const elegirPalabra = function() {
    let diccionario = [ "amigo", "barco", "letra", "campo", "claro", "dulce", "mundo", "playa", "perro", "monte", "sueno", "mango", "panal", "dedo", "cielo", "llano", "animo", "fondo", "marco", "nieve", "rapido", "vacio", "sueldo", "coche", "noche", "sable", "foco", "actor", "solas", "rama", "manto", "primo", "junta", "herir", "bebes", "cubos", "calle", "pista", "verde", "liana", "luces", "radio", "ruedas", "teclo", "rabia", "flama", "cabal", "grifo", "fondo", "forma", "fecha", "reyes", "rumbo", "sueno", "gatos", "pelo", "hoja", "extra", "joven", "musgo", "llama", "broma", "manos", "joyas", "breve", "lento", "hogar", "final", "inicio", "burro", "muro", "ancho", "junte", "corte", "jalar", "robo", "frase", "reja", "ritmo", "hierro", "aviso", "cruce", "pista", "correr", "tazon", "listas", "eco", "suerte", "silla", "salto", "cielo", "baja", "suave", "puente", "don", "algo", "lapiz", "meta", "mar", "cuento" ];
    let diccionario6 = diccionario.filter( palabra => palabra.length == 6 )
    let diccionario5 = diccionario.filter( palabra => palabra.length == 5 )
    let diccionario4 = diccionario.filter( palabra => palabra.length == 4 )
    let diccionario3 = diccionario.filter( palabra => palabra.length == 3 )
    const palabra = diccionario5[ Math.floor( Math.random() * diccionario5.length ) ];
    $("h1").html( palabra );
}
elegirPalabra();
// REINICIAR JUEGO
const reiniciarJuego = function() {
    console.warn( `reiniciando juego` );
    $(".fila").removeClass("activo");
    setTimeout(() => {
        $( $(".fila")[ 0 ] ).addClass("activo");
    }, 500);
    $(".fila input").val("");
    $(".fila input").first().focus();
    $("input").removeAttr('style');
    elegirPalabra();
}
const haySiguienteFila = function() {
    console.warn( `siguiente fila` );
    const $divActual = $('div.fila.activo');
    const $siguienteElemento = $divActual.next();
    const claseEspecifica = 'fila';
    const tieneClase = $siguienteElemento.length && $siguienteElemento.hasClass(claseEspecifica);
    return tieneClase;
}

// APRETAR ENTER PARA ENVIAR LA PALABRA
{
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const palabra = $("h1").html();
            const respuesta = $(".caja .fila.activo input").map( function() { return $(this).val(); } ).get().join("");
            if (palabra === respuesta) {
                alert("¡Correcto!");
                reiniciarJuego();
            } else {
                for ( let count = 0; count < palabra.length; count++ ) {
                    if ( $( $(".fila.activo input")[ count ] ).val() !== palabra[ count ] ) {
                        $( $(".fila.activo input")[ count ] ).css( "border", "1px solid red" );
                    }
                }
                for ( let count = 0; count <= palabra.length; count++ ) {
                    const letra = $( $(".fila.activo input")[ count ] ).val()
                    if ( palabra.includes( letra ) ) {
                        $( $(".fila.activo input")[ count ] ).css( "border", "1px solid yellow" );
                    }
                }
                for ( let count = 0; count < palabra.length; count++ ) {
                    if ( $( $(".fila.activo input")[ count ] ).val() == palabra[ count ] ) {
                        $( $(".fila.activo input")[ count ] ).css( "border", "1px solid green" );
                    }
                }
            }
            
            
            

            
            if ( haySiguienteFila() ) {
                $(".fila.activo").next().addClass("activo");
                $( $(".fila.activo")[ 0 ] ).removeClass("activo");
                $($(".fila.activo > input")[0]).focus();
            } else {
                reiniciarJuego();
                alert("¡Fin del juego!");
            }
        }
    });
}

// SALTO DE INPUT AL TECLEAR
{
    document.addEventListener('keydown', function(event) {
        const inputs = document.querySelectorAll(".activo input[type='text']");
        inputs.forEach((input, index) => {
            input.addEventListener("input", function() {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });
    });
}