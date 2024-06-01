document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;

  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

// 이미지 높이 랜덤하게
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img, index) => {
    const randomHeight = 150 + Math.floor(Math.random() * 200);
    img.style.height = `${randomHeight}px`;
  });
});
