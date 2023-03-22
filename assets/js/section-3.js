$("#section-3").html(`<div class="px-10">
<h4 class="text-4xl font-bold title-color mb-10 relative about-me">
  Mi experiencia
</h4>
<div class="flex flex-col md:flex-row">
  <div class="section-3-left w-full md:w-3/12 text-color text-1xl">
    <div
      class="wnav flex md:flex-col flex-wrap justify-between md:border-r md:border-b-0 border-b mb-2 border-gray-600 sm:mr-4"
    >
      <li class="list-none mb-3 md:mr-4 ex-option relative">
        <button id="ex-1"
          type="button"
          class="px-2 py-1 hover:bg-[var(--rose-color)] duration-300 ease-in hover:text-[var(--title-color)]"
        >
          UNAMAD
        </button>
      </li>
      <li class="list-none mb-3 md:mr-4 ex-option relative">
        <button id="ex-2"
          type="button"
          class="px-2 py-1 hover:bg-[var(--rose-color)] duration-300 ease-in hover:text-[var(--title-color)]"
        >
          UNAMAD 222
        </button>
      </li>
      <li class="list-none mb-3 md:mr-4 ex-option relative">
        <button id="ex-3"
          type="button"
          class="px-2 py-1 hover:bg-[var(--rose-color)] duration-300 ease-in hover:text-[var(--title-color)]"
        >
          UNAMAD 333
        </button>
      </li>
      <li class="list-none mb-3 md:mr-4 ex-option relative">
        <button id="ex-4"
          type="button"
          class="px-2 py-1 hover:bg-[var(--rose-color)] duration-300 ease-in hover:text-[var(--title-color)]"
        >
          UNAMAD 444
        </button>
      </li>
      <li class="list-none mb-3 md:mr-4 ex-option relative">
        <button id="ex-5"
          type="button"
          class="px-2 py-1 hover:bg-[var(--rose-color)] duration-300 ease-in hover:text-[var(--title-color)]"
        >
          UNAMAD 555
        </button>
      </li>
    </div>
  </div>
  <div class="section-3-right md:w-9/12 w-full">

  </div>
</div>
</div>
<h1 class="absolute right-10 bottom-[200px] text-9xl font-bold num">
03
</h1>`);

$(document).ready(()=>{
  $('.section-3-right').html(experiencia('HOLA MUNDO 1', 'entidad 1', "2/3/2023,", "./assets/public/img/fondo-about.png"));

  $('#ex-1').click(()=>{
    $('.section-3-right').html(experiencia('HOLA MUNDO 1', 'entidad 1', "1/1/2023", "./assets/public/img/fondo-about.png"));
  });
  $('#ex-2').click(()=>{
    $('.section-3-right').html(experiencia('HOLA MUNDO 2', 'entidad 2', "2/3/2023", "./assets/public/img/page-ejemplo.webp"));
  });
  $('#ex-3').click(()=>{
    $('.section-3-right').html(experiencia('HOLA MUNDO 3', 'entidad 3', "12/3/2023", "./assets/public/img/fondo-about.png"));
  });
  $('#ex-4').click(()=>{
    $('.section-3-right').html(experiencia('HOLA MUNDO 4', 'entidad 4', "22/31/2023", "./assets/public/img/page-ejemplo.webp"));
  })
  $('#ex-5').click(()=>{
    $('.section-3-right').html(experiencia('HOLA MUNDO 5', 'entidad 5', "27/15/2023", "./assets/public/img/fondo-about.png"));
  });
  
})
function experiencia(titulo, entidad, fecha, image1){

  return `
  <h4 class="title-color text-2xl font-bold">
  ${titulo} -
  <a
    href=""
    class="text-[var(--rose-color)] border-b-2 border-[var(--ex-op-color)] hover:border-[var(--rose-color)]"
    >${entidad}</a
  >
</h4>
<span class="text-[var(--ex-op-color)]">${fecha}</span>
<p class="text-color text-1xl mb-2 text-justify">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
  tempora laborum explicabo, rem iusto doloremque quidem earum at
  labore. Vero magni culpa corporis quo expedita dolore sint beatae
  cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Optio sapiente voluptatum voluptas minima id asperiores,
  inventore ullam repellat corrupti atque sunt eius. Aperiam
  corporis nostrum minima id, commodi eveniet culpa?
</p>
<p class="text-color text-1xl mb-2 text-justify">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
  tempora laborum explicabo, rem iusto doloremque quidem earum at
  labore. Vero magni culpa corporis quo expedita dolore sint beatae
  cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Optio sapiente voluptatum voluptas minima id asperiores,
  inventore ullam repellat corrupti atque sunt eius. Aperiam
  corporis nostrum minima id, commodi eveniet culpa?
</p>
<div class="content-image flex gap-2 mb-4 h-[200px]">
  <img
    src="${image1}"
    class="w-6/12 object-cover"
    alt=""
  />
  <img
    src="./assets/public/img/page-ejemplo.webp"
    class="w-6/12 object-cover"
    alt=""
  />
</div>

<a
  href=""
  id=""
  class="text-[var(--text-color)] text-3xl hover:text-[var(--title-color)] bg-rose-800  hover:bg-black ease-in duration-300 rounded-full p-2"
  ><i class="bi bi-link-45deg"></i
></a>
  `
}
