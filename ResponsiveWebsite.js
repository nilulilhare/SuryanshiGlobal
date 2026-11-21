let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function updateSlides() {
    slides.forEach((slide, index) => {
        const position = (index - currentSlide) * 100;

        slide.style.transform = `translateX(${position}%)`;

        slide.classList.toggle("active", index === currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide =
        (currentSlide + direction + slides.length) % slides.length;

    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

// Show the first slide when the page loads
updateSlides();

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);