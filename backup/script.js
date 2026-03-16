/* ---------------- particles ---------------- */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W = canvas.width = innerWidth;
let H = canvas.height = innerHeight;
window.addEventListener('resize', ()=>{ W = canvas.width = innerWidth; H = canvas.height = innerHeight; initParticles(); });

let particles = [];
const N = Math.floor(Math.min(120, (W*H)/90000)); // responsive density

function rand(min,max){ return Math.random()*(max-min)+min; }

function initParticles(){
  particles = [];
  for(let i=0;i<N;i++){
    particles.push({
      x: rand(0,W),
      y: rand(0,H),
      r: rand(0.7,2.2),
      vx: rand(-0.2,0.2),
      vy: rand(-0.15,0.15),
      col: `rgba(60,80,85,${rand(0.08,0.28)})`
    });
  }
}
initParticles();

function draw(){
  ctx.clearRect(0,0,W,H);
  // gentle vignette
  const g = ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'rgba(255,255,255,0.06)');
  g.addColorStop(1,'rgba(0,0,0,0.02)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,W,H);

  // particles
  for(let p of particles){
    p.x += p.vx; p.y += p.vy;
    if(p.x < -20) p.x = W+20;
    if(p.x > W+20) p.x = -20;
    if(p.y < -20) p.y = H+20;
    if(p.y > H+20) p.y = -20;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = p.col;
    ctx.fill();
  }

  // lines between close particles (subtle)
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a=particles[i], b=particles[j];
      const dx=a.x-b.x, dy=a.y-b.y;
      const d2 = dx*dx+dy*dy;
      if(d2 < 9000){ // distance threshold squared
        ctx.beginPath();
        const alpha = 0.08*(1 - Math.sqrt(d2)/95);
        ctx.strokeStyle = `rgba(90,120,125,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();

/* ---------------- navbar active link ---------------- */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main > section');

function onScroll(){
  const sc = window.scrollY + window.innerHeight*0.35;
  let current = sections[0].id;
  sections.forEach(s=>{
    if(s.offsetTop <= sc) current = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+current));
}
window.addEventListener('scroll', onScroll);
onScroll();

/* ---------- reveal on scroll (intersection observer) ---------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // set CSS variable to stagger project cards
      const cards = entry.target.querySelectorAll('.project-card');
      cards.forEach((c,i)=> c.style.setProperty('--i', i));
      // unobserve slowly (still nice if revisited)
      io.unobserve(entry.target);
    }
  });
},{threshold:0.18});

reveals.forEach(r=>io.observe(r));

/* ---------- project card tilt (mouse) ---------- */
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (y - 0.5) * 8; // tilt amounts
    const ry = (x - 0.5) * -8;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
  });
  card.addEventListener('mouseleave', ()=> card.style.transform = '');
});

/* ---------- back to top ---------- */
const back = document.getElementById('backToTop');
window.addEventListener('scroll', ()=> back.style.display = (window.scrollY > 500) ? 'block' : 'none');
back.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ---------- copy email button ---------- */
document.getElementById('copyEmail')?.addEventListener('click', async ()=>{
  try {
    await navigator.clipboard.writeText('harshil.gorasiya.0011@gmail.com');
    alert('Email copied to clipboard');
  } catch(e){
    alert('Copy failed — you can email: harshil.gorasiya.0011@gmail.com');
  }
});

/* ---------- dynamic year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- small hero parallax on scroll ---------- */
const hero = document.querySelector('.hero-inner');
window.addEventListener('scroll', ()=>{
  const sc = window.scrollY;
  if(hero) hero.style.transform = `translateY(${sc * 0.08}px)`;
});

/* ---------- smooth anchor clicks (close to instant) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    // Allow normal external links
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}) }
  });
});
