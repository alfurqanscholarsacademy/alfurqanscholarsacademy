// script.js — popups logic + page-specific behaviour

// POPUP ITEMS (rotate)
const POPUP_ITEMS = [
  { title: "Ask Alim", text: "Ask our scholars a Shariah question via email.", label: "Ask via Email", href: "mailto:muftiakmalqtv2@gmail.com" },
  { title: "Enroll Now", text: "Enroll for our Dars-e-Nizami & short courses via WhatsApp.", label: "Enroll", href: "https://wa.me/923023003330?text=I%20want%20to%20enroll" },
  { title: "Tafseer Course", text: "Join Tafseer-e-Qur'an classes — start today.", label: "View Courses", href: "#courses" }
];

let popupIndex = 0;
const createPopup = () => {
  let p = document.querySelector('.popup');
  if (!p) {
    p = document.createElement('div');
    p.className = 'popup';
    document.body.appendChild(p);
  }
  return p;
};

function showPopupNow(item) {
  const p = createPopup();
  p.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p><a href="${item.href}" target="_blank">${item.label}</a>`;
  p.style.display = 'block';
  // auto hide after 6.5s
  setTimeout(()=>{ if (p) p.style.display = 'none'; }, 6500);
}

// Show popups on Home and Courses only
function startPopupRotation() {
  // decide if we are on home or courses
  const path = window.location.pathname;
  const hash = window.location.hash || '';
  const onHome = hash === '' || hash === '#home' || path.endsWith('/') || path.endsWith('index.html');
  const onCourses = hash.includes('courses') || path.includes('courses.html');

  if(!onHome && !onCourses) return; // nothing

  setInterval(()=> {
    const item = POPUP_ITEMS[popupIndex % POPUP_ITEMS.length];
    showPopupNow(item);
    popupIndex++;
  }, 10000); // every 10 seconds
}

document.addEventListener('DOMContentLoaded', ()=>{
  startPopupRotation();
});
