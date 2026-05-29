// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= NAVBAR BG =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.85)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.35)";
  }
});

// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const plan = document.getElementById("plan").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
`🏋️ New Gym Booking

Name: ${name}
Phone: ${phone}
Email: ${email}
Plan: ${plan}
Message: ${message}`;

  const whatsappURL =
`https://wa.me/917376704008?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

  alert("Booking request sent successfully!");
  bookingForm.reset();
});

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
