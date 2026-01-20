// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Add ARIA attribute for accessibility
    const isExpanded = !mobileMenu.classList.contains('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
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

// Auto-scroll Testimonials
let testimonialIndex = 0;
const testimonialsContainer = document.getElementById('testimonialsContainer');
const testimonialSlides = document.querySelectorAll('#testimonialsContainer > div');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');

function updateTestimonials() {
    const translateX = -testimonialIndex * 100;
    testimonialsContainer.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    testimonialIndicators.forEach((indicator, index) => {
        if (index === testimonialIndex) {
            indicator.classList.remove('bg-gray-300');
            indicator.classList.add('bg-cyan-600');
        } else {
            indicator.classList.remove('bg-cyan-600');
            indicator.classList.add('bg-gray-300');
        }
    });
}

// Add click handlers to indicators
testimonialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        testimonialIndex = index;
        updateTestimonials();
    });
});

// Auto-scroll every 6 seconds
if (testimonialSlides.length > 0) {
    setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        updateTestimonials();
    }, 6000);
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (!scrollToTopBtn && typeof document !== 'undefined') {
    const btn = document.createElement('button');
    btn.id = 'scrollToTopBtn';
    btn.className = 'scroll-to-top';
    btn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.setAttribute('title', 'Back to top');
    document.body.appendChild(btn);
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollToTopBtn');
    if (btn) {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
});

const scrollBtn = document.getElementById('scrollToTopBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ======= EMAILJS CONTACT FORM INTEGRATION =======

// Initialize EmailJS when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    // Get your Public Key from: https://dashboard.emailjs.com/admin/integration
    // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS Public Key
    emailjs.init("80Zy2LkLQ835VX806");
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const messageDiv = document.getElementById('contactMessage');
    
    if (contactForm && messageDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const form = this;
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            submitButton.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Hide previous messages
            messageDiv.classList.add('hidden');
            
            // Get form data
            const formData = {
                from_name: document.getElementById('fullName').value.trim(),
                from_email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim(),
                to_email: document.getElementById('email').value.trim(), // User's email (for reply-to)
                reply_to: document.getElementById('email').value.trim() // Reply-to address
            };
            
            // Validate form data
            if (!formData.from_name || !formData.from_email || !formData.message) {
                messageDiv.className = 'mb-4 p-4 rounded-xl text-sm sm:text-base font-medium bg-red-100 text-red-800 border-2 border-red-300';
                messageDiv.textContent = 'Please fill in all required fields.';
                messageDiv.classList.remove('hidden');
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
                return;
            }
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS dashboard
            emailjs.send('service_g1yokdc', 'template_87gmk9x', formData)
                .then(function(response) {
                    // Success
                    messageDiv.className = 'mb-4 p-4 rounded-xl text-sm sm:text-base font-medium bg-green-100 text-green-800 border-2 border-green-300';
                    messageDiv.textContent = 'Message sent successfully! We\'ll get back to you soon.';
                    messageDiv.classList.remove('hidden');
                    
                    // Reset form
                    form.reset();
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
                    
                    // Scroll to message
                    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        messageDiv.classList.add('hidden');
                    }, 5000);
                }, function(error) {
                    // Error
                    messageDiv.className = 'mb-4 p-4 rounded-xl text-sm sm:text-base font-medium bg-red-100 text-red-800 border-2 border-red-300';
                    messageDiv.textContent = 'Failed to send message. Please try again later or contact us directly.';
                    messageDiv.classList.remove('hidden');
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
                    
                    // Scroll to message
                    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    console.error('EmailJS Error:', error);
                });
        });
    }
});

