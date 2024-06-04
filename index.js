const scrollToTopBtn = document.getElementById("toTopBtn");
const scrollToTopLink2 = document.getElementById("scrollToTop2");

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopLink2.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
