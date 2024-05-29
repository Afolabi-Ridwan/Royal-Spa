const xMark = document.querySelector(".xMark");
const bars = document.getElementById("bars");
let menu = document.querySelector(".menu");

bars.addEventListener("click", function () {
  console.log("clicked");
  menu.classList.add("active");
});

xMark.addEventListener("click", function () {
    menu.classList.remove("active");
});