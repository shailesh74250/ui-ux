// script.js
const images = document.querySelector('.carousel-images');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

const updateCarousel = () => {
    const width = images.children[0].clientWidth;
    images.style.transform = `translateX(${-currentIndex * width}px)`;
};

// Next button click
nextButton.addEventListener('click', () => {
    if (currentIndex < images.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarousel();
});

// Previous button click
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.children.length - 1; // Loop to the last image
    }
    updateCarousel();
});

// Auto-slide every 3 seconds
setInterval(() => {
    if (currentIndex < images.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}, 3000);
