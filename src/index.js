import Swiper, { Pagination, Autoplay } from "swiper";

Swiper.use([Pagination, Autoplay]);

// configure Swiper to use modules
const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

const openMenuButton = document.getElementById("menu-burger");
const closeMenuButton = document.getElementById("close-menu");
const navigation = document.getElementsByClassName("navigation")[0];
openMenuButton.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open");
});

closeMenuButton.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open");
});
