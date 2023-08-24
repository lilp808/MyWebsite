document.addEventListener("DOMContentLoaded", function() {
    // Slideshow functionality
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;

    // Function to show the next slide
    function showSlide() {
        slides[currentSlide].classList.remove("fade-in");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("fade-in");
    }

    // Show the first slide initially
    slides[currentSlide].classList.add("fade-in");

    // Start the slideshow
    setInterval(showSlide, 3000); // Change slide every 3 seconds (adjust as desired)
});