$(document).ready(()=>{

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

    // 레이아웃 변경 스크립트----------------------
    // 국가선택
    $('.country_list li').click(()=>{
        $('.country_wrap').hide();
        $('.city_wrap').show();
    });

    // 국가에서 뒤로가기
    $('.btn_back').click(()=>{
        $('.country_wrap').show();
        $('.city_wrap').hide();
        $('.right_section').removeClass('active');
    });

    // 도시 +버튼 클릭
    $(document).on('click', '.city_list .add_btn', function(){
        $('.right_section').addClass('active');
        if($('.right_section').hasClass('show_option')){
            $('.city_schedule').show();
        };
        const cityName = $(this).closest('li').find('span').text();
        const addedName = $('.city_schedule .added_list span').text();
        const cityAdded = $(".city_schedule .added_list");

        if(addedName.match(cityName)){
            alert('이미 추가되어 있음');
        }else{
            cityAdded.append('<li><div class="button_box"><button class="delete_btn"></button><span>'+cityName+'</span></div><div class="num_wrap"><button type="button" class="minus"></button><button type="button" class="plus"></button><input type="text" value="0" maxlength="2" numberOnly readonly /></div></li>');
        };
    });

    // 도시 -버튼 클릭
    $(document).on('click', '.city_schedule .delete_btn', function(){
        $(this).closest('li').remove();
        const cityNum = $(".city_schedule .added_list li").length;
        console.log(cityNum);
        if(cityNum == 0){
            $('.right_section').removeClass('active');
            if($('.right_section').hasClass('show_option')){
                $('.city_schedule').hide();
            };
        };
    });

    // 도시 다음버튼 클릭
    $('.city_wrap .bottom_btn .next_btn').click(()=>{
        $('.city_wrap').hide();
        $('.hotel_wrap').show();
        $('.right_section').addClass('active');
        $('.right_section').removeClass('show_option');
        if($('.right_section').hasClass('show_option') != true){
            $('.right_section .choice_list').eq(0).show();
        };
    });

    // 호텔 및 관광지 선택 텝
    function tabJs(){
        $('.tab_wrap .content').hide();
        $('.right_section .choice_list').hide();
        $('.tab_wrap .content').eq(0).show();
        
        $('.tab_wrap .tab').click(function(){
            let idx = $(this).index();
            console.log(idx);
            
            if($('.tab_wrap').hasClass('day_one') != true && $('.tab_wrap').hasClass('before_return') != true){
                $('.tab_wrap .tab').removeClass("active");
                $(this).addClass("active");
                $('.tab_wrap .content').hide();
                $('.right_section .choice_list').hide();
                $('.tab_wrap .content').eq(idx).show();
                $('.right_section .choice_list').eq(idx).show();
            };
        });
    }
    tabJs();

    // 일정순서변경 모달창----------------
    function scheduleModal(){
        const schModal = {
            open : $('.reset_btn'),
            box : $('.schedule_modal')
        };

        schModal.open.click(()=>{
            schModal.box.fadeIn(200);
        });

        $(document).on('click', '.schedule_modal .delete_btn', function(){
            const schDelete = {
                btnLeft : $('.schedule_modal .delete_btn'),
                btnRight : $('.schedule_modal .apply_btn'),
                move : $('.schedule_modal .move_wrap'),
                chk : $('.schedule_modal .chk_wrap'),
            };

            schDelete.btnLeft.empty();
            schDelete.btnRight.empty();

            if($(this).hasClass('active')){
                $(this).removeClass('active');
                schDelete.btnRight.removeClass('active');
                schDelete.btnRight.addClass('add_btn');
                $(this).text('일정 삭제');
                schDelete.btnRight.text('일정 추가');
                schDelete.chk.hide();
                schDelete.move.show();
            }else{
                $(this).addClass('active');
                schDelete.btnRight.removeClass('add_btn');
                schDelete.btnRight.addClass('active');
                $(this).text('취소');
                schDelete.btnRight.text('삭제');
                schDelete.move.hide();
                schDelete.chk.show();
            };
        });


        $(document).on('click', '.schedule_modal .apply_btn.active', function(){
            let chkInput = $('.schedule_modal .chk:checked');
            if(chkInput.length > 0 && $(this).hasClass('active')){
                $('.delete_modal').fadeIn(200);
            };
        });

        $(document).on('click', '.delete_modal .apply_btn', function(){
            const deleteChk = $('.schedule_modal .chk:checked');
            deleteChk.closest("li").remove();
            $('.delete_modal').fadeOut(200);
        });

        const addModal = $('.scheduleAdd_modal');
        $(document).on('click', '.schedule_modal .add_btn', function(){
            addModal.fadeIn(200);
        });

    }
    scheduleModal();

    // 내가 만드는 여행 예약페이지 약관 동의 전체선택 스크립트
    function checkBox(){
        const chkAll = $('#all_check');
        const chkBox = $('.terms_box ul .chk');

        chkAll.click(function(){
            if($(this).is(':checked')){
                chkBox.prop('checked', true);
            }else{
                chkBox.prop('checked', false);
            };
        });

        chkBox.click(function(){
            const total = chkBox.length;
            const yesCheck = $('.terms_box ul .chk:checked').length;

            if(total != yesCheck){
                chkAll.prop('checked', false);
            }else{
                chkAll.prop('checked', true);
            };
        });
    }
    checkBox();

    // 내가 만드는 여행 예약페이지 약관 동의 어코디언
    function termsAccordion(){

        $('.terms_box label').click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).closest('li').find('.comment').hide();
            }else{
                $(this).addClass('active');
                $(this).closest('li').find('.comment').show();
            };
        });
        
    }
    termsAccordion();

    // 내가 만드는 여행 예약페이지 성별 선택
    function genderClick(){
        $(document).on('click', '.tripRez_page .gender_btn', function(){
            $(this).closest('.input_box').find('.gender_btn').removeClass('active');
            $(this).addClass('active');
        });
    }
    genderClick();

    // 내가 만드는 여행 예약페이지 신청 및 임시저장 클릭
    function rightBtn(){
        const applyOpt = {
            btn : $('.tripRez_page .application_btn'),
            save : $('.save_btn'),
            modal : $('.applicationC_modal'),
            saveModal : $('.saveC_modal')
        }

        applyOpt.btn.click(function(){
            applyOpt.modal.fadeIn(200);
            scrollOff();
        });

        applyOpt.save.click(function(){
            applyOpt.saveModal.fadeIn(200);
            scrollOff();
        });
    }
    rightBtn();
    
    function deleteModal(){
        const deleteOpt = {
            btn : $('.tripRez_page.detail .delete_btn'),
            askModal : $('.delete_modal'),
            cModal : $('.deleteC_modal')
        };

        deleteOpt.btn.click(()=>{
            deleteOpt.askModal.fadeIn(200);
            scrollOff();
        });

        $('.delete_modal .apply_btn').click(()=>{
            deleteOpt.cModal.fadeIn(200);
        });
    }
    deleteModal();

});