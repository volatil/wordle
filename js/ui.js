import { reiniciarJuego } from "./main.js";


const cerrarMenu = function() {
    $( "nav.menu[ data-menu='fondo' ]" ).toggle();
    $( "nav.menu[ data-menu='contenido' ]" ).toggle();
}
const abrirMenu = function() {
    $( "nav.menu[ data-menu='fondo' ]" ).toggle();
    $( "nav.menu[ data-menu='contenido' ]" ).toggle();
}

// MENU => TOGGLE
{
    $("nav.menu[ data-menu='fondo' ], nav[ data-menu='contenido' ] > .cerrar").on("click", function(){
        cerrarMenu();
    })
    $("header .hamburguesa").on("click", function(){
        abrirMenu();
    })
}

// MENU => CLICK
{
    $("nav > ul > li").on("click", function(){
        const trigger = $( this ).attr("data-click");
        
        switch ( trigger ) {
            case "reiniciar":
                reiniciarJuego();
                cerrarMenu();
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

// MODAL => TOGGLE
{
    $(".elmodal[ data-tipo='fondo' ], .elmodal[ data-tipo='contenido' ] > .cerrar").on("click", function(){
        $( ".elmodal[ data-tipo='fondo' ]" ).toggle();
        $( ".elmodal[ data-tipo='contenido' ]" ).toggle();
    });
}