// Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all') {
            $('.post-box').show("1000");
        }
        else{
            $('.post-box').not('.' + value).hide("1000");
            $('.post-box').filter('.' + value).show("1000");
        }
    });
    // Activar el boton
    $('.filter-item').click(function (){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});

// Encabezado Scrolling
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Regresar pagina anterior
const btnBack = document.getElementById('regre-btn');

if(btnBack){
    btnBack.addEventListener('click', () => {
        window.history.back();
    });
}

// Aviso cookies
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}else{
    dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({'event': 'cookies-aceptadas'});
});