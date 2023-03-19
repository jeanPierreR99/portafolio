$('.content-cube').html(InnerCube());


function InnerCube(){
    return `<div class="cube-1 select-none" id="cube-1">
    <div
      class="cube-side-1 cube-front-1 text-white text-center flex justify-center items-center"
    ></div>
    <div
      class="cube-side-1 cube-back-1 text-white text-center flex justify-center items-center"
    ></div>
    <div
      class="cube-side-1 cube-top-1 text-white text-center flex justify-center items-center"
    ></div>
    <div
      class="cube-side-1 cube-bottom-1 text-white text-center flex justify-center items-center"
    ></div>
    <div
      class="cube-side-1 cube-left-1 text-white text-center flex justify-center items-center"
    ></div>
    <div
      class="cube-side-1 cube-right-1 text-white text-center flex justify-center items-center"
    ></div>
  </div>`;
  
}