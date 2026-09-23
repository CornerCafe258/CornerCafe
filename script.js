// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", (event) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        event.preventDefault(); // stop form submission
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
      } else {
        alert("Thank you for contacting Cafe Corner!");
      }
    });
  }

  // Navigation Highlight
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff9800"; // highlight current page
    }
  });
});

// Reveal sections on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});

