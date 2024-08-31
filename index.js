// ELIGE PALABRA RANDOM
const elegirPalabra = function() {
    let diccionario = [ "abajo", "abeto", "abrir", "acero", "actas", "actor", "adivo", "afilo", "agudo", "ajeno", "alamo", "amado", "amigo", "amor", "ancho", "arena", "asilo", "atras", "barco", "barro", "besos", "bilis", "boca", "bolso", "bravo", "brota", "bruma", "bruto", "busca", "cabra", "cadro", "caja", "calle", "canto", "carro", "carta", "cebro", "celda", "cielo", "cine", "clara", "clavo", "cobra", "comer", "corto", "craso", "cubo", "cuent", "dardo", "denso", "doble", "docta", "dulce", "duro", "enter", "envio", "escar", "faro", "feste", "fibra", "fiera", "firme", "fisca", "flor", "focar", "folio", "fondo", "fuente", "gafas", "ganas", "gasto", "gente", "gesto", "golpe", "graba", "grado", "grano", "grasa", "grito", "guapa", "haber", "hacer", "halar", "harto", "helio", "hiero", "hilar", "hiper", "horno", "hotel", "huida", "idolo", "injur", "islas", "jaula", "jueza", "jugar", "junto", "lamer", "largo", "latir", "lejos", "limbo", "llano", "llave", "llama", "loco", "lomas", "lucha", "luces", "lugar", "lujo", "lunes", "manos", "marro", "mesa", "metal", "mirar", "mismo", "modos", "morir", "moros", "mover", "mucho", "mundo", "mural", "mutil", "nadie", "nave", "nevar", "noche", "nomas", "nubes", "nueve", "nunca", "ocupo", "ojear", "oleos", "olivo", "olor", "onda", "oro", "panal", "papal", "parte", "pasar", "patio", "pausa", "pecar", "pelar", "perro", "peso", "picar", "pisar", "plato", "plomo", "pollo", "pozo", "preso", "pulso", "puro", "quema", "quedo", "quedo", "quema", "quien", "quiso", "razon", "recio", "rodar", "ruina", "saldo", "salto", "santo", "selva", "serio", "silla", "sombra", "sonar", "subir", "suelo", "surco", "talon", "tambo", "temor", "tenis", "tigre", "tinta", "titub", "tocar", "toser", "traer", "tropa", "truco", "tubo", "udido", "vacio", "vasto", "verbo", "votar" ];
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