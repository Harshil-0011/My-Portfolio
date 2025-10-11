// === Particle Background ===
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
const numParticles = 80;
const colors = ["#1c1c1c", "#eae6e0", "#ffffff"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.4;
    ctx.fill();
  }
}

for (let i = 0; i < numParticles; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

// === Section Scroll + Nav Dots ===
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
    if (pageYOffset >= sectionTop - window.innerHeight / 2) current = i;
  });
  activateDot(current);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});
