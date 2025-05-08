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

document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("bugReportForm");
        const popupOverlay = document.getElementById("popupOverlay");
        const popupCloseBtn = document.getElementById("popupCloseBtn");
        const submitBtn = document.getElementById("submitBtn");

        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const server = document.getElementById("server");
        const bugType = document.getElementById("bugType");
        const description = document.getElementById("description");
        const reproducibility = document.getElementById("reproducibility");
        const consent = document.getElementById("consent");

        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const serverError = document.getElementById("serverError");
        const bugTypeError = document.getElementById("bugTypeError");
        const descriptionError = document.getElementById("descriptionError");
        const reproducibilityError = document.getElementById(
          "reproducibilityError"
        );
        const consentError = document.getElementById("consentError");
        const serverStatus = document.getElementById("serverStatus");


        server.addEventListener("change", function () {
          const selectedServer = this.value;
          let statusHTML = "";

          if (selectedServer) {
            const statuses = {
              na: { status: "online", text: "Online" },
              eu: { status: "online", text: "Online" },
              ap: { status: "maintenance", text: "Maintenance" },
              kr: { status: "online", text: "Online" },
              latam: { status: "offline", text: "Connection Issues" },
            };

            const serverInfo = statuses[selectedServer];
            statusHTML = `
              <div class="status-dot status-${serverInfo.status}"></div>
              <span class="status-text">${serverInfo.text}</span>
            `;
          }

          serverStatus.innerHTML = statusHTML;
        });

        function validateUsername(value) {
          if (!value) {
            return "Username is required";
          }
          if (value.length < 3 || value.length > 16) {
            return "Username must be between 3 and 16 characters";
          }
          if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return "Username can only contain letters, numbers, and underscores";
          }
          return "";
        }

        function validateEmail(value) {
          if (!value) {
            return "Email is required";
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return "Please enter a valid email address";
          }
          return "";
        }

        function validateServer(value) {
          if (!value) {
            return "Please select a server";
          }
          return "";
        }

        function validateBugType(value) {
          if (!value) {
            return "Please select a bug type";
          }
          return "";
        }

        function validateDescription(value) {
          if (!value) {
            return "Description is required";
          }
          if (value.length < 20) {
            return "Please provide a more detailed description (at least 20 characters)";
          }
          return "";
        }

        function validateReproducibility(value) {
          if (!value) {
            return "Please select how often the bug occurs";
          }
          return "";
        }

        function validateConsent(checked) {
          if (!checked) {
            return "You must give consent to submit the report";
          }
          return "";
        }

        username.addEventListener("blur", function () {
          const error = validateUsername(this.value.trim());
          showError(this, usernameError, error);
        });

        email.addEventListener("blur", function () {
          const error = validateEmail(this.value.trim());
          showError(this, emailError, error);
        });

        server.addEventListener("change", function () {
          const error = validateServer(this.value);
          showError(this, serverError, error);
        });

        bugType.addEventListener("change", function () {
          const error = validateBugType(this.value);
          showError(this, bugTypeError, error);
        });

        description.addEventListener("blur", function () {
          const error = validateDescription(this.value.trim());
          showError(this, descriptionError, error);
        });

        reproducibility.addEventListener("change", function () {
          const error = validateReproducibility(this.value);
          showError(this, reproducibilityError, error);
        });

        consent.addEventListener("change", function () {
          const error = validateConsent(this.checked);
          showError(this, consentError, error);
        });

        function showError(input, errorElement, errorMessage) {
          if (errorMessage) {
            input.classList.add("invalid");
            errorElement.textContent = errorMessage;
            errorElement.classList.add("error-visible");
            return false;
          } else {
            input.classList.remove("invalid");
            errorElement.textContent = "";
            errorElement.classList.remove("error-visible");
            return true;
          }
        }


        form.addEventListener("submit", function (e) {
          e.preventDefault();


          const usernameValid = showError(
            username,
            usernameError,
            validateUsername(username.value.trim())
          );
          const emailValid = showError(
            email,
            emailError,
            validateEmail(email.value.trim())
          );
          const serverValid = showError(
            server,
            serverError,
            validateServer(server.value)
          );
          const bugTypeValid = showError(
            bugType,
            bugTypeError,
            validateBugType(bugType.value)
          );
          const descriptionValid = showError(
            description,
            descriptionError,
            validateDescription(description.value.trim())
          );
          const reproducibilityValid = showError(
            reproducibility,
            reproducibilityError,
            validateReproducibility(reproducibility.value)
          );
          const consentValid = showError(
            consent,
            consentError,
            validateConsent(consent.checked)
          );


          if (
            usernameValid &&
            emailValid &&
            serverValid &&
            bugTypeValid &&
            descriptionValid &&
            reproducibilityValid &&
            consentValid
          ) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Submitting...";

            setTimeout(() => {

              popupOverlay.classList.add("active");

              form.reset();
              serverStatus.innerHTML = "";

              submitBtn.disabled = false;
              submitBtn.textContent = "Submit Report";
            }, 1000);
          } else {

            const firstError = document.querySelector(".error-visible");
            if (firstError) {
              firstError.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
        });

        const formInputs = form.querySelectorAll("input, select, textarea");
        formInputs.forEach((input) => {
          input.addEventListener("input", function () {
            if (input.classList.contains("invalid")) {
              input.classList.remove("invalid");
              const errorId = input.id + "Error";
              const errorElement = document.getElementById(errorId);
              if (errorElement) {
                errorElement.textContent = "";
                errorElement.classList.remove("error-visible");
              }
            }
          });
        });

        popupCloseBtn.addEventListener("click", () => {
          popupOverlay.classList.remove("active");
        });
      });