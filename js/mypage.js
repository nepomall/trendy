$(function () {
  // body 스크롤 막음
  function scrollOff() {
    $("body")
      .addClass("scrollOff")
      .on("scroll touchmove mousewheel", function (e) {
        e.stopPropagation();
      });
  }
  // body 스크롤 풀기
  function scrollOn() {
    $("body").removeClass("scrollOff").off("scroll touchmove mousewheel");
  }

  //성별
  const genders = document.querySelectorAll('.c_gender');

  genders.forEach((item, idx) => {
    const btn = item.querySelectorAll('.btn');

    btn.forEach((items, idxx) => {
      $(items).on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          btn.forEach((itemss) => itemss.classList.remove('active'));
          $(this).addClass("active");
        }
      });

    })
  })

  //결제수단

  $(".payment_btn .btn").click(function () {
    $(this).hasClass("bank_book_btn");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".payment_btn .btn .pay_icon").removeClass("active");
      if ($(this).hasClass("bank_book_btn") == true) {
        $(".bank_book_box").css("display", "none");
      }
    } else {
      $(".payment_btn .btn").removeClass("active");
      $(".payment_btn .btn .pay_icon").removeClass("active");
      $(this).find(".pay_icon").addClass("active");
      $(this).addClass("active");
      if ($(this).hasClass("bank_book_btn") == true) {
        $(".bank_book_box").css("display", "block");
      } else {
        $(".bank_book_box").css("display", "none");
      }
    }
  });

  //모달
  $(".modal_backbtn").click(function () {
    $(".modal_bg.pay_modal_wrap").fadeOut(200);
    scrollOn();
  });

  $(".history_btn").click(function () {
    $(".modal_bg.pay_modal_wrap").fadeIn(200);
    scrollOff();
  });

  $(".pay_modal_wrap button").click(function () {
    $(".modal_bg.pay_modal_wrap").fadeOut(200);
    $(".modal_bg.cancel_modal").fadeIn(200);
    scrollOff();
  });

  $(".cancel_modal .apply_btn").click(function () {
    $(".modal_bg.cancel_modal").fadeOut(200);
    $(".modal_bg.cancel_modal1").fadeIn(200);
    scrollOff();
  });

  $('.downPayment_btn').click(()=>{
    $('.downPayment_modal').fadeIn(200);
    scrollOff();
  });

  $('.allPay_btn').click(()=>{
    $('.allPayment_modal').fadeIn(200);
    scrollOff();
  });

  // 에약하기 모달
  $('.m_reservation_btn').click(()=>{
    $('.paymentC_modal').fadeIn(200);
    scrollOff();
  });

  //후기등록 모달
  $(".ok_btn .btn").click(function () {
    $(".modal_bg.review_modal").fadeIn(200);
    scrollOff();
  });

  
  //부분결제
  // $(".c_payment_box .btn.blue").click(function () {
  //   $(".modal_bg.pay_modal").fadeIn(200);
  //   scrollOff();
  // });
  
  //부분결제
  // $(".m_bottom_btn .btn").click(function () {
  //   $(".modal_bg.pay_modal").fadeIn(200);
  //   scrollOff();
  // });

  // 결제 완료
  $(".pay_modal .apply_btn").click(function () {
    $(".modal_bg.pay_modal").fadeOut(200);
    $(".modal_bg.pay_clear").fadeIn(200);
    scrollOff();
  });

  //예약 취소
  $(".btn.outline").click(function () {
    $(".modal_bg.reservation_cancel").fadeIn(200);
    scrollOff();
  });

  $(".reservation_cancel .apply_btn").click(function () {
    $(".modal_bg.reservation_cancel").fadeOut(200);
    $(".modal_bg.reservation_cancel_clear").fadeIn(200);
    scrollOff();
  });

  // function Rating() {}
  // Rating.prototype.rate = 0;
  // Rating.prototype.setRate = function (newrate) {
  //   this.rate = newrate;
  //   let items = document.querySelectorAll(".rate_radio");
  //   items.forEach(function (item, idx) {
  //     if (idx < newrate) {
  //       item.checked = true;
  //     } else {
  //       item.checked = false;
  //     }
  //   });
  // }
  // let rating = new Rating();

  // document.addEventListener("DOMContentLoaded", function () {
  //   //별점선택 이벤트 리스너
  //   document.querySelector(".rating").addEventListener("click", function (e) {
  //     let elem = e.target;
  //     if (elem.classList.contains("rate_radio")) {
  //       rating.setRate(parseInt(elem.value));
  //     }
  //   });
  // });

  $('.rating .rate_radio').click(function(){
    if($(this).hasClass('active')){
      $('.rating .rate_radio').removeClass('active');
    }else{
      $('.rating .rate_radio').removeClass('active');
      $(this).addClass('active');
      $(this).prevAll('.rate_radio').addClass('active');
    };
  });

  const VW = window.innerWidth;
  let r = VW <= 900 ? true : false;
  if (r) {
    $(".m_mobile_tabcon").hide();
    $(".m_mobile_tabcon").eq(0).show();
    $(".modal_tab .tab").removeClass('active');
    $(".modal_tab .tab").eq(0).addClass("active");
    //클릭이벤트
    function mobileEvent(e) {
      let target = e.currentTarget;
      $(".modal_tab .tab").removeClass("active");
        $(target).addClass("active");
        var idx = $(target).index();
        $(".m_mobile_tabcon").hide();
        $(".m_mobile_tabcon").eq(idx).show();
    }
    //모바일 텝
    $(" .modal_tab .tab").off("click", pcEvent);
    $(" .modal_tab .tab").on("click", mobileEvent);
  } else {
    $(".modal_tabcon").hide();
    $(".modal_tabcon").eq(0).show();
    $(".modal_tab .tab").removeClass('active');
    $(".modal_tab .tab").eq(0).addClass("active");

    function pcEvent(e) {
      let target = e.currentTarget;
      $(".modal_tab .tab").removeClass("active");
      $(target).addClass("active");
      var idx = $(target).index();
      console.log($(target), 'ss11s22244');
      $(".modal_tabcon").hide();
      $(".modal_tabcon").eq(idx).show();
    }

    $(" .modal_tab .tab").off("click", mobileEvent);
    $(" .modal_tab .tab").on("click", pcEvent);
  }


  window.addEventListener('resize', () => {
    const _VW = window.innerWidth;
      if(_VW <= 900) {
        if(r) {
          return;
        } else {
          console.log('mobile', _VW)
          r = true;

          const test1 = document.querySelectorAll('.modal_tabcon');
          const test = document.querySelectorAll('.m_mobile_tabcon');
          test1.forEach(item => item.style.display = 'none');

          test.forEach((item, idx) => {
            if(idx === 0) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });

          // $(".m_mobile_tabcon").hide();
          // $(".m_mobile_tabcon").eq(0).show();
          $(".modal_tab .tab").removeClass('active');
          $(".modal_tab .tab").eq(0).addClass("active");
          //클릭이벤트
         
          //모바일 텝
          $(" .modal_tab .tab").off("click", pcEvent);
          $(" .modal_tab .tab").on("click", mobileEvent);
        };
        } else {
          if(!r) {
            return;
          } else {
            console.log('pc' , _VW)
            r = false;

            // $(".modal_tabcon").hide();
            // $(".modal_tabcon").css('display','none');
            // $(".modal_tabcon").eq(0).show();
            const test1 = document.querySelectorAll('.m_mobile_tabcon');
            const test = document.querySelectorAll('.modal_tabcon');
            test1.forEach(item => item.style.display = 'none');

            test.forEach((item, idx) => {
              if(idx === 0) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });

            $(".modal_tab .tab").removeClass('active');
            $(".modal_tab .tab").eq(0).addClass("active");

           

            $(" .modal_tab .tab").off("click", mobileEvent);
            $(" .modal_tab .tab").on("click", pcEvent);
          }
        }
    })


    function mobileEvent(e) {
      let target = e.currentTarget;
      $(".modal_tab .tab").removeClass("active");
        $(target).addClass("active");
        var idx = $(target).index();
        console.log($(target), 'ss11s222');
        $(".m_mobile_tabcon").hide();
        $(".m_mobile_tabcon").eq(idx).show();
    }


    function pcEvent(e) {
      let target = e.currentTarget;
      $(".modal_tab .tab").removeClass("active");
      $(target).addClass("active");
      var idx = $(target).index();
      console.log($(target), 'ss11s');
      $(".modal_tabcon").hide();
      $(".modal_tabcon").eq(idx).show();
    }


});
