
// ELIGE PALABRA RANDOM
const elegirPalabra = function() {
    let diccionario = ['abajo', 'abeto', 'abrir', 'acero', 'actas', 'actor', 'adivo', 'afilo', 'agudo', 'ajeno', 'alamo', 'amado', 'amigo', 'amor', 'ancho', 'arena', 'asilo', 'atras', 'barco', 'barro', 'besos', 'bilis', 'boca', 'bolso', 'bravo', 'brota', 'bruma', 'bruto', 'busca', 'cabra', 'cadro', 'caja', 'calle', 'canto', 'carro', 'carta', 'cebro', 'celda', 'cielo', 'cine', 'clara', 'clavo', 'cobra', 'comer', 'corto', 'craso', 'cubo', 'cuent', 'dardo', 'denso', 'doble', 'docta', 'dulce', 'duro', 'enter', 'envio', 'escar', 'faro', 'feste', 'fibra', 'fiera', 'firme', 'fisca', 'flor', 'focar', 'folio', 'fondo', 'fuente', 'gafas', 'ganas', 'gasto', 'gente', 'gesto', 'golpe', 'graba', 'grado', 'grano', 'grasa', 'grito', 'guapa', 'haber', 'hacer', 'halar', 'harto', 'helio', 'hiero', 'hilar', 'hiper', 'horno', 'hotel', 'huida', 'idolo', 'injur', 'islas', 'jaula', 'jueza', 'jugar', 'junto', 'lamer', 'largo', 'latir', 'lejos', 'limbo', 'llano', 'llave', 'llama', 'loco', 'lomas', 'lucha', 'luces', 'lugar', 'lujo', 'lunes', 'manos', 'marro', 'mesa', 'metal', 'mirar', 'mismo', 'modos', 'morir', 'moros', 'mover', 'mucho', 'mundo', 'mural', 'mutil', 'nadie', 'nave', 'nevar', 'noche', 'nomas', 'nubes', 'nueve', 'nunca', 'ocupo', 'ojear', 'oleos', 'olivo', 'olor', 'onda', 'oro', 'panal', 'papal', 'parte', 'pasar', 'patio', 'pausa', 'pecar', 'pelar', 'perro', 'peso', 'picar', 'pisar', 'plato', 'plomo', 'pollo', 'pozo', 'preso', 'pulso', 'puro', 'quema', 'quedo', 'quien', 'quiso', 'razon', 'recio', 'rodar', 'ruina', 'saldo', 'salto', 'santo', 'selva', 'serio', 'silla', 'sombra', 'sonar', 'subir', 'suelo', 'surco', 'talon', 'tambo', 'temor', 'tenis', 'tigre', 'tinta', 'titub', 'tocar', 'toser', 'traer', 'tropa', 'truco', 'tubo', 'udido', 'vacio', 'vasto', 'verbo', 'votar', 'abono', 'abril', 'actua', 'adios', 'adiva', 'afino', 'agosto', 'agrid', 'aguja', 'alado', 'altas', 'amaba', 'amago', 'amaro', 'ambos', 'ambra', 'amule', 'anima', 'apaga', 'apuro', 'arbol', 'ardor', 'argos', 'arido', 'aroma', 'arras', 'atajo', 'atico', 'atomo', 'autor', 'ayuda', 'bajar', 'balan', 'balde', 'balea', 'balsa', 'banda', 'bardo', 'bazar', 'bebe', 'bicho', 'bingo', 'blusa', 'borde', 'brava', 'brisa', 'burla', 'busto', 'cacao', 'cagar', 'calla', 'canal', 'canta', 'caras', 'cavar', 'cebo', 'cejar', 'cenit', 'cerdo', 'cesar', 'ciego', 'cifra', 'clima', 'cloro', 'colar', 'cojar', 'color', 'conos', 'copa', 'corte', 'crece', 'creso', 'cubra', 'cueva', 'culto', 'cursi', 'darle', 'datar', 'debil', 'decor', 'dedal', 'dejar', 'demas', 'dent', 'derbi', 'dosis', 'drama', 'drupa', 'dudar', 'dulia', 'duque', 'ebano', 'echar', 'eje', 'elato', 'embol', 'enano', 'encar', 'entra', 'epico', 'error', 'espos', 'extra', 'fabri', 'fader', 'faena', 'fajar', 'falsa', 'fango', 'farda', 'farol', 'farsa', 'finta', 'fleco', 'fobia', 'focas', 'fonda', 'forja', 'fosas', 'frase', 'freno', 'furia', 'futro', 'garra', 'gato', 'gema', 'giran', 'gordo', 'gotar', 'grama', 'grava', 'guard', 'guata', 'hadas', 'halal', 'haras', 'hielo', 'honda', 'horror', 'iluso', 'impar', 'intoc', 'jabao', 'jabre', 'jacal', 'jarra', 'jarro', 'jefes', 'jiras', 'joven', 'lados', 'lanza', 'lapso', 'lavar', 'lazos', 'leche', 'lento', 'leona', 'letra', 'limar', 'limos', 'lirio', 'litio', 'llana', 'lleva', 'lobo', 'lujos', 'luna', 'lutos', 'mache', 'mader', 'magro', 'malva', 'mamut', 'manco', 'matar', 'mates', 'mayor', 'mecha', 'medio', 'miedo', 'mimar', 'mitad', 'modal', 'molar', 'molde', 'monto', 'moral', 'morsa', 'motel', 'motor', 'mujer', 'multa', 'muros', 'musa', 'musgo', 'nadar', 'nardo', 'nariz', 'naval', 'naves', 'niega', 'nieve', 'niño', 'nomos', 'norte', 'notar', 'novio', 'nudos', 'nueva', 'obra', 'obvio', 'ocaso', 'oidos', 'ojota', 'olas', 'oler', 'olmos', 'opera', 'opino', 'optar', 'oral', 'orbea', 'orden', 'oreja', 'oruga', 'otelo', 'otro', 'ovalo', 'ovino', 'oveja', 'pacas', 'pacta', 'padre', 'pares', 'paso', 'patos', 'pedal', 'peine', 'penas', 'peral', 'pilas', 'pilar', 'pinos', 'pipas', 'pisos', 'placa', 'plaza', 'pluma', 'pobre', 'pocos', 'polvo', 'poema', 'poner', 'poros', 'poses', 'prado', 'prisa', 'prosa', 'pumas', 'punto', 'queda', 'queja', 'quemo', 'radar', 'radia', 'radio', 'rango', 'raya', 'rebas', 'rebec', 'recto', 'redil', 'regal', 'regio', 'regla', 'reino', 'relaj', 'renta', 'resto', 'retro', 'rezar', 'riego', 'rimas', 'risar', 'roaba', 'roaja', 'robo', 'roja', 'rombo', 'ronda', 'rosar', 'rosas', 'rotar', 'rozar', 'rubor', 'rueda', 'rugar', 'rural', 'saber', 'sacar', 'sabor', 'salir', 'sano', 'sapos', 'sarta', 'sauco', 'secar', 'secta', 'seca', 'senda', 'serie', 'seso', 'sexta', 'sexto', 'sexo', 'sidra', 'sierra', 'silbo', 'sirio', 'sobro', 'socio', 'sobra', 'solar', 'solea', 'solos', 'sombr', 'sordo', 'sueno', 'super', 'tabla', 'taco', 'tango', 'tapar', 'tapiz', 'tarde', 'tarea', 'tarro', 'tarta', 'tazas', 'tebeo', 'tenso', 'texto', 'tibio', 'tocho', 'tocon', 'toros', 'tosar', 'trama', 'tramo', 'trema', 'treta', 'trigo', 'trina', 'trino', 'tripa', 'trozo', 'trufa', 'tubos', 'tuer', 'turbo', 'tumbo', 'tunel', 'tupir', 'tutela', 'ubes', 'ubre', 'ugar', 'ulula', 'usado', 'usar', 'util', 'vadear', 'vagon', 'valer', 'valgo', 'valor', 'valla', 'vals', 'vato', 'vedar', 'vela', 'venir', 'ventar', 'verja', 'vero', 'verso', 'veste', 'vez', 'viga', 'vino', 'viol', 'viuda', 'vocal', 'volar', 'volca', 'voraz', 'votos', 'vulgo', 'yacer', 'yate', 'yayo', 'yegua', 'yeso', 'yodo', 'yugo', 'yunta', 'zabro', 'zarpa', 'zorro', 'zumba', 'zumo', 'zurdo', 'zuzar', 'duplo', 'fisco', 'otoño', 'raido', 'raja', 'rebel', 'reyo', 'riste', 'rizos', 'robar', 'rojo', 'sabio', 'vasta'];
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
    $(".caja > .fila > input").removeClass();
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
// LOGICA
const logica = function() {
    const palabra = $("h1").html();
    const respuesta = $(".caja .fila.activo input").map( function() { return $(this).val(); } ).get().join("");
    if (palabra === respuesta) {
        alert("¡Correcto!");
        reiniciarJuego();
    } else {
        for ( let count = 0; count < palabra.length; count++ ) {
            if ( $( $(".fila.activo input")[ count ] ).val() !== palabra[ count ] ) {
                $( $(".fila.activo input")[ count ] ).addClass( "error" );
            }
        }
        for ( let count = 0; count <= palabra.length; count++ ) {
            const letra = $( $(".fila.activo input")[ count ] ).val()
            if ( palabra.includes( letra ) ) {
                $( $(".fila.activo input")[ count ] ).addClass( "casi" );
            }
        }
        for ( let count = 0; count < palabra.length; count++ ) {
            if ( $( $(".fila.activo input")[ count ] ).val() == palabra[ count ] ) {
                $( $(".fila.activo input")[ count ] ).addClass( "acertado" );
            }
        }
    }
    
    
    

    
    if ( haySiguienteFila() ) {
        $(".fila.activo").next().addClass("activo");
        $( $(".fila.activo")[ 0 ] ).removeClass("activo");
        $($(".fila.activo > input")[0]).focus();
    } else {
        reiniciarJuego();
        alert("¡Fin del juego! La palabra era: " + palabra);
    }
}

// APRETAR ENTER PARA ENVIAR LA PALABRA
{
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            logica();
        }
    });
}

// TEST, MEJORAR
{
    $("nav > button").on("click", function(event) {
        logica();
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

// VER PALABRA
{
    $("nav > img").on("click", function(){
        const palabra = $("h1").html();
        alert( `La palabra es: ${ palabra }` );
    })
}