document.addEventListener('DOMContentLoaded', () => {
  const mainSwiper = new Swiper('.main_swiper', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const sectSwiper1 = new Swiper('.sect_swiper_1', {
    slidesPerView: "auto",
    spaceBetween: 10,

    navigation: {
      nextEl: '.sect_swiper-button-next',
      prevEl: '.sect_swiper-button-prev',
    },
    

    breakpoints: {
      429: {
        spaceBetween: 18,
      },

      901: {
        speed: 500,
        slidesPerView: 3,
        spaceBetween:20,
        slidesPerGroup: 3,
      },
    }
  });

  const sectSwiper2 = new Swiper('.sect_swiper_2', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween:20,
    slidesPerGroup: 1,
    pagination: {
      el: '.package_swiper-pagination',
    },

    breakpoints: {
      901: {

        speed: 500,
        slidesPerView: 2,
        spaceBetween:20,
        slidesPerGroup: 2,
      }
    }
  });



  const sectSwiper3 = new Swiper('.sect_swiper_3', {
    slidesPerView: "auto",
    spaceBetween: 10,

    navigation: {
      nextEl: '.sect_swiper-button-next',
      prevEl: '.sect_swiper-button-prev',
    },
    

    breakpoints: {
      428: {
        spaceBetween: 18,
      },

      900: {
        speed: 500,
        slidesPerView: 3,
        spaceBetween:20,
        slidesPerGroup: 3,
      },
    }
  });

  const sectSwiper4 = new Swiper('.sect_swiper_4', {
    loop: true,
    speed: 500,
    pagination: {
      el: '.list_swiper-pagination',
      type: "fraction",
    },
    navigation: {
      nextEl: '.list_swiper-button-next',
      prevEl: '.list_swiper-button-prev',
    },
    on : {
      slideChangeTransitionEnd : function () {
        const slide = document.querySelectorAll('.sect_swiper_4 .swiper-slide');

        slide.forEach((item, idx) => {
          let has = item.classList.contains('swiper-slide-active');

          if(has) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        })
      },
    },
  });



  const sectSwiper5 = new Swiper('.event_swiper', {
    slidesPerView: "auto",
    spaceBetween: 10,
   
    breakpoints: {
      901: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });

  



  // const heart = document.querySelectorAll('.heart');

  // heart.forEach((item, idx) => {
  //   item.addEventListener('click', () => {
  //     item.classList.toggle('on');
  //   });
  // })
});
