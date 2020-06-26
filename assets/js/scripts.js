// -------------------------------
// Loader
// -------------------------------
myVar = setTimeout(showPage, 1000);
function showPage() {
    $('#IDloaderContainer').hide(500);
}

// -------------------------------
// Ocultar Mostrar Barra de navegacion  
// -------------------------------
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.pageYOffset > 20 || document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById("scrollNavbar").style.top = "0px";
    } else {
        document.getElementById("scrollNavbar").style.top = "-150px";
        document.getElementById("navbarToggler").classList.add(['collapsed']);
        document.getElementById("navbarSupportedContent").classList.remove(['show']);
    }
}

// -------------------------------
// Smooth scroll
// -------------------------------
!(function ($) {
    "use strict";


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400, 'easeInOutExpo');
        return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox();
        });
    });


    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

