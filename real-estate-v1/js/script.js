// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            mobileMenu.classList.add('hidden');
        }
    });
});

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for Counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Carousel Functionality
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('#carouselTrack > div');
const indicators = document.querySelectorAll('.carousel-indicator');

function getTotalSlides() {
    return Math.ceil(slides.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));
}

function updateCarousel() {
    const totalSlides = getTotalSlides();
    const slideWidth = window.innerWidth >= 1024 ? 33.333 : window.innerWidth >= 768 ? 50 : 100;
    const translateX = -currentSlide * slideWidth;
    track.style.transform = `translateX(${translateX}%)`;
    
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.remove('bg-slate-300');
            indicator.classList.add('bg-amber-500');
        } else {
            indicator.classList.remove('bg-amber-500');
            indicator.classList.add('bg-slate-300');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Auto-scroll Testimonials
let testimonialIndex = 0;
const testimonialsContainer = document.getElementById('testimonialsContainer');
const testimonialSlides = document.querySelectorAll('#testimonialsContainer > div');

function updateTestimonials() {
    const translateX = -testimonialIndex * 100;
    testimonialsContainer.style.transform = `translateX(${translateX}%)`;
}

setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    updateTestimonials();
}, 5000);

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-2xl');
    } else {
        header.classList.remove('shadow-2xl');
    }
});

