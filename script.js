// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Popup functionality - FIXED
const popup = document.getElementById('askAlimPopup');

function showPopup() {
    popup.classList.add('show');
}

function closePopup() {
    popup.classList.remove('show');
}

// Show popup after 10 seconds - FIXED TIMING
setTimeout(showPopup, 10000);

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (popup.classList.contains('show') && !popup.contains(e.target)) {
        closePopup();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #3d8b40 100%)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
    }
});

// Course card animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.course-card, .askalim-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// WhatsApp enrollment
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        const message = `Assalamu Alaikum! I want to enroll in ${courseName} course.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/923023003330?text=${encodedMessage}`, '_blank');
    });
});

// Page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
});
