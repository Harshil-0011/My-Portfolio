// === Particle Background with Lines ===
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
const numParticles = 80;
const colors = ["#1c1c1c","#eae6e0","#ffffff"];

function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle{
  constructor(){ this.reset(); }
  reset(){
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*canvas.height;
    this.size=Math.random()*2+1;
    this.color=colors[Math.floor(Math.random()*colors.length)];
    this.vx=(Math.random()-0.5)*0.3;
    this.vy=(Math.random()-0.5)*0.3;
  }
  update(){ this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height) this.reset(); }
  draw(){ ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fillStyle=this.color; ctx.globalAlpha=0.4; ctx.fill(); }
}

for(let i=0;i<numParticles;i++) particles.push(new Particle());

function drawLines(){
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x;
      const dy=particles[i].y-particles[j].y;
      const distance=Math.sqrt(dx*dx+dy*dy);
      if(distance<120){
        ctx.beginPath();
        ctx.strokeStyle=`rgba(100,100,100,${1-distance/120})`;
        ctx.lineWidth=1;
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw();});
  drawLines();
  requestAnimationFrame(animate);
}
animate();

// === Section Scroll + Nav Dots ===
const sections=document.querySelectorAll(".page");
const dots=document.querySelectorAll(".dot");
function activateDot(index){ dots.forEach(dot=>dot.classList.remove("active")); dots[index].classList.add("active"); }
window.addEventListener("scroll", ()=>{
  let current=0;
  sections.forEach((section,i)=>{ if(window.pageYOffset>=section.offsetTop-100) current=i; });
  activateDot(current);
});
dots.forEach((dot,index)=>{ dot.addEventListener("click",()=>{ sections[index].scrollIntoView({behavior:"smooth"}); }); });

// === Back to Top Button ===
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{ backToTop.style.display=(window.scrollY>300)?"block":"none"; });
backToTop.addEventListener("click",()=>{ window.scrollTo({top:0,behavior:"smooth"}); });

// === Fade-in Sections ===
const faders=document.querySelectorAll(".fade-in .content");
function checkFade(){
  faders.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    const height=window.innerHeight;
    if(top<height-100) el.classList.add("visible");
  });
}
window.addEventListener("scroll",checkFade);
window.addEventListener("load",checkFade);
