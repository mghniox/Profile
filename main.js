AOS.init({ duration: 1500, once: true });

const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

new Typed("#typing", {
  strings: ["Mughni Anbiya Wiguna", "SOFTWARE ENGINEER"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Achievement
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");

let index = 0;
const maxIndex = slide.length - 2;

const animasi = () => {
  slider.style.transform = `translateX(-${index * 50}%)`;
  slider.style.transition = "0.5s ease";
};

next.addEventListener("click", () => {
  index++;

  if (index > maxIndex) index = 0;
  animasi();
});

prev.addEventListener("click", () => {
  index--;

  if (index < 0) index = maxIndex;
  animasi();
});
