const cube = document.getElementById('cube');

let isDragging = false;
let lastX;
let lastY;

cube.addEventListener('mousedown', e => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mousemove', e => {
  if (isDragging) {
    const diffX = e.clientX - lastX;
    const diffY = e.clientY - lastY;
    const cube = document.querySelector('.cube');

    cube.style.transform = `rotateX(${diffY * 20.5}deg) rotateY(${-diffX * 20.5}deg)`;

    lastX = e.clientX;
    lastY = e.clientY;
  }
});

document.addEventListener('mouseup', e => {
  isDragging = false;
});