// Hamburger
const hamburger = document.getElementById("hamburger")
// Nav
const nav = document.getElementById('menu')

// Hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// Accordion
$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .slideUp();

    $("span.chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title span.chevron-down")
      .removeClass("chevron-top");
  });
});

// Carousel
var cont = 0;
function loopSlider() {
  var xx = setInterval(function () {
    switch (cont) {
      case 0: {
        $("#slider-1").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-companySecondary");
        $("#sButton1").addClass("bg-white");
        $("#sButton2").removeClass("bg-white");
        $("#sButton2").addClass("bg-companySecondary");
        $("#sButton3").removeClass("bg-companySecondary");
        $("#sButton3").addClass("bg-white");
        cont = 1;

        break;
      }
      case 1:
        {
          $("#slider-2").fadeOut(400);
          $("#slider-3").delay(400).fadeIn(400);
          $("#sButton1").removeClass("bg-companySecondary");
          $("#sButton1").addClass("bg-white");
          $("#sButton2").removeClass("bg-companySecondary");
          $("#sButton2").addClass("bg-white");
          $("#sButton3").removeClass("bg-white");
          $("#sButton3").addClass("bg-companySecondary");
          cont = 2;

          break;
        }
      case 2:
        {
          $("#slider-3").fadeOut(400);
          $("#slider-1").delay(400).fadeIn(400);
          $("#sButton1").removeClass("bg-white");
          $("#sButton1").addClass("bg-companySecondary");
          $("#sButton2").removeClass("bg-companySecondary");
          $("#sButton2").addClass("bg-white");
          $("#sButton3").removeClass("bg-companySecondary");
          $("#sButton3").addClass("bg-white");
          cont = 0;

          break;
        }

    }
  }, 4000);
}

function reinitLoop(time) {
  clearInterval(xx);
  setTimeout(loopSlider(), time);
}

$(window).ready(function () {
  $("#slider-2").hide();
  $("#slider-3").hide();
  $("#sButton1").addClass("bg-companySecondary");
  $("#sButton2").addClass("bg-white");
  $("#sButton3").addClass("bg-white");

  loopSlider();

});
