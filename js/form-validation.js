document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupCloseBtn = document.getElementById("popupCloseBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value.trim();

    if (!name || !email || !type || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    popupOverlay.classList.add("active");
    

    form.reset();
  });

  popupCloseBtn.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});