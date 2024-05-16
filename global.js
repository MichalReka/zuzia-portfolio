
document.getElementById('footer').innerHTML = "© Zuzanna Kuszyk, "+new Date().getFullYear();

document.querySelectorAll('a[href^="#nav"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });

  if(window.scrollY < 30){
    anchor.classList.add('hidden');
  }
  else{
    anchor.classList.remove('hidden');
  }

  window.addEventListener('scroll', function() {
    if(window.scrollY < 30){
      anchor.classList.add('hidden');
    }
    else{
      anchor.classList.remove('hidden');
    }
  });
});

function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");

  document.getElementById("hamburger-open").classList.toggle("hidden");
  document.getElementById("hamburger-open").classList.toggle("block");
  document.getElementById("hamburger-close").classList.toggle("hidden");
  document.getElementById("hamburger-close").classList.toggle("block");
}

