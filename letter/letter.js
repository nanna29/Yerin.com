const nameInput1 = document.getElementById("nameInput1");
const nameInput2 = document.getElementById("nameInput2");
const sendButton = document.getElementById("sendButton");
const modal = document.getElementById("Modal");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;

  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

nameInput1.addEventListener("input", () => {
  nameInput2.value = nameInput1.value;
});

nameInput2.addEventListener("input", () => {
  nameInput1.value = nameInput2.value;
});

sendButton.addEventListener("click", () => {
  let isEmpty = false;
  const inputs = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");

  for (const input of inputs) {
    if (input.value.trim() === "") {
      isEmpty = true;
      break;
    }
  }

  if (!isEmpty) {
    for (const textarea of textareas) {
      if (textarea.value.trim() === "") {
        isEmpty = true;
        break;
      }
    }
  }

  if (isEmpty) {
    alert("빈칸을 모두 작성해주세요.");
  } else {
    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    inputs.forEach((input) => (input.value = ""));
    textareas.forEach((textarea) => (textarea.value = ""));
  }
});
