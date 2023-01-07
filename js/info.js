$(function(){
    scrollOff();
    scrollOn();
    pwBox();
    phoneBox();
    pwError();
    pwEnd();
    certify();
    certifyError();
    mailError();
    infoEnd();
})

// document.addEventListener('DOMContentLoaded', () => {
//     const pwBox = document.querySelector('.flex_box.pw_box');
//     const pwBtn = document.querySelector('.pw_box .change_btn');
//     const chkBtn = document.querySelector('.pw_check');
//     const pwInput = document.querySelector('#PW');

//     const handleClick = () => {
//         chkBtn.classList.add('active');
//         pwBox.classList.add('active');
//         pwInput.value="aSLDfkjasdlfkj"
//         pwInput.setAttribute('readonly', false)
//         pwInput.setAttribute('required', true)
//     }




//     pwBtn.addEventListener('click', handleClick)
// })

// 비밀번호 변경 클릭 시

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

//  비밀번호 변경 스크립트
function pwBox(){
    $('.pw_box .change_btn').click(function(){
        $('.pw_box, .pw_check').addClass('active');
        // 패스워드 값 들어있던 거 제거
        $('#PW').val('');
        $('#PW').attr('readonly',false);
        $('#PW').attr('required',true);
    });

}

// 인증번호 작성 스크립트
function phoneBox(){
    $('.phone_box .certify_btn').click(function(){
        $('.certify_box').addClass('active');
        $('.certify_btn').text('인증번호 전송');

        $('#phone').val('');
        $('#phone').attr('readonly',false);
        $('#phone').attr('required',true);
    })
}
// 비밀번호 일치하지 않을 때 팝업
function pwError(){
    if($('.pw_error').hasClass('active')){
        $('.pw_error').fadeIn(200);
        scrollOff();
    }else{
        $('.pw_error').fadeOut(200);    
        scrollOn();
    }
}

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

// 인증번호 전송 팝업
function certify(){
    if($('.certify_pop').hasClass('active')){
        $('.certify_pop').fadeIn(200);
        scrollOff();
    }else{
        $('.certify_pop').fadeOut(200);    
        scrollOn();
    }
}

// 인증번호 오류 팝업
function certifyError(){
    if($('.certify_error').hasClass('active')){
        $('.certify_error').fadeIn(200);
        scrollOff();
    }else{
        $('.certify_error').fadeOut(200);   
        scrollOn(); 
    }
}
// 이메일 형식 오류 팝업
function mailError(){
    if($('.mail_error').hasClass('active')){
        $('.mail_error').fadeIn(200);
        scrollOff();
    }else{
        $('.mail_error').fadeOut(200);    
        scrollOn();
    }
}

function infoEnd(){
    if($('.info_end').hasClass('active')){
        $('.info_end').fadeIn(200);
        scrollOff();
    }else{
        $('.info_end').fadeOut(200);    
        scrollOn();
    }
}
