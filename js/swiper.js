// Initialize Swiper
    const swiper = new Swiper('#projectSlider', {
        // Basic settings
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        
        // Navigation
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Touch settings
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        },
        
        // Effects
        effect: 'slide',
        speed: 400,
        
        // Accessibility
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
        }
    });