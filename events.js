const menuBtn = document.querySelector("#nav-icon1");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const menuSecBtn = document.querySelector("#nav-icon2");
let menuSecOpen = false;
menuSecBtn.addEventListener("click", () => {
  if (!menuSecOpen) {
    menuSecBtn.classList.add("open");
    menuSecOpen = true;
  } else {
    menuSecBtn.classList.remove("open");
    menuOpen = false;
  }
});

const menuThirdBtn = document.querySelector("#nav-icon3");
let menuThirdOpen = false;
menuThirdBtn.addEventListener("click", () => {
  if (!menuThirdOpen) {
    menuThirdBtn.classList.add("open");
    menuThirdOpen = true;
  } else {
    menuThirdBtn.classList.remove("open");
    menuThirdOpen = false;
  }
});

const menuFourthBtn = document.querySelector("#nav-icon4");
let menuFourthOpen = false;
menuFourthBtn.addEventListener("click", () => {
  if (!menuFourthOpen) {
    menuFourthBtn.classList.add("open");
    menuFourthOpen = true;
  } else {
    menuFourthBtn.classList.remove("open");
    menuFourthOpen = false;
  }
});
