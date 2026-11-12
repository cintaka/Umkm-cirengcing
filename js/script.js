
"use strict";

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Membuka dan menutup menu HP
menuToggle.addEventListener("click", function () {
    const menuTerbuka = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuTerbuka);
    menuToggle.setAttribute(
        "aria-label",
        menuTerbuka ? "Tutup menu" : "Buka menu"
    );

    menuToggle.textContent = menuTerbuka ? "✕" : "☰";
});

// Menutup menu setelah tautan dipilih
navMenu.querySelectorAll("a").forEach(function (tautan) {
    tautan.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
        menuToggle.textContent = "☰";
    });
});
