document.addEventListener("DOMContentLoaded", function () {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");

  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const modal3 = document.getElementById("modal3");

  const closeButtons = document.querySelectorAll(".closeBtn");

  card1.addEventListener("click", () => {
    modal1.style.display = "block";
  });

  card2.addEventListener("click", () => {
    modal2.style.display = "block";
  });

  card3.addEventListener("click", () => {
    modal3.style.display = "block";
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});
