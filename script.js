// === POPUP FUNCTIONALITY ===

// Define popup messages
const popups = [
  {
    title: "Ask Alim",
    message: "Have a Shariah question? Ask our scholars now!",
    linkText: "Ask Now",
    link: "mailto:muftiakmalqtv2@gmail.com"
  },
  {
    title: "Enroll Now",
    message: "Join our online Islamic courses today!",
    linkText: "View Courses",
    link: "#courses"
  },
  {
    title: "Madani Qaida",
    message: "Start your Qur’an journey with our beginner Madani Qaida class.",
    linkText: "Enroll",
    link: "https://wa.me/923023003330?text=I%20want%20to%20enroll"
  }
];

// Create popup container
const popupBox = document.createElement("div");
popupBox.classList.add("popup");
document.body.appendChild(popupBox);

let popupIndex = 0;

// Function to show popup
function showPopup() {
  const popup = popups[popupIndex];
  popupBox.innerHTML = `
    <h4>${popup.title}</h4>
    <p>${popup.message}</p>
    <a href="${popup.link}" target="_blank">${popup.linkText}</a>
  `;
  popupBox.style.display = "block";

  setTimeout(() => {
    popupBox.style.display = "none";
  }, 7000); // visible for 7 seconds

  popupIndex = (popupIndex + 1) % popups.length;
}

// Run popups every 10 seconds on Home or Courses
if (window.location.pathname === "/" || window.location.pathname.includes("courses")) {
  setInterval(showPopup, 10000);
}
