
document.addEventListener("DOMContentLoaded", function () {

  //  toggle mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

 
  //  reveal elements on scroll
  const revealElements = document.querySelectorAll(".reveal, .ai-card, .sdaia-text, .sdaia-image");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 120);
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


// scroll gallery 
document.addEventListener("DOMContentLoaded", () => {
  const scrollGallery = document.getElementById("scrollGallery");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  const scrollAmount = 420; 

  if (btnLeft) {
    btnLeft.addEventListener("click", () => {
      scrollGallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

  if (btnRight) {
    btnRight.addEventListener("click", () => {
      scrollGallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});

// for slid img 
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 5000);
});