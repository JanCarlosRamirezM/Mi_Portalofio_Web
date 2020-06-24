

// -------------------------------
// Ocultar Mostrar Barra de navegacion  
// -------------------------------
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.pageYOffset > 20 || document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20) {
        document.getElementById("scrollNavbar").style.top = "0px";
    } else {
        document.getElementById("scrollNavbar").style.top = "-90px";
    }
}