$('.section-2-right').html(Cube);

function Cube(){
  return `<div class="cube select-none" id="cube">
  <div
    class="cube-side cube-front text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
  <div
    class="cube-side cube-back text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
  <div
    class="cube-side cube-top text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
  <div
    class="cube-side cube-bottom text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
  <div
    class="cube-side cube-left text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
  <div
    class="cube-side cube-right text-white text-center flex justify-center items-center"
  >
    <ul class="">
      <li>NODE JS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>FIREBASE</li>
      <li>LARAVEL</li>
      <li>EXPRESS</li>
    </ul>
  </div>
</div>`
}

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