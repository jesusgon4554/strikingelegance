document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-button");
    const navLinks = document.getElementById("nav-links");
  
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

  