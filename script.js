// Shader background (keeps your existing visual)
const canvas = document.getElementById('bgCanvas');
const fsScript = document.getElementById('fragment-shader-2d');
let gl = null, program = null;
if (canvas && fsScript) {
  try {
    gl = canvas.getContext('webgl2');
  } catch (e) { gl = null; }
}
if (gl) {
  const vsSrc = `#version 300 es
  in vec2 a_position; void main(){ gl_Position = vec4(a_position,0.0,1.0); }`;
  const fsSrc = fsScript.textContent.trim();

  const vs = gl.createShader(gl.VERTEX_SHADER); gl.shaderSource(vs, vsSrc); gl.compileShader(vs);
  const fs = gl.createShader(gl.FRAGMENT_SHADER); gl.shaderSource(fs, fsSrc); gl.compileShader(fs);

  program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program); gl.useProgram(program);

  const positions = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
  const posBuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, posBuf); gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const posLoc = gl.getAttribLocation(program, 'a_position'); gl.enableVertexAttribArray(posLoc); gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const iResolution = gl.getUniformLocation(program, 'iResolution');
  const iTime = gl.getUniformLocation(program, 'iTime');

  function resize() {
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      canvas.style.width = window.innerWidth + 'px'; canvas.style.height = window.innerHeight + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    if (iResolution) gl.uniform2f(iResolution, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  let start = performance.now();
  function frame() {
    if (!gl) return;
    gl.uniform1f(iTime, (performance.now() - start) * 0.001);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(frame);
  }
  frame();
} else {
  // fallback - hide the canvas
  if (canvas) canvas.style.display = 'none';
}

// ---------- Scroll snap + animations + dots ----------
const main = document.getElementById('snap');
const sections = Array.from(document.querySelectorAll('.snap-section'));
const panels = Array.from(document.querySelectorAll('.panel'));
const dots = Array.from(document.querySelectorAll('.dot'));
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

// IntersectionObserver to reveal panels and update active dot
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const panel = entry.target.querySelector('.panel');
      if (panel) panel.classList.add('visible');

      // update dots
      const id = entry.target.id;
      dots.forEach(d => d.classList.toggle('active', d.dataset.target === `#${id}`));
    }
  });
}, { threshold: 0.6 });

sections.forEach(s => {
  io.observe(s);
});

// dot click -> scroll
dots.forEach(d => {
  d.addEventListener('click', () => {
    const target = document.querySelector(d.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// handle keyboard arrow navigation for accessibility
let currentIndex = 0;
function updateCurrentIndex() {
  const top = main.scrollTop;
  for (let i = 0; i < sections.length; i++) {
    if (top >= sections[i].offsetTop - sections[i].offsetHeight/2) currentIndex = i;
  }
}
main.addEventListener('wheel', () => { updateCurrentIndex(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = Math.min(currentIndex + 1, sections.length - 1);
    sections[next].scrollIntoView({ behavior: 'smooth' });
    currentIndex = next;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = Math.max(currentIndex - 1, 0);
    sections[prev].scrollIntoView({ behavior: 'smooth' });
    currentIndex = prev;
  }
});

// ---------- Formspree AJAX submit ----------
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.action) return;
    const fd = new FormData(form);
    statusEl.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: form.method || 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd,
      });
      if (res.ok) {
        statusEl.textContent = 'Danke — Nachricht gesendet!';
        form.reset();
        setTimeout(() => statusEl.textContent = '', 4000);
      } else {
        const j = await res.json();
        statusEl.textContent = (j.errors && j.errors[0] && j.errors[0].message) || 'Fehler beim Senden.';
      }
    } catch (err) {
      statusEl.textContent = 'Netzwerkfehler — bitte später versuchen.';
    }
  });
}

// set accessible aria-active on dots (optional)
dots.forEach(d => {
  d.addEventListener('focus', () => dots.forEach(x => x.setAttribute('aria-pressed', x === d)));
});

// initial reveal for first panel
document.addEventListener('DOMContentLoaded', () => {
  const firstPanel = sections[0].querySelector('.panel');
  if (firstPanel) firstPanel.classList.add('visible');
});
