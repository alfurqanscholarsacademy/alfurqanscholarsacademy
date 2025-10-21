// Mobile menu toggle
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

// Side Popup Functionality
function showPopup() {
    document.getElementById('askAlimPopup').style.right = '20px';
}

function closePopup() {
    document.getElementById('askAlimPopup').style.right = '-400px';
}

// Show popup 8 seconds after page load
window.addEventListener('load', function() {
    setTimeout(function() {
        showPopup();
    }, 8000);
});

// Close popup when clicking outside (for overlay - though we removed overlay)
document.addEventListener('click', function(e) {
    const popup = document.getElementById('askAlimPopup');
    if (!popup.contains(e.target) && e.target !== hamburger) {
        closePopup();
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 95, 45, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#2c5f2d';
        navbar.style.backdropFilter = 'none';
    }
});

// Course card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe course cards for animation
document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe video cards for animation
document.querySelectorAll('.video-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe gallery images for animation
document.querySelectorAll('.gallery-img').forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'translateY(20px)';
    img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(img);
});

// WhatsApp enrollment with course name
function enrollWithWhatsApp(courseName) {
    const message = `I want to enroll in ${courseName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923023003330?text=${encodedMessage}`, '_blank');
}

// Add click event to all enroll buttons
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        enrollWithWhatsApp(courseName);
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard accessibility for popup
document.addEventListener('keydown', function(e) {
    const popup = document.getElementById('askAlimPopup');
    if (e.key === 'Escape' && popup.style.right === '20px') {
        closePopup();
    }
});

// Enhanced WhatsApp integration
function initWhatsAppIntegration() {
    // Add WhatsApp floating button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/923023003330?text=I%20want%20to%20enroll%20in%20a%20course';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.style.cssText = `
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 20px;
        right: 20px;
        background-color: #25d366;
        color: white;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s;
    `;
    
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#128C7E';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#25d366';
    });
    
    document.body.appendChild(whatsappBtn);
}

// Video background optimization
function optimizeVideoBackground() {
    const videoBg = document.querySelector('.video-bg iframe');
    if (videoBg) {
        // Add loading attribute for better performance
        videoBg.setAttribute('loading', 'lazy');
    }
}

// Initialize all features
function initWebsite() {
    initWhatsAppIntegration();
    optimizeVideoBackground();
    
    // Add subtle animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initWebsite();
});

// Console welcome message
console.log('🕌 Welcome to Al Furqan Scholars Academy Website!');
console.log('📞 Contact: +923023003330');
console.log('📧 Email: muftiakmalqtv2@gmail.com');
console.log('🎥 Prize Distribution Video: Active');
