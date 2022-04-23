const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

function fadeCanvas(){
  context.save();
  context.fillStyle = '#00000008'
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
}
