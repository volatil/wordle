const GLOBAL = {
    cantidadFilas: 6,
}

// ELIGE PALABRA RANDOM
{
    let diccionario = ['abajo', 'abeto', 'abrir', 'acero', 'actas', 'actor', 'adivo', 'afilo', 'agudo', 'ajeno', 'alamo', 'amado', 'amigo', 'amor', 'ancho', 'arena', 'asilo', 'atras', 'barco', 'barro', 'besos', 'bilis', 'boca', 'bolso', 'bravo', 'brota', 'bruma', 'bruto', 'busca', 'cabra', 'cadro', 'caja', 'calle', 'canto', 'carro', 'carta', 'cebro', 'celda', 'cielo', 'cine', 'clara', 'clavo', 'cobra', 'comer', 'corto', 'craso', 'cubo', 'cuent', 'dardo', 'denso', 'doble', 'docta', 'dulce', 'duro', 'enter', 'envio', 'escar', 'faro', 'feste', 'fibra', 'fiera', 'firme', 'fisca', 'flor', 'focar', 'folio', 'fondo', 'fuente', 'gafas', 'ganas', 'gasto', 'gente', 'gesto', 'golpe', 'graba', 'grado', 'grano', 'grasa', 'grito', 'guapa', 'haber', 'hacer', 'halar', 'harto', 'helio', 'hiero', 'hilar', 'hiper', 'horno', 'hotel', 'huida', 'idolo', 'injur', 'islas', 'jaula', 'jueza', 'jugar', 'junto', 'lamer', 'largo', 'latir', 'lejos', 'limbo', 'llano', 'llave', 'llama', 'loco', 'lomas', 'lucha', 'luces', 'lugar', 'lujo', 'lunes', 'manos', 'marro', 'mesa', 'metal', 'mirar', 'mismo', 'modos', 'morir', 'moros', 'mover', 'mucho', 'mundo', 'mural', 'mutil', 'nadie', 'nave', 'nevar', 'noche', 'nomas', 'nubes', 'nueve', 'nunca', 'ocupo', 'ojear', 'oleos', 'olivo', 'olor', 'onda', 'oro', 'panal', 'papal', 'parte', 'pasar', 'patio', 'pausa', 'pecar', 'pelar', 'perro', 'peso', 'picar', 'pisar', 'plato', 'plomo', 'pollo', 'pozo', 'preso', 'pulso', 'puro', 'quema', 'quedo', 'quien', 'quiso', 'razon', 'recio', 'rodar', 'ruina', 'saldo', 'salto', 'santo', 'selva', 'serio', 'silla', 'sombra', 'sonar', 'subir', 'suelo', 'surco', 'talon', 'tambo', 'temor', 'tenis', 'tigre', 'tinta', 'titub', 'tocar', 'toser', 'traer', 'tropa', 'truco', 'tubo', 'udido', 'vacio', 'vasto', 'verbo', 'votar', 'abono', 'abril', 'actua', 'adios', 'adiva', 'afino', 'agosto', 'agrid', 'aguja', 'alado', 'altas', 'amaba', 'amago', 'amaro', 'ambos', 'ambra', 'amule', 'anima', 'apaga', 'apuro', 'arbol', 'ardor', 'argos', 'arido', 'aroma', 'arras', 'atajo', 'atico', 'atomo', 'autor', 'ayuda', 'bajar', 'balan', 'balde', 'balea', 'balsa', 'banda', 'bardo', 'bazar', 'bebe', 'bicho', 'bingo', 'blusa', 'borde', 'brava', 'brisa', 'burla', 'busto', 'cacao', 'cagar', 'calla', 'canal', 'canta', 'caras', 'cavar', 'cebo', 'cejar', 'cenit', 'cerdo', 'cesar', 'ciego', 'cifra', 'clima', 'cloro', 'colar', 'cojar', 'color', 'conos', 'copa', 'corte', 'crece', 'creso', 'cubra', 'cueva', 'culto', 'cursi', 'darle', 'datar', 'debil', 'decor', 'dedal', 'dejar', 'demas', 'dent', 'derbi', 'dosis', 'drama', 'drupa', 'dudar', 'dulia', 'duque', 'ebano', 'echar', 'eje', 'elato', 'embol', 'enano', 'encar', 'entra', 'epico', 'error', 'espos', 'extra', 'fabri', 'fader', 'faena', 'fajar', 'falsa', 'fango', 'farda', 'farol', 'farsa', 'finta', 'fleco', 'fobia', 'focas', 'fonda', 'forja', 'fosas', 'frase', 'freno', 'furia', 'futro', 'garra', 'gato', 'gema', 'giran', 'gordo', 'gotar', 'grama', 'grava', 'guard', 'guata', 'hadas', 'halal', 'haras', 'hielo', 'honda', 'horror', 'iluso', 'impar', 'intoc', 'jabao', 'jabre', 'jacal', 'jarra', 'jarro', 'jefes', 'jiras', 'joven', 'lados', 'lanza', 'lapso', 'lavar', 'lazos', 'leche', 'lento', 'leona', 'letra', 'limar', 'limos', 'lirio', 'litio', 'llana', 'lleva', 'lobo', 'lujos', 'luna', 'lutos', 'mache', 'mader', 'magro', 'malva', 'mamut', 'manco', 'matar', 'mates', 'mayor', 'mecha', 'medio', 'miedo', 'mimar', 'mitad', 'modal', 'molar', 'molde', 'monto', 'moral', 'morsa', 'motel', 'motor', 'mujer', 'multa', 'muros', 'musa', 'musgo', 'nadar', 'nardo', 'nariz', 'naval', 'naves', 'niega', 'nieve', 'niño', 'nomos', 'norte', 'notar', 'novio', 'nudos', 'nueva', 'obra', 'obvio', 'ocaso', 'oidos', 'ojota', 'olas', 'oler', 'olmos', 'opera', 'opino', 'optar', 'oral', 'orbea', 'orden', 'oreja', 'oruga', 'otelo', 'otro', 'ovalo', 'ovino', 'oveja', 'pacas', 'pacta', 'padre', 'pares', 'paso', 'patos', 'pedal', 'peine', 'penas', 'peral', 'pilas', 'pilar', 'pinos', 'pipas', 'pisos', 'placa', 'plaza', 'pluma', 'pobre', 'pocos', 'polvo', 'poema', 'poner', 'poros', 'poses', 'prado', 'prisa', 'prosa', 'pumas', 'punto', 'queda', 'queja', 'quemo', 'radar', 'radia', 'radio', 'rango', 'raya', 'rebas', 'rebec', 'recto', 'redil', 'regal', 'regio', 'regla', 'reino', 'relaj', 'renta', 'resto', 'retro', 'rezar', 'riego', 'rimas', 'risar', 'roaba', 'roaja', 'robo', 'roja', 'rombo', 'ronda', 'rosar', 'rosas', 'rotar', 'rozar', 'rubor', 'rueda', 'rugar', 'rural', 'saber', 'sacar', 'sabor', 'salir', 'sano', 'sapos', 'sarta', 'sauco', 'secar', 'secta', 'seca', 'senda', 'serie', 'seso', 'sexta', 'sexto', 'sexo', 'sidra', 'sierra', 'silbo', 'sirio', 'sobro', 'socio', 'sobra', 'solar', 'solea', 'solos', 'sombr', 'sordo', 'sueno', 'super', 'tabla', 'taco', 'tango', 'tapar', 'tapiz', 'tarde', 'tarea', 'tarro', 'tarta', 'tazas', 'tebeo', 'tenso', 'texto', 'tibio', 'tocho', 'tocon', 'toros', 'tosar', 'trama', 'tramo', 'trema', 'treta', 'trigo', 'trina', 'trino', 'tripa', 'trozo', 'trufa', 'tubos', 'tuer', 'turbo', 'tumbo', 'tunel', 'tupir', 'tutela', 'ubes', 'ubre', 'ugar', 'ulula', 'usado', 'usar', 'util', 'vadear', 'vagon', 'valer', 'valgo', 'valor', 'valla', 'vals', 'vato', 'vedar', 'vela', 'venir', 'ventar', 'verja', 'vero', 'verso', 'veste', 'vez', 'viga', 'vino', 'viol', 'viuda', 'vocal', 'volar', 'volca', 'voraz', 'votos', 'vulgo', 'yacer', 'yate', 'yayo', 'yegua', 'yeso', 'yodo', 'yugo', 'yunta', 'zabro', 'zarpa', 'zorro', 'zumba', 'zumo', 'zurdo', 'zuzar', 'duplo', 'fisco', 'otoño', 'raido', 'raja', 'rebel', 'reyo', 'riste', 'rizos', 'robar', 'rojo', 'sabio', 'vasta'];
    let diccionario6 = diccionario.filter( palabra => palabra.length == 6 )
    let diccionario5 = diccionario.filter( palabra => palabra.length == 5 )
    let diccionario4 = diccionario.filter( palabra => palabra.length == 4 )
    let diccionario3 = diccionario.filter( palabra => palabra.length == 3 )
    const palabra = diccionario5[ Math.floor( Math.random() * diccionario5.length ) ];
    $("body").append(`<span class='palabra' style='display: none;'>${ palabra }</span>`);
    console.warn( palabra );
}

