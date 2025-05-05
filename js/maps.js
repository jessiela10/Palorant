document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".map-carousel").forEach((carousel) => {
          const inner = carousel.querySelector(".carousel-inner");
          const items = carousel.querySelectorAll(".carousel-item");
          const indicators = carousel.querySelectorAll(".indicator");
          const prevBtn = carousel.querySelector(".prev");
          const nextBtn = carousel.querySelector(".next");

          let currentIndex = 0;
          const itemCount = items.length;

          function updateCarousel() {
            items.forEach((item) => item.classList.remove("active"));
            indicators.forEach((ind) => ind.classList.remove("active"));

            items[currentIndex].classList.add("active");
            indicators[currentIndex].classList.add("active");

            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
          }

          nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
          });

          prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            updateCarousel();
          });

          indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
              currentIndex = index;
              updateCarousel();
            });
          });

          updateCarousel();

          setInterval(() => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
          }, 5000);
        });
      });