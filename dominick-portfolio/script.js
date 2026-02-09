// Future interactivity goes here
console.log("Site loaded. Let's build something great.");
window.addEventListener("scroll", function () {
  const header = document.querySelector(".floating-header");
  const hero = document.querySelector("#hero");

  if (window.scrollY > hero.offsetHeight - 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax effect for hero background
window.addEventListener("scroll", function () {
  const hero = document.getElementById("hero");
  let offset = window.scrollY * 0.6; // adjust 0.5 for stronger/slower effect
  hero.style.backgroundPositionY = `${offset}px`;
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
