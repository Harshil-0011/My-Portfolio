// ---------- Shader background (full-page, WebGL2) ----------
const canvas = document.getElementById('bgCanvas');
const fsScript = document.getElementById('fragment-shader-2d');
let gl = null, program = null;
let iResolutionLoc = null, iTimeLoc = null, iMouseLoc = null;

function initGL(){
  if (!canvas || !fsScript) return false;
  try { gl = canvas.getContext('webgl2'); } catch(e){ gl = null; }
  if (!gl) { canvas.style.display='none'; return false; }

  // vertex shader
  const vs = `#version 300 es
  in vec2 a_position;
  void main(){ gl_Position = vec4(a_position,0.0,1.0); }`;

  const fs = fsScript.textContent.trim();

  const vshader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vshader, vs); gl.compileShader(vshader);
  if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) {
    console.error('VS error:', gl.getShaderInfoLog(vshader)); return false;
  }

  const fshader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fshader, fs); gl.compileShader(fshader);
  if (!gl.getShaderParameter(fshader, gl.COMPILE_STATUS)) {
    console.error('FS error:', gl.getShaderInfoLog(fshader)); return false;
  }

  program = gl.createProgram();
  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program error:', gl.getProgramInfoLog(program)); return false;
  }
  gl.useProgram(program);

  // full screen quad
  const pos = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  // uniforms
  iResolutionLoc = gl.getUniformLocation(program, 'iResolution');
  iTimeLoc = gl.getUniformLocation(program, 'iTime');
  iMouseLoc = gl.getUniformLocation(program, 'iMouse');
  gl.uniform2f(iMouseLoc, 0, 0);

  return true;
}

function resizeCanvas(){
  const dpr = Math.max(window.devicePixelRatio || 1, 1);
  const w = Math.max(1, Math.floor(window.innerWidth * dpr));
  const h = Math.max(1, Math.floor(window.innerHeight * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w; canvas.height = h;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    if (gl && iResolutionLoc) {
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
    }
  }
}

canvas && canvas.addEventListener('mousemove', (e) => {
  if (!gl || !iMouseLoc) return;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvas.width / rect.width);
  const y = canvas.height - (e.clientY - rect.top) * (canvas.height / rect.height);
  gl.uniform2f(iMouseLoc, x, y);
});

let start = performance.now();
function render(){
  if (!gl || !program) return;
  resizeCanvas();
  const t = (performance.now() - start) * 0.001;
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0,0,0,0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
  gl.uniform1f(iTimeLoc, t);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

const webglReady = initGL();
if (webglReady) { resizeCanvas(); requestAnimationFrame(render); }
else { canvas.style.display = 'none'; document.querySelectorAll('.hero-overlay').forEach(o=>o.style.background='linear-gradient(rgba(28,28,28,0.88),rgba(28,28,28,0.88))'); }

// ---------- Minimal UI behavior (fade-in, nav, form) ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.18 });
document.querySelectorAll('.fade-in, .section').forEach(el => io.observe(el));

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    const href = a.getAttribute('href');
    if (href.length > 1) {
      ev.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Formspree AJAX submit
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    status.textContent = 'Sending…';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data });
      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks — message sent!';
        setTimeout(()=> status.textContent = '', 4500);
      } else {
        const j = await res.json();
        status.textContent = (j.errors && j.errors[0] && j.errors[0].message) || 'Submission failed.';
      }
    } catch (err) {
      status.textContent = 'Network error — please try again later.';
    }
  });
}

// set year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// resize on window change
window.addEventListener('resize', resizeCanvas);
