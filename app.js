const mouse = {x: canvas.width / 2, y: canvas.height}
const mouseVelocity = fxrand();


function loop(){
  requestAnimationFrame(loop);
  animateParticleArray(particleArray);
  fadeCanvas()
}
loop();

setInterval(()=>{
  const n = Math.floor(particleArray.length * fxrand());
  particleArray[n].initPosition();
}, 100);
