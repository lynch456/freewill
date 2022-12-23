const bgText = document.querySelector("#left-wrap p");
const bgImg = document.querySelector("#right-wrap img");
const scrollTop = document.getElementById("scroll-top");

document.addEventListener("scroll", () => {
  if (scrollY > 300) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }

  if (scrollY > 280) {
    bgText.classList.add("scroll-animation");
  }
  if (scrollY > 320) {
    bgImg.classList.add("scroll-animation_img");
  }
  if (scrollY > 6030) {
    bgImg.classList.add("scroll-animation_img");
    scrollTop.style.transform = "translateY(-200px)";
  } else {
    scrollTop.style.transform = "translateY(0px)";
    scrollTop.style.transition = ".5s";
  }
  console.log(scrollY);
});
scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const allMenu = document.getElementById("all-menu");
const allMenuList = document.getElementById("all-menu_open");
const closeMenu = document.getElementById("close-btn");
const menu = document.querySelector("nav");
allMenu.addEventListener("click", () => {
  document.body.classList.add("open");
  document.body.style.overflowY = "hidden";
  allMenu.style.visibility = "hidden";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  document.body.classList.remove("open");
  document.body.style.overflowY = "auto";
  allMenu.style.visibility = "visible";
  closeMenu.style.display = "none";
});
