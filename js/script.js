const toggle = document.querySelector("#toggle");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

// Menu Selectors
const birthday = document.querySelector(".birthday");
const home = document.querySelector(".home");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
const text = document.querySelector(".text");

// Sections
const celebrateSection = document.querySelector(".celebrate");
const sections = document.querySelectorAll("section");

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

toggle.addEventListener("click", () => {
  arrow.classList.toggle("active");
  menu.classList.toggle("active");
});

box.addEventListener("mouseover", () => {
  start();
  text.innerHTML = `<h2>Happy Birthday</h2>`;
});

box.addEventListener("mouseout", () => {
  stop();
});

// Change body color background and show the css animation
birthday.addEventListener("click", (e) => {
  // iterate over all the sections and remove the show class
  sections.forEach((item) => item.classList.remove("show"));

  // add show class to section with id of celebrate
  celebrateSection.classList.add("show");

  // change background color of container
  body.style.backgroundColor = "#c9acd1";
  text.innerHTML = "";
});

home.addEventListener("click", () => {
  stop();
  body.style.backgroundColor = "#73b0f4";
  sections.forEach((item) => item.classList.remove("show"));
});

window.addEventListener("load", () => {
  sections.forEach((item) => item.classList.remove("show"));
  celebrateSection.classList.add("show");
});
