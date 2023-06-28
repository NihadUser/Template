const header = document.getElementById("head");
window.addEventListener("scroll", () => {
  //   console.log(window.pageYOffset);
  if (window.pageYOffset > 1000) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
const link = document.getElementById("link");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    link.classList.add("visible");
  } else {
    link.classList.remove("visible");
  }
});
