const GLOBAL = {
    cantidadFilas: 10,
}

// CAMBIO DE LETRA SI YA HAY UNA ESCRITA
$(".fila input").on("keyup", function(event){
    let valor = $( this ).val();
    if ( valor.length >= 1 ) {
        $( this ).val( event.key );
    }
})

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