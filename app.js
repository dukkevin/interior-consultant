// When click on ".toggler" class, add "open" class to ".menu-btn"
// When checkbox is checked class is added, when checkbox is uncheck class is removed
const togglerBtn = document.querySelector(".toggler");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
togglerBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
