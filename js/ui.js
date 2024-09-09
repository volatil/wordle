import { reiniciarJuego } from "./main.js";


const menuToggle = function() {
    $( "nav.menu[ data-menu='fondo' ]" ).toggle();
    $( "nav.menu[ data-menu='contenido' ]" ).toggle();
}
const modalToggle = function() {
    $( ".elmodal[ data-tipo='fondo' ]" ).toggle();
    $( ".elmodal[ data-tipo='contenido' ]" ).toggle();
}

// MENU => TOGGLE
{
    $("nav.menu[ data-menu='fondo' ], nav[ data-menu='contenido' ] > .cerrar").on("click", function(){
        menuToggle();
    })
    $("header .hamburguesa").on("click", function(){
        menuToggle();
    })
}

// MENU => CLICK
{
    $("nav > ul > li").on("click", function(){
        const trigger = $( this ).attr("data-click");
        
        switch ( trigger ) {
            case "reiniciar":
                reiniciarJuego();
                menuToggle();
                break;
            case "merindo":
                const palabra = $("span.palabra").html();
                alert(`La palabra era: ${ palabra }`)
                break;
            case "instrucciones":
                $(".elmodal[ data-tipo='contenido' ] > .contenido").html(`
                    <h5>Como jugar</h5>
                    <p>Adivina la palabra en 6 instentos</p>
                    <ul>
                        <li>Cada suposición debe ser una palabra válida de 5 letras.</li>
                        <li>El color de las fichas cambiará para mostrar qué tan cerca estuvo tu suposición de la palabra.</li>
                    </ul>
                    <div class="ejemplo">
                        <div>
                            <p class="exacto">R</p>
                            <p>A</p>
                            <p>T</p>
                            <p>O</p>
                            <p>N</p>
                        </div>
                        <p>La <strong>R</strong> está en la palabra y en el lugar correcto.</p>
                    </div>
                    <div class="ejemplo">
                        <div>
                            <p class="casi">P</p>
                            <p>A</p>
                            <p>T</p>
                            <p>O</p>
                            <p>N</p>
                        </div>
                        <p><strong>P</strong> está en la palabra pero en el lugar equivocado.</p>
                    </div>
                `);
                menuToggle();
                modalToggle();
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
        modalToggle();
    });
}