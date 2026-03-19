// Initialize Lenis Smooth Scroll
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// ScrollSpy Logic
const observerOptions = {
  root: null,
  rootMargin: '-10% 0px -80% 0px',
  threshold: [0, 0.1, 0.2]
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      if (id) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll('section[id]').forEach(section => observer.observe(section));

// Initial trigger for ScrollSpy
const triggerScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  let currentId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
      currentId = section.getAttribute('id');
    }
  });

  if (currentId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }
};

window.addEventListener('load', triggerScrollSpy);
window.addEventListener('scroll', triggerScrollSpy);

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

// Cursor & Focus effects
const interactables = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .project-item, .skill-tag, .code-block, input, textarea');
interactables.forEach(el => {
  const handleIn = () => {
    gsap.to(cursor, {
      scale: 3,
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "1px solid white",
      duration: 0.3
    });
  };

  const handleOut = () => {
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "white",
      border: "none",
      duration: 0.3
    });
  };

  el.addEventListener('mouseenter', handleIn);
  el.addEventListener('mouseleave', handleOut);
  el.addEventListener('focus', (e) => {
    handleIn();
    const rect = el.getBoundingClientRect();
    gsap.to(cursor, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      duration: 0.3
    });
  });
  el.addEventListener('blur', handleOut);
});

// Bento Items Entrance Animation
gsap.from(".bento-item", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out"
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
