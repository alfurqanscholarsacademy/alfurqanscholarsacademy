// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );
}

// Smooth scroll (keep external links working)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Enroll buttons → WhatsApp with course name
document.querySelectorAll('.enroll-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const courseName = this.closest('.course-card')?.querySelector('h3')?.textContent?.trim() || 'your course';
    const message = `Assalamu Alaikum! I want to enroll in ${courseName} course.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923023003330?text=${encodedMessage}`, '_blank');
  });
});

// ===============================
// YouTube Background Hero Player
// ===============================
const YT_VIDEO_ID = 'LxRpMb1Cm-0'; // from your link

let ytPlayer;
window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('player', {
    videoId: YT_VIDEO_ID,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      playsinline: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      playlist: YT_VIDEO_ID, // required for loop to work
      disablekb: 1,
      showinfo: 0 // mostly ignored now, but harmless
    },
    events: {
      onReady: (e) => {
        try {
          e.target.mute();
          e.target.playVideo();
        } catch(_) {}
      },
      onStateChange: (e) => {
        // Ensure continuous loop (some browsers stop after end)
        if (e.data === YT.PlayerState.ENDED) {
          e.target.seekTo(0);
          e.target.playVideo();
        }
      }
    }
  });
};

// Keep the navbar gradient dynamic (optional polish)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  navbar.style.background =
    window.scrollY > 100
      ? 'linear-gradient(135deg, #2c5f2d 0%, #3d8b40 100%)'
      : 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('Website loaded successfully');
});
