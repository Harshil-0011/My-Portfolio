// ---------------- Shader (hero-only) + WebGL2 bootstrap ----------------
const canvas = document.getElementById('myCanvas');
const fsScript = document.getElementById('fragment-shader-2d');
let gl = null;
let program = null;
let iResolutionLoc = null;
let iTimeLoc = null;
let iMouseLoc = null;

// init WebGL2
function initWebGL() {
  if (!canvas || !fsScript) return false;
  try { gl = canvas.getContext('webgl2'); } catch(e) { gl = null; }
  if (!gl) { canvas.style.display = 'none'; return false; }

  // vertex shader
  const vsSource = `#version 300 es
  in vec2 a_position;
  void main(){ gl_Position = vec4(a_position, 0.0, 1.0); }`;

  const fsSource = fsScript.textContent.trim();

  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vsSource);
  gl.compileShader(vs);
  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error('Vertex shader error:', gl.getShaderInfoLog(vs));
    return false;
  }

  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fsSource);
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error('Fragment shader error:', gl.getShaderInfoLog(fs));
    return false;
  }

  program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return false;
  }
  gl.useProgram(program);

  // full-screen quad
  const positions = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const posLoc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  // locations
  iResolutionLoc = gl.getUniformLocation(program, 'iResolution');
  iTimeLoc = gl.getUniformLocation(program, 'iTime');
  iMouseLoc = gl.getUniformLocation(program, 'iMouse');

  // default mouse
  gl.uniform2f(iMouseLoc, 0, 0);

  return true;
}

// size canvas to hero section
function resizeCanvasToHero() {
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;
  const rect = hero.getBoundingClientRect();
  const dpr = Math.max(window.devicePixelRatio || 1, 1);
  const w = Math.max(1, Math.floor(rect.width * dpr));
  const h = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w; canvas.height = h;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    if (gl && iResolutionLoc) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
    }
  }
}

// mouse -> shader
canvas && canvas.addEventListener('mousemove', (ev) => {
  if (!gl || !iMouseLoc) return;
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) * (canvas.width / rect.width);
  const y = canvas.height - (ev.clientY - rect.top) * (canvas.height / rect.height);
  gl.uniform2f(iMouseLoc, x, y);
});

// render loop
let start = performance.now();
function renderLoop() {
  if (!gl || !program) return;
  resizeCanvasToHero();
  const t = (performance.now() - start) * 0.001;
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0,0,0,0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
  gl.uniform1f(iTimeLoc, t);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(renderLoop);
}

// init
const webglAvailable = initWebGL();
if (webglAvailable) {
  resizeCanvasToHero();
  requestAnimationFrame(renderLoop);
} else {
  // fallback: keep overlay visible and ensure high contrast
  document.querySelector('.hero-overlay').style.background = 'linear-gradient(rgba(28,28,28,0.88), rgba(28,28,28,0.88))';
}

// ---------------- UI: fade-ins, nav, form submit ---------------

// IntersectionObserver for fade-in
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if (e.isIntersecting) e.target.classList.add('visible'); });
},{ threshold: 0.18 });
document.querySelectorAll('.fade-in').forEach(el=> io.observe(el));

// smooth scroll on nav clicks
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});

// Formspree AJAX submission with feedback
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    statusEl.textContent = 'Sending…';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Thanks — message sent!';
        setTimeout(()=> statusEl.textContent = '', 4500);
      } else {
        const result = await res.json();
        statusEl.textContent = (result.errors && result.errors[0] && result.errors[0].message) || 'Submission failed.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error — please try again later.';
    }
  });
}

// dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
