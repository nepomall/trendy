$(function(){
    scrollOff();
    scrollOn();
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

function errorPop(){
    if($('.id_error').hasClass('active')){
        $('.id_error').fadeIn(200);
        scrollOff();
    }else{
        $('.id_error').fadeOut(200);
        scrollOn();
    }
};