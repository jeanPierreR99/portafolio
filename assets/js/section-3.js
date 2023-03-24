$("#section-3").html(`<div class="px-10">
<h4 class="text-4xl font-bold title-color mb-10 relative about-me">
  Mi Experiencia
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

$(document).ready(() => {
  var url = "./assets/public/file-json/data.json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      $(".section-3-right").html(
        experiencia(
          response[0].title,
          response[0].entidad,
          response[0].fecha,
          response[0].image
        )
      );

      $("#ex-1").click(() => {
        $(".section-3-right").html(
          experiencia(
            response[0].title,
            response[0].entidad,
            response[0].fecha,
            response[0].image
          )
        );
      });

      $("#ex-2").click(() => {
        $(".section-3-right").html(
          experiencia(
            response[1].title,
            response[1].entidad,
            response[1].fecha,
            response[1].image
          )
        );
      });

      $("#ex-3").click(() => {
        $(".section-3-right").html(
          experiencia(
            response[2].title,
            response[2].entidad,
            response[2].fecha,
            response[2].image
          )
        );
      });

      $("#ex-4").click(() => {
        $(".section-3-right").html(
          experiencia(
            response[3].title,
            response[3].entidad,
            response[3].fecha,
            response[3].image
          )
        );
      });

      $("#ex-5").click(() => {
        $(".section-3-right").html(
          experiencia(
            response[4].title,
            response[4].entidad,
            response[4].fecha,
            response[4].image
          )
        );
      });

    });
});

function experiencia(titulo, entidad, fecha, image1) {
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
<div class="content-image flex mb-4 md:h-[350px] h-[250px] md:justify-around justify-between w-full">
  <img
    src="${image1}"
    class="w-5/12 object-cover ex-image relative"
    alt=""
  />
  <img
    src="./assets/public/img/page-ejemplo.webp"
    class="w-5/12 object-cover ex-image relative"
    alt=""
  />
</div>

<a
  href=""
  id=""
  class="text-[var(--text-color)] text-3xl hover:text-[var(--title-color)] bg-rose-800  hover:bg-black ease-in duration-300 rounded-full p-2"
  ><i class="bi bi-link-45deg"></i
></a>
  `;
}
