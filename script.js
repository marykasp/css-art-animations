const toggle = document.querySelector("#toggle");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

// Menu Selectors
const birthday = document.querySelector(".birthday");
const home = document.querySelector(".home");
const container = document.querySelector(".container");

// Sections
const celebrateSection = document.querySelector(".celebrate");
const sections = document.querySelectorAll("section");

toggle.addEventListener("click", () => {
  arrow.classList.toggle("active");
  menu.classList.toggle("active");
});

// Change body color background and show the css animation
birthday.addEventListener("click", (e) => {
  // iterate over all the sections and remove the show class
  sections.forEach((item) => item.classList.remove("show"));
  // add show class to section with id of celebrate
  celebrateSection.classList.add("show");

  // change background color of container
  body.style.backgroundColor = "#c9acd1";
});

home.addEventListener("click", () => {
  body.style.backgroundColor = "#73b0f4";
  sections.forEach((item) => item.classList.remove("show"));
});
