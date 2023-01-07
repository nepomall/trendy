$(document).ready(() => {
  // body 스크롤 막음
  function scrollOff() {
    $("body")
      .addClass("scrollOff")
      .on("scroll touchmove mousewheel", function (e) {
        e.stopPropagation();
      });
  }
  // body 스크롤 풀기
  function scrollOn() {
    $("body").removeClass("scrollOff").off("scroll touchmove mousewheel");
  }

  // 댓글달기 버튼
  const commentWrap = document.querySelector(".comment_input");
  const reBtn = document.querySelector(".re_btn");

  const Inner = document.querySelector(".comment_inner");
  const Btn = document.querySelector(".comment_btn");
  const reComment = document.querySelector(".re_comment_wrap");

  // 댓글달기 버튼 클릭시 본인 닉네임 뜨게끔 처리.
  reBtn.addEventListener("click", () => {
    commentWrap.classList.add("active");
  });

  // 입력 버튼 클릭시 댓글 달리는 부분처리.
  Btn.addEventListener("click", () => {
    Inner.appendChild(reComment);
  });

  // 박스 영역외 클릭시 닫히게끔 처리.
  $(document).mouseup(function (e) {
    var more = $(".more_box");
    if (more.has(e.target).length === 0) {
      more.removeClass("active");
    }
  });

  // 댓글 더보기 눌렀을 경우 탭처리.
  $(".more").on("click", function () {
    $(this).siblings(".more_box").toggleClass("active");
  });

  // 내 댓글 수정하기 누를시 input창과 취소/등록 버튼이 생기는 처리.
  $(".edit_box").on("click", function () {
    $(this).parents(".comment_list").addClass("active");
  });

  // 취소 / 등록 버튼 누를 시 원래대로 돌아가는 처리.
  $(".edit_wrap").on("click", function () {
    $(this).parents(".comment_list").removeClass("active");
    $(".more").siblings().removeClass("active");
  });

  // 모달
  // 신고하기 모달
  $(".report_btn").click(function () {
    $(".modal_bg.report_modal").fadeIn(200);
    scrollOff();
  });

  // 신고하기 완료 모달
  $(".report_modal .apply_btn").click(function () {
    $(".modal_bg.report_modal").fadeOut(200);
    $(".modal_bg.report_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 댓글 삭제 모달
  $(".comment_section .del_btn").click(function () {
    $(".modal_bg.comment_modal").fadeIn(200);
    scrollOff();
  });

  // 댓글 삭제 완료 모달
  $(".comment_modal .apply_btn").click(function () {
    $(".modal_bg.comment_modal").fadeOut(200);
    $(".modal_bg.comment_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 여행 후기 페이지 - 게시물 상세 삭제 모달
  $(".review_detail_section .del_btn").click(function () {
    $(".modal_bg.review_del_modal").fadeIn(200);
    scrollOff();
  });

  // 여행 후기 페이지 - 게시물 상세 삭제 완료 모달
  $(".review_del_modal .apply_btn").click(function () {
    $(".modal_bg.review_del_modal").fadeOut(200);
    $(".modal_bg.review_del_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 댓글 섹션에 textarea 작성시 자동으로 높이값 조절되게끔 처리.
  $("textarea").on("keyup", function (e) {
    $(this).css("height", "auto");
    $(this).height(this.scrollHeight);
  });
});
