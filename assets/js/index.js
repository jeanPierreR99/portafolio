$(window).on("scroll", function () {
  if ($(window).scrollTop() == 0) {
    $("#header").removeClass("add-header");
  }
  if ($(window).scrollTop() > 0) {
    $("#header").addClass("add-header");
  }
});
function saltarA() {
  var tiempo = 700;
  $("html, body").animate(
    { scrollTop: $("#section-1").offset().top},
    tiempo
  );
}
function saltarB() {
  var tiempo = 700;
  $("html, body").animate(
    { scrollTop: $("#section-2").offset().top - 110},
    tiempo
  );
}
function saltarC() {
  var tiempo = 700;
  $("html, body").animate(
    { scrollTop: $("#section-3").offset().top - 10 },
    tiempo
  );
}
function saltarD() {
  var tiempo = 700;
  $("html, body").animate(
    { scrollTop: $("#section-4").offset().top - 10 },
    tiempo
  );
}

$(document).ready(() => {

  TweenMax.to(".welcome-text", 1.5, {
    delay: 0.3,
    opacity: "1",
    ease: Sine.easeOut,
  });
  TweenMax.to(".welcome-text", 1.5, {
    delay: 2.3,
    color: "white",
    y: 1000,
    ease: Sine.easeOut,
  });

  TweenMax.to(".welcome", 1.5, {
    delay: 2.3,
    opacity: ".0",
    ease: Sine.easeOut,
    display: "none",
  });

  TweenMax.to("#body", 0.1, {
    // height: '100vh',
    overflow: "hidden",
  });
  TweenMax.to("#body", 0.1, {
    delay: 3.5,
    overflow: "auto",
  });

  $("html, body").animate({ scrollTop: 0 }, 100);
});