$(function (){
    scrollOff();
    scrollOn();
    pwError();
    pwPop();
    pwEnd();
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
  
// 비밀번호 찾기 정보 일치 오류 팝업
function pwError(){
    if($('.pw_error').hasClass('active')){
        $('.pw_error').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_error').fadeOut(200);   
        scrollOn();
    }
};

// 비밀번호 재설정 일치하지 않을 때
function pwPop(){
    if($('.pw_pop').hasClass('active')){
        $('.pw_pop').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_pop').fadeOut(200);   
        scrollOn();
    }
};

// 비밀번호 변경 완료 팝업
function pwEnd(){
    if($('.pw_end').hasClass('active')){
        $('.pw_end').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_end').fadeOut(200);   
        scrollOn();
    }
}