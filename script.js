document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider Logic
    const images = document.querySelectorAll('.hero-img');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Event Listeners for controls
    nextBtn.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    // Auto-slide every 5 seconds
    let slideInterval = setInterval(nextImage, 5000);

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextImage, 5000);
    }

    // Back to top functionality
    const backToTopBtn = document.querySelector('.foot-panel1');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
