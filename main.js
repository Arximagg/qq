
$('.slider__list').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  waitForAnimate: false,
  prevArrow: $('.slider__arrow-left'),
  nextArrow: $('.slider__arrow-right'),
  responsive:
  [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});