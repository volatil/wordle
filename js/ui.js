import { reiniciarJuego } from "./main.js";

// TOGGLE MENU
{
    $("nav.menu[ data-menu='fondo' ], nav[ data-menu='contenido' ] > .cerrar").on("click", function(){
        $( "nav.menu[ data-menu='fondo' ]" ).toggle();
        $( "nav.menu[ data-menu='contenido' ]" ).toggle();
    })
    $("header .hamburguesa").on("click", function(){
        $( "nav.menu[ data-menu='fondo' ]" ).toggle();
        $( "nav.menu[ data-menu='contenido' ]" ).toggle();
    })
}

// CLICK MENU
{
    $("nav > ul > li").on("click", function(){
        const trigger = $( this ).attr("data-click");
        
        switch ( trigger ) {
            case "reiniciar":
                reiniciarJuego();
                break;
            case "merindo":
                console.warn( `mer` );
                break;
        
            default:
                console.warn( `no seteado` );
                break;
        }
    })
}