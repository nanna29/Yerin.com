document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 현재 페이지의 URL 가져오기
  var currentUrl = window.location.pathname.split("/").pop();

  // 모든 네비게이션 링크 가져오기
  var navLinks = document.querySelectorAll(".nav-link");

  // 각 링크와 현재 URL 비교하여 일치하는 경우 클래스 추가
  navLinks.forEach(function (link) {
    var linkUrl = link.getAttribute("href").split("/").pop();
    if (linkUrl === currentUrl) {
      link.classList.add("active");
    }
  });
});
