$(function(){
    scrollOff();
    scrollOn();
    idPop();
    pwPop();
    errorPop();
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

function idPop(){
    if($('.id_pop').hasClass('active')){
        $('.id_pop').fadeIn(200);
        scrollOff();
    }else if('.apply_btn'){
        $('.id_pop').fadeOut(200);   
        scrollOn();
    }
}

function pwPop(){
    if($('.pw_pop').hasClass('active')){
        $('.pw_pop').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_pop').fadeOut(200);   
        scrollOn();
    }
}

function errorPop(){
    if($('.error_pop').hasClass('active')){
        $('.error_pop').fadeIn(200);
        scrollOff();
    }else{
        $('.error_pop').fadeOut(200);   
        scrollOn();
    }
}