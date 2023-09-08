"use strict";

/**
 * Add Event Listener untuk Multiple Elements
 */

function addEventOnElement(elements, event, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(event, callback);
  }
}

/**
 * Navbar Toggle Mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navbarToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// navbarToggleBtn.addEventListener("click", toggleNavbar);
// overlay.addEventListener("click", toggleNavbar);

addEventOnElement([navbarToggleBtn, overlay], "click", toggleNavbar);
