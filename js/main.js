const navToggle = document.querySelector(".nav_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("hidden");
});
document.onclick = function (event) {
  if (event.target !== links && event.target !== navToggle) {
    links.classList.add("hidden");
  }
}
// Active menu
var btnContainer = document.getElementById("myNav");
var btns = btnContainer.getElementsByClassName("nav-menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}