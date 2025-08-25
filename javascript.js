const imagesContainer = document.querySelector('.images');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = document.querySelectorAll('.images img');

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector('.images');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const images = document.querySelectorAll('.images img');

    let currentIndex = 0;

    function updateCarousel() {
        if (images.length === 0) return;
        const imageWidth = images[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(imagesContainer).gap) || 0;
        imagesContainer.style.transform = `translateX(-${currentIndex * (imageWidth + gap)}px)`;
    }

    rightArrow?.addEventListener('click', () => {
        const maxIndex = images.length - 3;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftArrow?.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

//meny småskärmar
const hamburger = document.getElementById('hamburger');
const meny = document.getElementById('menyKnapp');

hamburger.addEventListener('click', () => {
    meny.classList.toggle('show');
});




//scrollknappen
document.addEventListener("DOMContentLoaded", function () {
    // Hitta knappen
    const scrollToTopButton = document.getElementById("scrollToTop");

    // När användaren scrollar ner, visa knappen
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";  // Visa knappen
        } else {
            scrollToTopButton.style.display = "none";  // Dölj knappen
        }
    };

    // När knappen klickas på, scrolla till toppen
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // Detta ger en smidig scrollning
        });
    });
});

