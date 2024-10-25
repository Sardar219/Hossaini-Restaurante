function anim() {
  document.querySelector("#baner div").style.transform = "translateY(0)";
}
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".info-box");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
