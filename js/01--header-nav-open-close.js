
// Click on hamburger icon and show or hide navigation bar 
// let hamburger = document.querySelector(".hamburger-icon");

let hamburger = document.querySelector(".header__hamburger");
let nav = document.querySelector(".nav");

let navHamburgerImage = document.querySelector(".header__hamburger");

let navbarIconText = document.querySelector(".navbar-icon-text");

function showNav(){
  document.body.classList.toggle("navBarFullScreen"); 
  nav.classList.toggle("showNavonClick");
  hamburger.classList.toggle("hamburger-nav--on");
  navbarIconText.classList.toggle("navbar-icon-text-on");
}

hamburger.addEventListener("click", showNav);













