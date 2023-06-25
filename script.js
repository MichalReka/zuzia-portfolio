document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");

  document.getElementById("hamburger-open").classList.toggle("hidden");
  document.getElementById("hamburger-open").classList.toggle("block");
  document.getElementById("hamburger-close").classList.toggle("hidden");
  document.getElementById("hamburger-close").classList.toggle("block");
}
