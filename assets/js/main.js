// navbar background color after scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 40) {
      $(".scroll").css("background-color", "black");
    } else {
      $(".scroll").css("background-color", "transparent");
    }
  });
});
// Choose us slider
$(".chooseUs-slider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
// Company slider
$(".company-slider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
});
// services-slider slider
$(".services-slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
// review-slider slider
$(".review-slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// team-slider slider
$(".team-slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
