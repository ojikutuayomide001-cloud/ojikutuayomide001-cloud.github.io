// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// Close mobile menu after clicking a navigation link

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


// Close menu using Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// =========================
// GALLERY LIGHTBOX
// =========================

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const lightboxClose = document.getElementById("lightbox-close");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.showModal();

    });

});


// Close lightbox with close button

lightboxClose.addEventListener("click", function () {

    lightbox.close();

});


// Close lightbox by clicking outside the image

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.close();

    }

});


// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();