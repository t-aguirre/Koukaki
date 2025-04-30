// FRONT-PAGE CHARACTERS SLIDER SECTION
const swiper = new Swiper('.swiper', {
  effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 0,
      autoplay: {
      delay: 2000,  // Waiting time between each slide (in milliseconds)
      disableOnInteraction: false, // Continues sliding even after an interaction
      reverseDirection: true, // Slides from the right
      },
      slidesOffsetBefore: 50, // Adds a margin before the first slide
      slidesOffsetAfter: 0,  // Adds a margin after the last slide
      coverflowEffect: {
        rotate: 50,
        stretch: -50,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        1192: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1040: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesOffsetBefore: 20,
        },
        365: {
          slidesPerView: 1,
          spaceBetween: 5, 
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
          slidesOffsetBefore: 0,
          centeredSlides: true,
        },
      },
  });


