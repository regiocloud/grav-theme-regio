if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 20,
    loop: false,
    slidesPerView: 1,
    breakpoints:{
      1000:{
        slidesPerView:3,
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
}