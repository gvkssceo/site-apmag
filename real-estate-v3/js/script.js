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
function animateCounter(element, target, duration = 2500) {
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
}, 7000);

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('border-b-amber-600/30');
    } else {
        header.classList.remove('border-b-amber-600/30');
    }
});

// Parallax effect for luxury images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-slow');
    parallaxElements.forEach(element => {
        const speed = 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

