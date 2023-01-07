$(function () {
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

     // 모달
     $(".service .qa.delete").click(function () {
          $(".service .check_delete_complete .modal_bg").fadeIn();
     });

     $(".service .check_close").click(function () {
          $(this).closest(".modal_bg").fadeOut();
     })

     $(".service .check_delete").click(function () {
          $(this).closest(".modal_bg").hide();
          $(".service .pop_section.delete_complete .modal_bg").fadeIn();
     })

     $(".service .apply_btn").click(function () {
          $(this).closest(".pop_section.delete_complete .modal_bg").fadeOut();
     })

     $(".service .btn_edit").click(function (e) {
          e.preventDefault();
          $(".service .edit_complete .modal_bg").fadeIn();
     })

     $('.qa_write .qa').click(()=>{
          $('.register_modal').fadeIn(200);
          scrollOff();
     });

     // faq 답변 보이기
     $(".faq .list_tit_wrap").click(function () {
          $(this).siblings(".list_answer_area").toggleClass("on");
          $(this).find(".arrow_box").toggleClass("on");
     })

     // product_list 체크박스 포함 셀렉트창 
     $(".select_title").click(function () {
          const productList = $(this).siblings(".search_select_list");
          productList.slideToggle();
          $(this).toggleClass("active");
          $(".select_title").not(this).removeClass("active");
          $(".search_select_list").not(productList).slideUp(100);
     });
     $(document).mouseup(function (e) {
          if ($(".search_select_wrap").has(e.target).length === 0) {
               $(".search_select_list").stop().slideUp(200);
               $(".select_title").removeClass("active");
          };
     });

     

});