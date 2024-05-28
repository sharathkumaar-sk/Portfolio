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

function changeFavicon(iconPath) {
    var link = document.createElement('link');
    var oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = iconPath;
    link.href = iconPath + '?v=' + Date.now();
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

function setFaviconBasedOnTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark theme
        changeFavicon('Assets/icon-dark.png');
    } 
    else {
        // Light theme
        changeFavicon('Assets/icon-light.png');
    }
}

// Set the favicon based on the theme when the page loads
document.addEventListener('DOMContentLoaded', setFaviconBasedOnTheme);

// Listen for changes in the theme preference
if (window.matchMedia) {
    var darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeQuery.addListener(setFaviconBasedOnTheme);
}
setInterval(setFaviconBasedOnTheme, 0);


function scrollToTop() {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

function openLink(url) {
        window.open(url, '_blank');
}
