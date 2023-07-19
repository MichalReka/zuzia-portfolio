
document.getElementById('footer').innerHTML = "© Zuzanna Kuszyk, "+new Date().getFullYear();

function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");

  document.getElementById("hamburger-open").classList.toggle("hidden");
  document.getElementById("hamburger-open").classList.toggle("block");
  document.getElementById("hamburger-close").classList.toggle("hidden");
  document.getElementById("hamburger-close").classList.toggle("block");
}
