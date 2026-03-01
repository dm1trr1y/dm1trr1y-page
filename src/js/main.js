import "./swiper.js";
import "./api.js";
import "./loader.js";
import "./textRotation.js";

const mobileButtonOpen = document.querySelector(".nav-panel-menu-button");
const mobileButtonClose = document.querySelector(
  ".nav-panel-mobile-menu-button",
);
const mobileMenu = document.querySelector(".nav-panel-mobile");
const mobileMenuList = document.querySelector(".nav-panel-mobile-menu");

mobileButtonOpen.addEventListener("click", openMobileMenu);
mobileButtonClose.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.classList.add("show");
    document.body.classList.add("no-scroll");
  }, 500);
}

function closeMobileMenu() {
  document.body.classList.remove("no-scroll");
  mobileMenu.classList.remove("show");
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 500);
}
mobileMenuList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
