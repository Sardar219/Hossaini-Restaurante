let Afghani = document.querySelectorAll(".afghani");
let Forgine = document.querySelectorAll(".forgine");
document.querySelector("#Afgani_button").addEventListener("click", function () {
  for (let i = 0; i < Forgine.length; i++) {
    Forgine[i].classList.add("hidden");
  }
  for (let i = 0; i < Afghani.length; i++) {
    Afghani[i].classList.remove("hidden");
  }
});
document
  .querySelector("#Forgine_button")
  .addEventListener("click", function () {
    for (let i = 0; i < Forgine.length; i++) {
      Forgine[i].classList.remove("hidden");
    }
    for (let i = 0; i < Afghani.length; i++) {
      Afghani[i].classList.add("hidden");
    }
  });
