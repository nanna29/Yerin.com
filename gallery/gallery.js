document.addEventListener("DOMContentLoaded", function () {
  // 현재 URL 가져오기
  var currentUrl = window.location.href;

  // 모든 nav-link 요소들을 가져오기
  var navLinks = document.querySelectorAll(".nav-link");

  // nav-link 요소들을 순회하며 현재 URL과 비교
  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img, index) => {
    const randomHeight = 150 + Math.floor(Math.random() * 200); // Height between 150px and 350px
    img.style.height = `${randomHeight}px`;
  });
});
