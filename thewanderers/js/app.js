$(function () {
  $('.js-featured-video').owlCarousel({
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $('.js-photocards').owlCarousel({
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
});