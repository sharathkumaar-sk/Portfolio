(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

function scrollToTop() {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
function scrolldown() {
    // Get the height of the viewport
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate the position to scroll to
    var currentPosition = window.scrollY || window.pageYOffset;
    var targetPosition = currentPosition + windowHeight;

    // Scroll to the target position with smooth behavior
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}