$(function(){
    searchTab();
    goodsList();
    newsList();
})

// notice  탭메뉴
function searchTab(){
    $('.sub_title li button').click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        $('.sub_title li').removeClass('active');
        $('.sub_title li button').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
  
        $('.search > section').removeClass('active');
        $('#'+activeTab).addClass('active');
    });
}

// 모바일 탭메뉴
// function tabList(){
//     if($('.sub_title li button').hasClass('active')){
//         $(this).parent('.sub_title li').addClass('active');
//     }else{
//         $('.sub_title li').removeClass('active')
//     }
// }
// 여행 상품 리스트 순서 버튼
function goodsList(){
    $('#goods .sub_btn button').click(function(){
        $('#goods .sub_btn button').removeClass('active');
        $(this).addClass('active');
    })
}

// 소식 리스트 순서 버튼
function newsList(){
    $('#news .sub_btn button').click(function(){
        $('#news .sub_btn button').removeClass('active');
        $(this).addClass('active');
    })
}
