const nameInput1 = document.getElementById("nameInput1");
const nameInput2 = document.getElementById("nameInput2");
const sendButton = document.getElementById("sendButton");
const modal = document.getElementById("Modal");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

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

  // Check if any input or textarea is empty
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

  // If any input or textarea is empty, show alert
  if (isEmpty) {
    alert("빈칸을 모두 작성해주세요.");
  } else {
    // Show modal only when all input fields are filled
    modal.style.display = "block";

    // When the user clicks on the close button, close the modal
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    // Clear all input and textarea fields
    inputs.forEach((input) => (input.value = ""));
    textareas.forEach((textarea) => (textarea.value = ""));
  }
});
