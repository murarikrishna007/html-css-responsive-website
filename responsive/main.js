var navToggle = document.querySelector(".nav-toggle");
var navItems = document.querySelector(".nav-items");
var isOpenNav = false;
function showNav() {
  if (!isOpenNav) {
    navItems.style.display = "block";
    isOpenNav = true;
  } else {
    navItems.style.display = "none";
    isOpenNav = false;
  }
}
navToggle.addEventListener("click", showNav);
