const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

const popup = document.getElementById('askAlimPopup');

function showPopup() {
    popup.classList.add('show');
}

function closePopup() {
    popup.classList.remove('show');
}

setTimeout(showPopup, 10000);

document.addEventListener('click', (e) => {
    if (popup.classList.contains('show') && !popup.contains(e.target)) {
        closePopup();
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #3d8b40 100%)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
    }
});

document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        const message = `Assalamu Alaikum! I want to enroll in ${courseName} course.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/923023003330?text=${encodedMessage}`, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
});
