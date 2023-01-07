$(document).ready(()=>{

    const heart = document.querySelectorAll('.heart');

    heart.forEach((item, idx) => {
      item.addEventListener('click', () => {
        item.classList.toggle('on');
      });
    });

  // body 스크롤 막음
  function scrollOff() {
    $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
        e.stopPropagation();
    });
  };
  // body 스크롤 풀기
  function scrollOn() {
      $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
  };

  //숫자만 입력 스크립트
  $("input:text[numberOnly]").on("keyup", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ""));
  });

  // 인풋 텍스트 세자리 수 콤바
  $(document).on('keyup', 'input[inputmode=numeric]', function (event) {
    this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  // 셀렉트박스
  function selectBox(){
    const selectBox = $('.select_wrap');
    const selectList = $('.select_list');
    const selectClick = $('.select_list .list');
    // 셀렉트박스 오픈
    $(document).on('click', '.select_wrap', function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).find(selectList).slideUp(200);
        }else{
            selectList.slideUp(200);
            selectBox.removeClass('open');
            $(this).addClass('open');
            $(this).find(selectList).slideDown(200);
        };
    });

    // 셀렉트 리스트 클릭
    $(document).on('click', '.select_list .list', function(){
      const selectData = $(this).html();
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
        }else{
            selectClick.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest('.select_wrap').find('.select_title').html(selectData);
            $(this).closest('.select_wrap').find('.select_title').addClass('active');
        };
    });
    
    // 외부 영역 클릭
    $(document).mouseup(function (e) {
        if ($('.select_wrap').has(e.target).length === 0) {
            selectList.stop().slideUp(200);
            $('.select_wrap').removeClass('open');
        };
    });

      
  }
  selectBox();

  // 모달 닫기 스크립트------
  const modalWrap = document.querySelectorAll('.modal_bg');
  modalWrap.forEach((item, idx) => {
      const closeBtn = item.querySelectorAll('.close_btn');

      closeBtn.forEach((items, i) => {
          items.addEventListener('click', () => {
              $(item).fadeOut(200);
              scrollOn();
          });
      });
  });

    // top 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".btn_top").fadeIn();
        }
        else {
            $(".btn_top").fadeOut();
        }
    });

    $(".btn_top").click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 500)
    });

    // 내가 만든는 여행 모달 스크립트------------
    function myTripModal(){
        // 내가 만드는 여행 모달 열기
        $(document).on('click', '.gnb_box>li:nth-child(2)', function(){
            const windowWidth = $(window).width();
            scrollOff();
            if (windowWidth > 900) {
                $('.myTrip_modal').fadeIn(200);
            } else {
                $('.onlyPc_modal').fadeIn(200);
            };
        });

        $(document).on('click', '.m_gnb_li:nth-child(2) .menu_link', function(){
          const windowWidth = $(window).width();
          scrollOff();
          if (windowWidth < 901) {
            $('.onlyPc_modal').fadeIn(200);
          };
        });

        $(window).on('resize', function(){
          scrollOn();
          if(window.innerWidth < 901){
            $('.myTrip_modal').hide();
          }else{
            $('.onlyPc_modal').hide();
          };
        });

        $('.myTrip_modal .ticket .content').hide();
        $('.myTrip_modal .ticket .button_list').hide();
        $('.myTrip_modal .ticket .button_list').eq(0).show();

        // 여행 날짜 미정 시
        $(document).on("click", "#not_sure",function(){
          if($(this).is(":checked")){
            $('.possess').attr("disabled", true);
          }else{
            $('.possess').attr("disabled", false);
          };
        });

        // 여행분류 클릭 엑티브
        $('.myTrip_modal .trip_type button').click(function(){
            $('.myTrip_modal .trip_type button').removeClass('active');
            $(this).addClass('active');
        });

        // 항공권 유무 클릭 엑티브
        $('.myTrip_modal .ticket .big_btn').click(function(){
            $('.myTrip_modal .ticket .big_btn').removeClass('active');
            $(this).addClass('active');

            if($('.myTrip_modal .ticket .big_btn.possess').hasClass('active')){
                $('.myTrip_modal .ticket .content').hide();
                $('.myTrip_modal .ticket .content').eq(0).show();
                $('.fav_time button').attr('disabled', true);
                $('.fav_time').css('display','none');
            }else if($('.myTrip_modal .ticket .big_btn.agencies').hasClass('active')){
                $('.myTrip_modal .ticket .content').hide();
                $('.myTrip_modal .ticket .content').eq(1).show();
                $('.fav_time button').attr('disabled', false);
                $('.fav_time').css('display','flex');
            }else{
                $('.myTrip_modal .ticket .content').hide();
                $('.fav_time button').attr('disabled', true);
                $('.fav_time').css('display','none');
            };
        });

        // 항공권 소지 날짜 및 시간 선택 시 after none처리
        const dateInput = $('.myTrip_modal .ticket input');
        dateInput.on('change', function(){
          $(this).addClass('active');
        });

        $(".time_wrap").on('click', function(){
          $(this).find('.holder_text').css('display','none');
        });

        // 편명 자동 대문자
        const makeUpper = $('.upperCase');
        makeUpper.bind('keyup', function(){
          $(this).val($(this).val().toUpperCase());
        });

        const conAgenc = {
            btn : $('.myTrip_modal .button_list .small_btn'),
            list : $('.myTrip_modal .button_list')
        };

        const btnFind = {
            first : conAgenc.list.eq(0).find(conAgenc.btn),
            sec : conAgenc.list.eq(1).find(conAgenc.btn),
            trd : conAgenc.list.eq(2).find(conAgenc.btn),
            fourth : conAgenc.list.eq(3).find(conAgenc.btn)
        };

        btnFind.first.click(function(){
            btnFind.first.removeClass('active');
            $(this).addClass('active');
            conAgenc.list.eq(1).show();
        });

        btnFind.sec.click(function(){
            btnFind.sec.removeClass('active');
            $(this).addClass('active');
            conAgenc.list.eq(2).show();
        });

        btnFind.trd.click(function(){
            btnFind.trd.removeClass('active');
            $(this).addClass('active');
            conAgenc.list.eq(3).show();
        });

        btnFind.fourth.click(function(){
            btnFind.fourth.removeClass('active');
            $(this).addClass('active');
        });
        
        // 선호 출발 시간 클릭 엑티브--------
        $('.myTrip_modal .fav_time button').click(function(){
            $('.myTrip_modal .fav_time button').removeClass('active');
            $(this).addClass('active');
        });
        
    }
    myTripModal();

    // 숫자 증가 감소 스크립트--------------------
    function numJs(){

      $(document).on('click', '.num_wrap .minus', function(e){
        e.preventDefault();
        let stat = $(this).closest(".num_wrap").find('input').val();
        let num = parseInt(stat, 10);
        num--;

        if(num<1){
          num = 0;
        };

        $(this).closest(".num_wrap").find('input').val(num);
      });

      $(document).on('click', '.num_wrap .plus', function(e){
        e.preventDefault();
        let stat = $(this).closest(".num_wrap").find('input').val();
        let num = parseInt(stat, 10);
        num++;

        if(num>20){
          num=20;
        };

        $(this).closest(".num_wrap").find('input').val(num);
      });

    };
    numJs();
    
    // 데이터피커----------------
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
    
      const dataPicker1 = new AirDatepicker('#departDay', {
        locale: _default,
        autoClose: true,
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
    
      const dataPicker2 = new AirDatepicker('#returnDay', {
        locale: _default,
        autoClose: true,
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
    
      let endDay = document.getElementById('returnDay');
      let startDay = document.getElementById('departDay');
    
      endDay.value += '.' +  dayFuc(new Date().getDay());
      startDay.value += '.' +  dayFuc(new Date().getDay());

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

      // 타임피커---------------------
      $('.timepicker').timepicker({
        timeFormat: 'H:mm p',
        interval: 5,
        minTime: '00',
        maxTime: '23',
        defaultTime: '12',
        startTime: '12',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        zindex:999
    });

});