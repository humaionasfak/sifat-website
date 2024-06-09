const menuBtn = document.querySelector(".toggle_btn");
const menu = document.querySelector(".nav_menu");
const closeBtn = document.querySelector(".close_btn");
const blackBg = document.querySelector(".showBack-bg");

function closeNavbar(e) {
  if (
    e.target.classList.contains("ri-close-large-fill") ||
    e.target.classList.contains("showBack-bg")
  ) {
    menu.classList.remove("show-menu");
    blackBg.classList.remove("show");
  }
}
menuBtn.addEventListener("click", () => {
  menu.classList.add("show-menu");
  blackBg.classList.add("show");
});

closeBtn.addEventListener("click", closeNavbar);
blackBg.addEventListener("click", closeNavbar);

const a = document.querySelectorAll("span");
a.forEach((w) => {
  w.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const swiper = new Swiper(".swiper_active", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoPlay: true,
  effect: "cards",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
