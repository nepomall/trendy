$(function(){
    scrollOff();
    scrollOn();
    signupList();
    idOver();
    pwError();
    mailError();
    certify();
    certifyError();
    signupEnd();
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

function signupList(){
    if($('.signup_list').hasClass('active')){
        $('.signup_list').fadeIn(200);
        scrollOff();
    }else{
        $('.signup_list').fadeOut(200);   
        scrollOn();
    }
}

function idOver(){
    if($('.id_overlap').hasClass('active')){
        $('.id_overlap').fadeIn(200);
        scrollOff();
    }else{
        $('.id_overlap').fadeOut(200);   
        scrollOn();
    }
}


function pwError(){
    if($('.pw_error').hasClass('active')){
        $('.pw_error').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_error').fadeOut(200);    
        scrollOn();
    }
}


function mailError(){
    if($('.mail_error').hasClass('active')){
        $('.mail_error').fadeIn(200);
        scrollOff();
    }else{
        $('.mail_error').fadeOut(200);    
        scrollOn();
    }
}


function certify(){
    if($('.certify_pop').hasClass('active')){
        $('.certify_pop').fadeIn(200);
        scrollOff();
    }else{
        $('.certify_pop').fadeOut(200);    
        scrollOn();
    }
}


function certifyError(){
    if($('.certify_error').hasClass('active')){
        $('.certify_error').fadeIn(200);
        scrollOff();
    }else{
        $('.certify_error').fadeOut(200);   
        scrollOn(); 
    }
}


function signupEnd(){
    if($('.signup_end').hasClass('active')){
        $('.signup_end').fadeIn(200);
        scrollOff();
    }else{
        $('.signup_end').fadeOut(200);    
        scrollOn();
    }
}
