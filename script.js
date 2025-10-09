// ----------------- Shader integration for hero canvas -----------------
const canvas = document.getElementById('myCanvas');
let gl = null;
let program = null;
let iResolutionLocation = null;
let iMouseLocation = null;
let iTimeLocation = null;

function initGL() {
  if (!canvas) return;
  try {
    gl = canvas.getContext('webgl2');
  } catch (e) {
    gl = null;
  }
  if (!gl) {
    // hide canvas if WebGL2 not supported
    canvas.style.display = 'none';
    return;
  }

  // Vertex shader
  const vsSource = `#version 300 es
  in vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }`;

  // Fragment shader from the page
  const fsScript = document.getElementById('fragment-shader-2d');
  const fsSource = fsScript ? fsScript.textContent.trim() : '';

  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vsSource);
  gl.compileShader(vs);
  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error('Vertex shader compile error:', gl.getShaderInfoLog(vs));
    return;
  }

  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fsSource);
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error('Fragment shader compile error:', gl.getShaderInfoLog(fs));
    return;
  }

  program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return;
  }
  gl.useProgram(program);

  // vertex buffer (full-screen quad)
  const positions = new Float32Array([
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
     1.0,  1.0,
  ]);
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  // uniforms
  iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
  iMouseLocation = gl.getUniformLocation(program, 'iMouse');
  iTimeLocation = gl.getUniformLocation(program, 'iTime');

  // mouse fallback
  gl.uniform2f(iMouseLocation, 0.0, 0.0);
}

// Resize canvas to match hero size
function resizeHeroCanvas() {
  const hero = document.querySelector('.hero-block');
  if (!canvas || !hero) return;
  const rect = hero.getBoundingClientRect();
  const dpr = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
}

// mouse coords for shader (flipped Y)
canvas && canvas.addEventListener('mousemove', (ev) => {
  if (!gl || !iMouseLocation) return;
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) * (canvas.width / rect.width);
  const y = canvas.height - (ev.clientY - rect.top) * (canvas.height / rect.height);
  gl && gl.uniform2f(iMouseLocation, x, y);
});

// on resize, recompute canvas
window.addEventListener('resize', () => {
  resizeHeroCanvas();
  if (gl && iResolutionLocation) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
  }
});

// render loop
let startTime = performance.now();
function renderShader() {
  if (!gl || !program) return;
  resizeHeroCanvas();
  const now = performance.now();
  const t = (now - startTime) * 0.001;
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0,0,0,0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
  gl.uniform1f(iTimeLocation, t);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(renderShader);
}

// initialize GL then start
initGL();
resizeHeroCanvas();
requestAnimationFrame(renderShader);

// ----------------- UI & behaviour (nav, form, animations) -----------------
// Intersection Observer for fade-in
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.18 });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// Nav buttons: smooth scroll to anchors
document.querySelectorAll('.buttons button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Formspree AJAX submit with friendly UI
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Thanks — message sent!';
        setTimeout(() => statusEl.textContent = '', 5000);
      } else {
        const err = await res.json();
        statusEl.textContent = (err.errors && err.errors[0] && err.errors[0].message) || 'Oops — something went wrong.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error — try again later.';
    }
  });
}

// dynamic year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
