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
