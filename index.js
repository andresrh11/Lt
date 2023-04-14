const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%, -${randomY}%)`);
});