// CAMBIO DE LETRA SI YA HAY UNA ESCRITA
$(".fila input").on("keyup", function(event){
    let valor = $( this ).val();
    if ( valor.length >= 1 ) {
        // if ( !event.key.includes("Enter") && !event.key.includes("Shift") && !event.key.includes("Backspace") && !event.key.includes("sdDeleteds") && !event.key.includes("Delete") && !event.key.includes("ArrowLeft") && !event.key.includes("ArrowRight") && !event.key.includes("ArrowUp") && !event.key.includes("ArrowDown") && !event.key.includes("Tab") ) {
            // if ( !event.key.includes( "Backspace" ) && !event.key.includes( "sdDeleteds" ) && !event.key.includes( "Arrow" ) && !event.key.includes( "Tab" ) ) {
        if ( event.key.length == 1  ) {
            $( this ).val( event.key );
            $( this ).next().focus();
            // $($(".fila.activo > input")[0]).focus();
        }
    }
});

// APRETAR ENTER PARA ENVIAR LA PALABRA
{
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            $(".caja .fila .status[ data-estado='ready' ]").click();
        }
    });
}

// ACTIVA EL BOTON QUE PRUEBA SI ES LA FRASE CORRECTA
$(".fila input").on("keyup", function(){
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

// AGREGA FILAS
for ( let count = 0; count <= GLOBAL.cantidadFilas; count++ ) {
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

// VERIFICA SI ES CORRECTO
{
    const juegoTerminado = function({ estado, palabra }) {
        if ( estado ) {
            alert(`¡Correcto! ${ palabra }`);
        } else {
            console.warn( `No quedan mas intentos ${ palabra }` );
        }
    }
    const siguienteOportunidad = function() {
        console.warn( `siguiente oportunidad` );
        $(".fila.activo").next().addClass("activo");
    }
    
    $("body").on("click", ".caja .fila.habilitada .status[ data-estado='ready' ]", function () {
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
            console.warn( `son iguales!` );

            $(".caja .fila input").val("");
            $(".caja .fila .status").attr( "data-estado", "listen" );
            juegoTerminado({ estado: true, palabra: palabra.posible() });
        } else {
            console.warn( `NO son iguales ...` );
        }
        console.warn( `${ palabra.poradivinar } // ${ palabra.posible() }` );
    });
}