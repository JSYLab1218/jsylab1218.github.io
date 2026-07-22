const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".dropdown-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      const parent = button.closest(".dropdown");
      parent.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900 && navMenu) {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

document.getElementById("year")?.append(new Date().getFullYear());