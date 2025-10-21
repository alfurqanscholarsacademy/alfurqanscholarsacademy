// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Popup functionality
const popup = document.getElementById('askAlimPopup');

function showPopup() {
    popup.classList.add('show');
}

function closePopup() {
    popup.classList.remove('show');
}

// Show popup after 10 seconds
setTimeout(showPopup, 10000);

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !e.target.classList.contains('ask-alim-trigger')) {
        closePopup();
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Course card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe course cards for animation
document.querySelectorAll('.course-card, .askalim-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// WhatsApp enrollment with course name
function enrollViaWhatsApp(courseName) {
    const message = `I want to enroll in ${courseName} course. Please provide more information.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923023003330?text=${encodedMessage}`, '_blank');
}

// Add click event to all enroll buttons
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        enrollViaWhatsApp(courseName);
    });
});

// Gallery image lightbox (basic implementation)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.9)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '2000';
        lightbox.style.cursor = 'pointer';
        
        // Create enlarged image
        const enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.objectFit = 'contain';
        enlargedImg.style.borderRadius = '10px';
        
        lightbox.appendChild(enlargedImg);
        document.body.appendChild(lightbox);
        
        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Form validation for future contact forms
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Al Furqan Scholars Academy website loaded successfully');
    
    // Add loading animation
    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
    loader.style.display = 'flex';
    loader.style.justifyContent = 'center';
    loader.style.alignItems = 'center';
    loader.style.zIndex = '9999';
    loader.style.color = 'white';
    loader.style.fontSize = '1.5rem';
    loader.innerHTML = '<div>Al Furqan Scholars Academy</div>';
    
    document.body.appendChild(loader);
    
    // Remove loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                if (document.body.contains(loader)) {
                    document.body.removeChild(loader);
                }
            }, 500);
        }, 1000);
    });
});
