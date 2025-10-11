// Shader setup
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl2');
const fragmentShaderScript = document.getElementById('fragment-shader-2d');
const fragmentShaderSource = fragmentShaderScript.textContent.trim();

const vertexShaderSource = `#version 300 es
in vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

const posLoc = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

const resLoc = gl.getUniformLocation(program, 'iResolution');
const mouseLoc = gl.getUniformLocation(program, 'iMouse');
const timeLoc = gl.getUniformLocation(program, 'iTime');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = canvas.height - (e.clientY - rect.top);
  gl.uniform2f(mouseLoc, x, y);
});

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.uniform2f(resLoc, canvas.width, canvas.height);
  gl.uniform1f(timeLoc, performance.now() * 0.001);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}
render();

// Scroll + Indicator logic
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      document.querySelector(".dot.active")?.classList.remove("active");
      document.querySelector(`.dot[data-section="${id}"]`)?.classList.add("active");
      document.querySelector("nav a.active")?.classList.remove("active");
      document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const section = document.getElementById(dot.dataset.section);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
