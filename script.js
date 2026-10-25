
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();
