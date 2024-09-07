$("nav.menu[ data-menu='fondo' ], nav[ data-menu='contenido' ] > .cerrar").on("click", function(){
    $( "nav.menu[ data-menu='fondo' ]" ).toggle();
    $( "nav.menu[ data-menu='contenido' ]" ).toggle();
})
$("header .hamburguesa").on("click", function(){
    $( "nav.menu[ data-menu='fondo' ]" ).toggle();
    $( "nav.menu[ data-menu='contenido' ]" ).toggle();
})