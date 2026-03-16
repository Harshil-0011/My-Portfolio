// Initialize Lenis Smooth Scroll
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    xPercent: -50,
    yPercent: -50,
    duration: 0.1,
    ease: "power2.out"
  });
});

// Cursor hover effects
const interactables = document.querySelectorAll('a, .btn-primary, .btn-secondary, .project-item, .skill-tag');
interactables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      scale: 3,
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "1px solid white",
      duration: 0.3
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "white",
      border: "none",
      duration: 0.3
    });
  });
});

// Bento Items Entrance Animation
gsap.from(".bento-item", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".bento-grid",
    start: "top 80%",
  }
});

// Text Reveal Animations
gsap.from(".reveal-text", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  delay: 0.2
});

gsap.from(".sub-reveal", {
  opacity: 0,
  duration: 1,
  delay: 0.8
});

// Background Blob Movement
gsap.to(".b1", {
  x: "30vw",
  y: "20vh",
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".b2", {
  x: "-20vw",
  y: "-30vh",
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".b3", {
  x: "10vw",
  y: "10vh",
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Year Update
document.getElementById('year').textContent = new Date().getFullYear();

// --- NEURAL NETWORK VISUALIZATION ---
const canvas = document.getElementById('viz-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let nodes = [];
const nodeCount = 30;
const connectionDist = 100;

function resize() {
  const rect = canvas.parentNode.getBoundingClientRect();
  width = canvas.width = rect.width;
  height = canvas.height = rect.height;
}

window.addEventListener('resize', resize);
resize();

class Node {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(112, 0, 255, 0.5)";
    ctx.fill();
  }
}

for (let i = 0; i < nodeCount; i++) {
  nodes.push(new Node());
}

function animateViz() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].update();
    nodes[i].draw();

    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < connectionDist) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(0, 212, 255, ${1 - dist / connectionDist})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateViz);
}

animateViz();
