class TrendyHeadPC extends HTMLElement {
  constructor() {
    super();
  }
  // 문서의 DOM에 처음 연결될 때 호출
  connectedCallback() {
    this.render();
  }
  // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
  adoptCallback() {}
  // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
  // 문서의 DOM에서 연결 해제될 때 호출
  disconnectedCallback() {}
  render() {
    const VW = window.innerWidth;
    let r = VW <= 900 ? true : false;

    // 로그인 분기처리
    let login = true;
    let fileName = document.URL.split("/");
    console.log(fileName[fileName.length - 2]);
    let urlVal = undefined;
    switch (fileName[fileName.length - 2]) {
      case "mypage":
        urlVal = "mypage";
        break;
      case "makeTrip":
        urlVal = "makeTrip";
        break;
      case "product":
        sw(fileName[fileName.length - 1], "product");
        break;
      case "europeNews":
        urlVal = "europeNews";
        break;
      case "serviceCenter":
        sw(fileName[fileName.length - 1], "serviceCenter");
        break;
      case "etc":
        urlVal = "etc";
        break;
      case "travelVideo":
        urlVal = "travelVideo";
        break;
      case "travelReview":
        urlVal = ["product", "review"];
        break;
      default:
        sw(fileName[fileName.length - 1]);
        break;
    }

    function sw(a, v) {
      switch (a) {
        case "index.html":
          urlVal = null;
          break;
        case "qa_list.html":
          urlVal = [v, "qa_list"];
          break;
        case "faq.html":
          urlVal = [v, "faq"];
          break;
        case "product_list.html":
          urlVal = [v, "we"];
          break;
        case "detail.html":
          urlVal = [v, "we"];
          break;
        default:
          urlVal = undefined;
          break;
      }
    }
    let mobileHTML = `
            <div>
                <header class="m_header ${
                  urlVal !== null ? null : "main_p_header"
                }">
                    <ul class="m_unit_box">
                        <li class="m_menu"></li>
                        <li class="m_logo" onclick="location.href='${
                          urlVal !== null ? "../" : ""
                        }index.html'"></li>
                        <li class="m_unit_list">
                            <span class="m_search"></span>
                            <span class="m_user" onclick="location.href='${
                              urlVal !== null ? "../" : ""
                            }mypage/mypage.html'"></span>
                        </li>
                    </ul>
                    <div class="blackbg"></div>
                    <div class="m_gnb_wrap">
                        <ul class="m_gnb">
                            <li class="m_gnb_li ${
                              Array.isArray(urlVal) && urlVal[0] === "product"
                                ? " on"
                                : ""
                            }">
                                <div class="menu_link">
                                    <a href="#" onclick="return false">여행 상품</a>
                                    <span class="m_arrow"></span>
                                </div>
                                <ul class="inner_gnb">
                                    <li class="m_inner_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "we"
                                        ? " on"
                                        : ""
                                    }">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }product/product_list.html">우리 끼리 단독</a>
                                    </li>
                                    <li class="m_inner_list">
                                        <a href="#" onclick="return false">패키지 여행</a>
                                    </li>
                                    <li class="m_inner_list">
                                        <a href="#" onclick="return false">데이투어</a>
                                    </li>
                                    <li class="m_inner_list">
                                        <a href="#" onclick="return false">테마 여행</a>
                                    </li>
                                    <li class="m_inner_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "review"
                                        ? " on"
                                        : ""
                                    }">
                                        <a href="#" onclick="location.href='${
                                          urlVal !== null ? "../" : ""
                                        }travelReview/travel_review.html'">여행 후기</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="m_gnb_li ${
                              urlVal === "makeTrip" ? " on" : ""
                            }">
                                <div class="menu_link">
                                    <a href="#" onclick="return false">내가 만드는 여행</a>
                                </div>
                            </li>
                            <li class="m_gnb_li ${
                              urlVal === "europeNews" ? " on" : ""
                            }">
                                <div class="menu_link">
                                    <a href="${
                                      urlVal !== null ? "../" : ""
                                    }europeNews/europe_news.html">유럽 소식</a>
                                </div>
                            </li>
                            <li class="m_gnb_li ${
                              urlVal === "travelVideo" ? " on" : ""
                            }">
                                <div class="menu_link">
                                    <a href="${
                                      urlVal !== null ? "../" : ""
                                    }travelVideo/travel_video.html">여행 동영상</a>
                                </div>
                            </li>
                            <li class="m_gnb_li ${
                              urlVal === "etc" ? " on" : ""
                            }">
                                <div class="menu_link">
                                    <a href="${
                                      urlVal !== null ? "../" : ""
                                    }etc/company.html">회사 소개</a>
                                </div>
                            </li>
                            <li class="m_gnb_li ${
                              Array.isArray(urlVal) &&
                              urlVal[0] === "serviceCenter"
                                ? " on"
                                : ""
                            }">
                                <div class="menu_link">
                                    <a href="#" onclick="return false">고객센터</a>
                                    <span class="m_arrow"></span>
                                </div>
                                <ul class="inner_gnb">
                                    <li class="m_inner_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "qa_list"
                                        ? " on"
                                        : ""
                                    }">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }serviceCenter/qa_list.html">1:1 문의</a>
                                    </li>
                                    <li class="m_inner_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "faq"
                                        ? " on"
                                        : ""
                                    }"">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }serviceCenter/faq.html">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </header>
                <!-- 검색 모달 -->
                <div id="mSearchModal">
                <div class="search_cont_box">
                    <div class="sear_cont_wrap">
                        <button type="button" class="search_close"></button>
                        <div class="search_cont">
                            <div class="search_box">
                                <label>
                                    <input type="text" class="search_input" placeholder="검색">
                                </label>
                                <a href="${
                                  urlVal !== null ? "../" : ""
                                }search/search.html" class="pc_search"></a>
                            </div>
                            <h3>최근 검색어</h3>
                            <div class="contents_box">
                                <ul class="recent_contents_wrap">
                                    <li class="recent_list">
                                        <span class="recent_val">이탈리아</span>
                                        <span class="recent_del"></span>
                                    </li>
                                    <li class="recent_list">
                                        <span class="recent_val">유럽</span>
                                        <span class="recent_del"></span>
                                    </li>
                                    <li class="recent_list">
                                        <span class="recent_val">영국</span>
                                        <span class="recent_del"></span>
                                    </li>
                                    <li class="recent_list">
                                        <span class="recent_val">프랑스</span>
                                        <span class="recent_del"></span>
                                    </li>
                                </ul>
                                <!-- 최근 검색어가 없을때 나오는 텍스트 -->
                                <!-- <div class="none_text">최근 검색 내역이 존재하지 않습니다.</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    let pcHTML = ` 
            <header id="headerPC" ${
              urlVal !== null
                ? 'style="padding-bottom: 2px; border-bottom: 1px solid #ECECEC"'
                : ""
            }>
                <div class="header_wrap ${
                  urlVal !== null ? "" : "none_header"
                }">
                    <div class="header_top">
                        <a class="logo" href="${
                          urlVal !== null ? "../" : ""
                        }index.html">
                            <img src="${
                              urlVal !== null
                                ? `${
                                    urlVal !== null ? "../" : ""
                                  }img/icon/logo.svg`
                                : `${
                                    urlVal !== null ? "../" : ""
                                  }img/icon/w_logo.svg`
                            }" alt="로고">
                        </a>
                        <ul class="unit_box">
                            <li class="unit_list">
                                <label>
                                    <input type="text" class="search_input" placeholder="${
                                      urlVal === null ? "검색" : "검색"
                                    }">
                                </label>
                                <a href="${
                                  urlVal !== null ? "../" : ""
                                }search/search.html" class="pc_search"></a>
                            </li>
                            ${
                              login
                                ? `
                                    <li class="unit_list user_list">
                                        <span class="profile"></span>
                                        <a href="#" onclick="location.href='${
                                          urlVal !== null ? "../" : ""
                                        }mypage/mypage.html'">${"포차코"}님</a>
                                    </li>
                                    `
                                : ` <li class="unit_list">
                                        <a href="#" onclick="location.href='${
                                          urlVal !== null ? "../" : ""
                                        }login/login.html'">로그인</a>
                                    </li>
                                    <li class="unit_list">
                                        <a href="#" onclick="location.href='${
                                          urlVal !== null ? "../" : ""
                                        }login/signup.html'">회원가입</a>
                                    </li>`
                            }
                        </ul>
                    </div>
                    <div class="header_bottom">
                        <ul class="gnb_box">
                            <li class="gnb_list ${
                              Array.isArray(urlVal)
                                ? urlVal[0] === "product"
                                  ? "active"
                                  : ""
                                : urlVal === "product"
                                ? "active"
                                : ""
                            }">
                                <a href="#" onclick="return false">여행 상품</a>
                                <ul class="inner_gnb_box">
                                    <li class="inner_gnb_list ${
                                      Array.isArray(urlVal)
                                        ? urlVal[1] === "we"
                                          ? "active"
                                          : ""
                                        : ""
                                    }">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }product/product_list.html">우리 끼리 단독</a>
                                    </li>
                                    <li class="inner_gnb_list">
                                        <a href="#" onclick="return false">패키지 여행</a>
                                    </li>
                                    <li class="inner_gnb_list">
                                        <a href="#" onclick="return false">데이 투어</a>
                                    </li>
                                    <li class="inner_gnb_list">
                                        <a href="#" onclick="return false">테마 여행</a>
                                    </li>
                                    <li class="inner_gnb_list ${
                                      Array.isArray(urlVal)
                                        ? urlVal[1] === "review"
                                          ? "active"
                                          : ""
                                        : ""
                                    }">
                                        <a href="#" onclick="location.href='${
                                          urlVal !== null ? "../" : ""
                                        }travelReview/travel_review.html'">여행 후기</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="gnb_list ${
                              urlVal === "makeTrip" ? "active" : ""
                            }">
                                <a href="#">내가 만드는 여행</a>
                            </li>
                            <li class="gnb_list ${
                              urlVal === "europeNews" ? "active" : ""
                            }">
                                <a href="${
                                  urlVal !== null ? "../" : ""
                                }europeNews/europe_news.html">유럽 소식</a>
                            </li>
                            <li class="gnb_list ${
                              urlVal === "travelVideo" ? "active" : ""
                            }">
                                <a href="${
                                  urlVal !== null ? "../" : ""
                                }travelVideo/travel_video.html">여행 동영상</a>
                            </li>
                            <li class="gnb_list ${
                              urlVal === "etc" ? " active" : ""
                            }">
                                <a href="${
                                  urlVal !== null ? "../" : ""
                                }etc/company.html">회사 소개</a>
                            </li>
                            <li class="gnb_list ${
                              Array.isArray(urlVal) &&
                              urlVal[0] === "serviceCenter"
                                ? "active"
                                : ""
                            }">
                                <a href="#" onclick="return false">고객센터</a>
                                <ul class="inner_gnb_box last">
                                    <li class="inner_gnb_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "qa_list"
                                        ? "active"
                                        : ""
                                    }">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }serviceCenter/qa_list.html">1:1 문의</a>
                                    </li>
                                    <li class="inner_gnb_list ${
                                      Array.isArray(urlVal) &&
                                      urlVal[1] === "faq"
                                        ? "active"
                                        : ""
                                    }">
                                        <a href="${
                                          urlVal !== null ? "../" : ""
                                        }serviceCenter/faq.html">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        `;

    window.addEventListener("resize", () => {
      const _VW = window.innerWidth;

      if (_VW <= 900) {
        if (r) {
          return;
        } else {
          r = true;
          this.innerHTML = mobileHTML;
          domGnbFuc();
        }
      } else {
        if (!r) {
          return;
        } else {
          r = false;
          this.innerHTML = pcHTML;
          domGnbFuc();
        }
      }
    });

    this.innerHTML = r ? mobileHTML : pcHTML;
    document.addEventListener("DOMContentLoaded", domGnbFuc);
  }
}
class TrendyFooterPC extends HTMLElement {
  constructor() {
    super();
  }
  // 문서의 DOM에 처음 연결될 때 호출
  connectedCallback() {
    this.render();
  }
  // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
  adoptCallback() {}
  // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
  // 문서의 DOM에서 연결 해제될 때 호출
  disconnectedCallback() {}
  render() {
    let fileName = document.URL.split("/");
    let file = fileName[fileName.length - 1];
    let mar = "";
    if (
      file.includes("reservation_product") ||
      file.includes("my_reservation_product")
    ) {
      mar = "mar_1";
    } else if (file.includes("my_payment")) {
      mar = "mar_2";
    } else {
      mar = "";
    }

    let val = file === "index.html" ? false : true;

    this.innerHTML = `
            <div class="footer_top">
                <div class="footer_contents">
                    <ul class="top_footer_wrap">
                        <li class="top_footer_list">
                            <a href="#" onclick="location.href='${
                              val ? "../" : ""
                            }etc/company.html'">회사소개</a>
                        </li>
                        <li class="top_footer_list">
                            <a href="#" onclick="location.href='${
                              val ? "../" : ""
                            }etc/term.html'">이용약관</a>
                        </li>
                        <li class="top_footer_list">
                            <a href="#" onclick="return false">여행약관</a>
                        </li>
                        <li class="top_footer_list">
                            <a href="#" onclick="return false">개인정보취급방침</a>
                        </li>
                        <li class="top_footer_list">
                            <a href="#" onclick="location.href='${
                              val ? "../" : ""
                            }map/map.html'">찾아오시는길</a>
                        </li>
                    </ul>
                    <ul class="footer_unit_wrap m_none">
                        <li class="footer_unit_list">
                            <a href="#" onclick="return false">
                                <img src="${
                                  val ? "../" : ""
                                }img/icon/kakao.svg" alt="카카오톡">
                            </a>
                        </li>
                        <li class="footer_unit_list">
                            <a href="#" onclick="return false">
                                <img src="${
                                  val ? "../" : ""
                                }img/icon/help.svg" alt="도움">
                            </a>
                        </li>
                        <li class="footer_unit_list">
                            <a href="#" onclick="return false">
                                <img src="${
                                  val ? "../" : ""
                                }img/icon/mail.svg" alt="메일">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer_bottom ${mar}">
                <div class="footer_contents">
                    <ul class="left_f_dox f_box">
                        <li class="f_title">
                            <p>문의전화</p>
                        </li>
                        <li class="f_list">
                            <p>업무시간 : 평일 09:00 - 18:00 (토,일,공휴일 휴무)</p>
                        </li>
                        <li class="f_list">
                            <p>전화 : 02-0000-0000</p>
                        </li>
                        <li class="f_list">
                            <p>팩스 : 02-0000-0000</p>
                        </li>
                    </ul>
                    <ul class="center_f_dox f_box">
                        <li class="f_title">
                            <p>입금계좌안내</p>
                        </li>
                        <li class="f_list">
                            <p>계좌 : 평일 09:00 - 18:00 (토,일,공휴일 휴무)</p>
                        </li>
                        <li class="f_list">
                            <p>예금주 : 투어클럽</p>
                        </li>
                    </ul>
                    <ul class="right_f_dox f_box">
                        <li class="f_list">
                            <address>상호명 : 투어클럽 <span> | </span> 대표 : OOO <span class="m_none"> | </span> <br class="m_on"> 주소 : 서울특별시 서초구 강남대로 000 0층</address>
                        </li>
                        <li class="f_list">
                            <p>개인정보관리책임자 : OOO <span> | </span> 사업자등록번호 : OOO-OO-OOOOO</p>
                        </li>
                        <li class="f_list">
                            <p>통신판매업신고 : 제 0000-서울서초-0000호 <span class="m_none"> | </span> <br class="m_on"> 이메일 : abc123@naver.com</p> 
                        </li>
                        <li class="f_list">
                            <p>Copyright. TOUR EUROPE corp. All rights reserved.</p> 
                        </li>
                    </ul>
                    <ul class="footer_unit_wrap m_on">
                    <li class="footer_unit_list">
                        <a href="#" onclick="return false">
                            <img src="${
                              val ? "../" : ""
                            }img/icon/kakao.svg" alt="카카오톡">
                        </a>
                    </li>
                    <li class="footer_unit_list">
                        <a href="#" onclick="return false">
                            <img src="${
                              val ? "../" : ""
                            }img/icon/help.svg" alt="도움">
                        </a>
                    </li>
                    <li class="footer_unit_list">
                        <a href="#" onclick="return false">
                            <img src="${
                              val ? "../" : ""
                            }img/icon/mail.svg" alt="메일">
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        `;
  }
}
function domGnbFuc() {
  let _fileName = document.URL.split("/");
  let __file = _fileName[_fileName.length - 1];
  let val = __file === "index.html" ? false : true;

  let fileName = document.URL.substring(
    document.URL.lastIndexOf("/") + 1,
    document.URL.length
  );
  const gnbList = document.querySelectorAll(".gnb_list");
  const mainSlider = document.querySelector(".main_slider");
  const headerP = document.querySelector("#headerPC");
  const headerM = document.querySelector(".m_header");
  let scroll = false;
  // pc
  if (gnbList) {
    gnbList.forEach((item, idx) => {
      item.removeEventListener("mouseover", mouseoverFuc);
      item.addEventListener("mouseover", mouseoverFuc);

      item.removeEventListener("mouseleave", mouseleaveFuc);
      item.addEventListener("mouseleave", mouseleaveFuc);
    });
  }
  // mobile
  const mMenuBtn = document.querySelector(".m_menu");

  if (mMenuBtn) {
    const list = document.querySelectorAll(".menu_link");
    const backBg = document.querySelector(".blackbg");
    mMenuBtn.removeEventListener("click", mClickFuc);
    mMenuBtn.addEventListener("click", mClickFuc);
    list.forEach((item, idx) => {
      item.removeEventListener("click", mlistFuc);
      item.addEventListener("click", mlistFuc);
    });

    backBg.removeEventListener("click", bgFuc);
    backBg.addEventListener("click", bgFuc);
  }

  function mouseoverFuc(e) {
    let target = e.currentTarget;
    const inner = target.querySelector(".inner_gnb_box");
    const headerWrap = document.querySelector(".header_wrap");
    const gnbBox = document.querySelector(".gnb_box");
    let h = target.offsetHeight;

    headerWrap.classList.add("on");
    target.classList.add("on");
    if (inner) {
      gnbBox.classList.add("on");
    }
    if (fileName.indexOf("index") >= 0) {
      const logo = document.querySelector(".logo img");
      logo.setAttribute("src", `${val ? "../" : ""}img/icon/logo.svg`);
    }
  }
  function mouseleaveFuc(e) {
    let target = e.currentTarget;
    const inner = target.querySelector(".inner_gnb_box");
    const headerWrap = document.querySelector(".header_wrap");
    const gnbBox = document.querySelector(".gnb_box");
    scroll ? null : headerWrap.classList.remove("on");
    target.classList.remove("on");
    if (inner) {
      gnbBox.classList.remove("on");
    }
    if (fileName.indexOf("index") >= 0) {
      const logo = document.querySelector(".logo img");
      scroll
        ? null
        : logo.setAttribute("src", `${val ? "../" : ""}img/icon/w_logo.svg`);
    }
  }
  function mClickFuc() {
    const body = document.querySelector("body");
    const mHead = document.querySelector(".m_header");
    let has = mHead.classList.contains("on");
    if (has) {
      mHead.classList.remove("on");
      body.style.overflow = "inherit";
      $(".blackbg").fadeOut(200);
    } else {
      mHead.classList.add("on");
      body.style.overflow = "hidden";
      $(".blackbg").fadeIn(200);
    }
  }
  function mlistFuc(e) {
    const allList = document.querySelectorAll(".m_gnb_li");
    let target = e.currentTarget;
    let parList = target.parentNode;
    let has = parList.classList.contains("on");
    if (has) {
      parList.classList.remove("on");
    } else {
      allList.forEach((item) => item.classList.remove("on"));
      parList.classList.add("on");
    }
  }
  function bgFuc(e) {
    const body = document.querySelector("body");
    let target = e.currentTarget;
    let par = target.parentNode;
    par.classList.remove("on");
    body.style.overflow = "inherit";
    $(target).fadeOut(200);
  }
  const searchBtn = document.querySelector(".m_search");
  const searchClose = document.querySelector(".search_close");
  if (searchBtn) {
    searchBtn.removeEventListener("click", searchFuc);
    searchClose.removeEventListener("click", searchFuc);

    searchBtn.addEventListener("click", searchFuc);
    searchClose.addEventListener("click", searchFuc);
  }
  function searchFuc() {
    const target = document.querySelector(".m_search");
    let has = target.classList.contains("on");
    const modal = document.getElementById("mSearchModal");
    const header = document.querySelector(".m_header");
    const body = document.querySelector("body");
    const box = document.querySelector(".search_cont_box");
    if (has) {
      target.classList.remove("on");

      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
      box.classList.remove("on");
      setTimeout(() => {
        $("#mSearchModal").fadeOut(100);
        body.style.overflow = "inherit";
      }, 500);
    } else {
      target.classList.add("on");
      $("#mSearchModal").fadeIn(100);
      body.style.overflow = "hidden";
      setTimeout(() => {
        header.style.opacity = "0";
        header.style.pointerEvents = "none";
        box.classList.add("on");
      }, 100);
    }
  }
  // 메인 페이지 스크롤 이벤트 함수
  function scrollFuc(e) {
    let mSH = mainSlider.clientHeight;
    let thisH = headerP ? headerP.clientHeight : headerM.clientHeight;
    let y = document.documentElement.scrollTop;
    if (y >= mSH - thisH) {
      if (scroll) {
        return;
      } else {
        scroll = true;
        const hWrap = document.querySelector(".header_wrap");
        const MWrap = document.querySelector(".m_header");
        const hImg = document.querySelector(".header_top a img");
        hWrap ? hWrap.classList.add("on") : MWrap.classList.add("active");
        hImg
          ? hImg.setAttribute("src", `${val ? "../" : ""}img/icon/logo.svg`)
          : null;
      }
    } else {
      if (!scroll) {
        return;
      } else {
        scroll = false;
        const hWrap = document.querySelector(".header_wrap");
        const MWrap = document.querySelector(".m_header");
        const hImg = document.querySelector(".header_top a img");
        hWrap ? hWrap.classList.remove("on") : MWrap.classList.remove("active");
        hImg
          ? hImg.setAttribute("src", `${val ? "../" : ""}img/icon/w_logo.svg`)
          : null;
      }
    }
  }

  // 메인 페이지 일때의 조건문
  if (mainSlider) {
    let _mSH = mainSlider.clientHeight;
    let _thisH = headerP ? headerP.clientHeight : headerM.clientHeight;
    let _y = document.documentElement.scrollTop;
    if (_y >= _mSH - _thisH) {
      scroll = true;
      const _hWrap = document.querySelector(".header_wrap");
      const _MWrap = document.querySelector(".m_header");
      const _hImg = document.querySelector(".header_top a img");
      _hWrap ? _hWrap.classList.add("on") : _MWrap.classList.add("active");
      _hImg
        ? _hImg.setAttribute("src", `${val ? "../" : ""}img/icon/logo.svg`)
        : null;
    } else {
      scroll = false;
      const _hWrap = document.querySelector(".header_wrap");
      const _MWrap = document.querySelector(".m_header");
      const _hImg = document.querySelector(".header_top a img");
      _hWrap
        ? _hWrap.classList.remove("on")
        : _MWrap.classList.remove("active");
      _hImg
        ? _hImg.setAttribute("src", `${val ? "../" : ""}img/icon/w_logo.svg`)
        : null;
    }
    window.removeEventListener("scroll", scrollFuc);
    window.addEventListener("scroll", scrollFuc);
  } else {
    scroll = true;
    const _hWrap = document.querySelector(".header_wrap");
    const _MWrap = document.querySelector(".m_header");
    _hWrap ? _hWrap.classList.add("on") : _MWrap.classList.add("active");
  }
}
window.customElements.define("trendy-headpc", TrendyHeadPC);
window.customElements.define("trendy-footerpc", TrendyFooterPC);
