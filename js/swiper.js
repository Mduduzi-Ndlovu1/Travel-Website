const swiper = new Swiper('.swiper', {
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 5000,
    },

    speed:400,
    spaceBetween: 100,
  });