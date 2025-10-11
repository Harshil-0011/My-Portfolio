// Smooth section scroll
const sections = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".dot");

function activateDot(index) {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

window.addEventListener("scroll", () => {
  let current = 0;
  sections.forEach((section, i) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - window.innerHeight / 2) {
      current = i;
    }
  });
  activateDot(current);
});

// Clickable dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});
