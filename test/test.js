// CAMBIO DE LETRA SI YA HAY UNA ESCRITA
$(".fila input").on("keyup", function(event){
    let valor = $( this ).val();
    if ( valor.length >= 1 ) {
        $( this ).val( event.key );
    }
})

