$(function(){

    allCheck();
    termCheck();
});

// 이용약관 모두 체크 
function allCheck() {
    $("#all_check").click(function () {
      if ($("#all_check").is(":checked")) $("input[name=term]").prop("checked", true);
      else $("input[type='checkbox']").prop("checked", false);
    });
  
    $("input[name=term]").click(function () {
      var total = $("input[name=term]").length;
      var checked = $("input[name=term]:checked").length;
  
      if (total != checked) $("#all_check").prop("checked", false);
      else $("#all_check").prop("checked", true);
    });
  }

// 약관 보기
function termCheck(){
    $('.term_arrow').click(function(){
        $(this).toggleClass('active');

        $(this).siblings('.term_depth').toggleClass('active');
    })
}
