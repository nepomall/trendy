function scrollOff() {
  $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
      e.stopPropagation();
  });
};
// body 스크롤 풀기
function scrollOn() {
    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
};


document.addEventListener('DOMContentLoaded', () => {
  const tab = document.querySelectorAll('.tab_list');
  const tabSect = document.querySelectorAll('.tab_sect');

  tab.forEach((item, idx) => {
    item.addEventListener('click', () => {
      let has = item.classList.contains('active');

      if(has) {
        return false;
      } else {
        tab.forEach((items, indx) => {items.classList.remove('active')});
        tabSect.forEach((items, indx) => {items.style.display = 'none'});

        let val = item.getAttribute('data-tab');
        let el = document.getElementById(val);
        
        item.classList.add('active');
        el.style.display = 'block';
      }
    })
  });


  let _default = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'yyyy.MM.dd',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  };

  const dataPicker1 = new AirDatepicker('#startDate', {
    locale: _default,
    navTitles: {
      days: '<span class="datepicker_title">MM 월</span>',
    },
    weekends: [0],
    onSelect: ((date, formattedDate, datepicker) => {
      let el = date.datepicker.$el; 
      let day = date.date.getDay();

      el.value += '.' + dayFuc(day);
    }),
  });

  const dataPicker2 = new AirDatepicker('#endDate', {
    locale: _default,
    navTitles: {
      days: '<span class="datepicker_title">MM 월</span>',
    },
    weekends: [0],
    onSelect: ((date, formattedDate, datepicker) => {
      let el = date.datepicker.$el; 
      let day = date.date.getDay();

      el.value += '.' + dayFuc(day);
    }),
  });

  dataPicker2.selectDate(new Date());
  dataPicker1.selectDate(new Date());

  let endDay = document.getElementById('endDate');
  let startDay = document.getElementById('startDate');

  endDay.value += '.' +  dayFuc(new Date().getDay());
  startDay.value += '.' +  dayFuc(new Date().getDay());


  const input = document.querySelectorAll('.form_input');

  input.forEach((item, idx) => {
    const dataid = item.getAttribute('data-id');

    if(dataid) {
      item.addEventListener('click', () => {
        const popup = document.getElementById(dataid);
        let has = popup.classList.contains('on');

        if(has) {
          popup.classList.remove('on');
          $(".personnel").removeClass('on');
        } else {
          popup.classList.add('on');
          $(".personnel").addClass('on');
        };
      });

      console.log(dataid);
    };
  });


  // let infoSwiper = new Swiper(".info_swiper", {
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });

  // let infoThumbSwiper = new Swiper(".info_thumb_swiper", {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   thumbs: {
  //     swiper: infoSwiper,
  //   },
  //   on : {
  //     slideChangeTransitionEnd : function () {
  //       console.log(this.activeIndex, 'sd');
  //     },
  //     slideChangeTransitionStart: function () {
  //       console.log(this.activeIndex, 'ee');
  //       const slideCont = document.querySelectorAll('.slide_cont');
  //       slideCont.forEach(item => {
  //         item.classList.remove('on');
  //         setTimeout(() => {
  //           item.style.display = 'none';
  //         }, 400)
  //       });

  //       slideCont.forEach((item, idx) => {
  //         if(this.activeIndex === idx) {
  //           setTimeout(() => {
  //             item.style.display = 'block';
  //             setTimeout(() => {
  //               item.classList.add('on');
  //             }, 20)
  //           }, 410)
            
  //         }
  //       });
  //       document.querySelectorAll('#hotelInfo .info_cont_box').forEach((topItem, topIdx) => {
  //         const slideCont = topItem.querySelectorAll('.slide_cont');

  //         slideCont.forEach(item => {
  //           item.classList.remove('on');
  //           setTimeout(() => {
  //             item.style.display = 'none';
  //           }, 400)
  //         });

  //         slideCont.forEach((item, idx) => {
  //           if(this.activeIndex === idx) {
  //             setTimeout(() => {
  //               item.style.display = 'block';
  //               setTimeout(() => {
  //                 item.classList.add('on');
  //               }, 20)
  //             }, 410)
              
  //           }
  //         });

  //       });

  //     },
  //   },
  // });

  let sliderWrap = document.querySelectorAll('.info_slide_wrap');

  sliderWrap.forEach((item, idx) =>{
    let thumbs = item.querySelector('.info_thumb_swiper');
    let slide = item.querySelector('.info_swiper');
    thumbs.classList.add('slider-' + idx);
    slide.classList.add('slider-' + idx);

    let infoSwiper = new Swiper('.slider-' + idx + '.info_swiper', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    let infoThumbSwiper = new Swiper('.slider-' + idx + '.info_thumb_swiper', {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: infoSwiper,
      },
    });
  });

  const tr = document.querySelectorAll('.table_tr');

  tr.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      let target = e.target;
      let inner = item.querySelector('.inner_list');

      if(inner) {
        let allInner = document.querySelectorAll('.inner_list');
        let has = inner.classList.contains('on');
  
        console.log(target.parentNode.parentNode, 'dsdd');
  
        if(target.parentNode.parentNode === item) {
          allInner.forEach((items) => {
            items.classList.remove('on');
          });
    
          if(!has) {
            inner.classList.add('on');
          };
        };
      } else {
        if(item.classList.contains('on')) {
          item.classList.remove('on');
        } else {
          tr.forEach(item => item.classList.remove('on'));
          item.classList.add('on');
        }
      };
    });
  });



  $(".inquiry_btn").click(function () {
    $(".modal_bg.inquiry_modal").fadeIn(200);
    scrollOff();
  });

  $(".inquiry_modal .ok_btn").click(function () {
    $(".modal_bg.inquiry_modal").fadeOut(200);
    $(".modal_bg.inquiry_done_modal").fadeIn(200);
    scrollOff();
  });

  $(".inner_list .del_btn").click(function () {
    $(".modal_bg.inquiry_del_modal").fadeIn(200);
    scrollOff();
  });

  $(".inquiry_del_modal .ok_btn").click(function () {
    $(".modal_bg.inquiry_del_modal").fadeOut(200);
    $(".modal_bg.inquiry_del_done_modal").fadeIn(200);
    scrollOff();
  });

  $('.inquiry_sect .edit_btn').click(()=>{
    $(".modal_bg.inquiry_modal").fadeIn(200);
    scrollOff();
  });
  
  const _optBox = document.querySelector('.product_opt_box'); 
  const opBtn = document.querySelector('.opt_btn');
  const wrap = document.getElementById('wrap');
  let _h = _optBox.offsetHeight;


  if(_optBox.classList.contains('on')) {
    wrap.style.marginBottom = `${_h + 10}px`;
  } else {
    wrap.style.marginBottom = `${20}px`;
  };
  
  opBtn.addEventListener('click', () => {
    const optBox = document.querySelector('.product_opt_box'); 
    optBox.classList.toggle('on');

    if(optBox.classList.contains('on')) {
      let h = optBox.offsetHeight;
      wrap.style.marginBottom = `${h+ 10}px`;
    } else {
      wrap.style.marginBottom = `20px`;
    }
  });


});








function dayFuc(v) {
  switch(v) {
    case 0 :
      return '일';
      break;
    case 1:
      return '월';
      break;
    case 2 :
      return '화';
      break;
    case 3 :
      return '수';
      break;
    case 4 :
      return '목';
      break;
    case 5 :
      return '금';
      break;
    case 6 :
      return '토';
      break;
  }
}