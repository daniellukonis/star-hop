


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
