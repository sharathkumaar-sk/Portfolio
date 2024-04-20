        function slideUpCoverPage() {
            var coverPage = document.querySelector('.cover-page');
            var mainPage = document.querySelector('.main-page');
            
            // Slide up animation for cover page
            coverPage.style.transform = 'translateY(-100%)';
            coverPage.addEventListener('transitionend', function() {
                coverPage.style.display = 'none'; // Hide the cover page after sliding up
                mainPage.classList.add('active'); // Make the main page visible with opacity transition
            }, {once: true});
        }

        // Automatically slide up the cover page after 1 second (adjust as needed)
        setTimeout(slideUpCoverPage, 1000);