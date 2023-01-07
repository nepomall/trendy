class myTripModal extends HTMLElement {
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
    attributeChangedCallback() {
        this.render();
    }

    // 문서의 DOM에서 연결 해제될 때 호출
    disconnectedCallback() {}

  render() {
    let fileName = document.URL.split('/');
    console.log(fileName[fileName.length - 2]);
    let urlVal = undefined;
    switch(fileName[fileName.length - 2]) {
        case 'mypage':
            urlVal = 'mypage';
            break;
        case 'makeTrip':
            urlVal = 'makeTrip';
            break;
        case 'product':
            sw(fileName[fileName.length - 1], 'product');
            break;
        case 'europeNews':
            urlVal = 'europeNews';
            break;
        case 'serviceCenter':
            sw(fileName[fileName.length - 1], 'serviceCenter');
            break;
        case 'etc':
            urlVal = 'etc';
            break;
        case 'travelVideo':
            urlVal = 'travelVideo';
            break;
        case 'travelReview':
            urlVal = ['product', 'review'];
            break;
        default:
            sw(fileName[fileName.length - 1]);
            break;
    };
    
    function sw(a, v) {
        switch(a) {
            case 'index.html':
                urlVal = null;
                break;
            case 'qa_list.html':
                urlVal = [v, 'qa_list'];
                break;
            case 'faq.html':
                urlVal = [v, 'faq'];
                break;
            case 'product_list.html':
                urlVal = [v, 'we'];
                break;
            case 'detail.html':
                urlVal = [v, 'we'];
                break;
            default:
                urlVal = undefined;
                break;
        };
    };
    
    this.innerHTML = `
        <!-- pc만 이용 가능 -->
        <div class="modal_bg onlyPc_modal">
            <div class="message_modal">
                <div class="text_area">
                    <span>PC에서 사용 가능한 서비스입니다.</span>
                </div>
                <div class="button_wrap">
                    <button class="apply_btn full close_btn">확인</button>
                </div>
            </div>
        </div>

        <!-- 로그인 안내 모달 -->
        <div class="modal_bg plzLogin_modal">
            <div class="message_modal">
                <div class="text_area">
                    <span>로그인 후 이용 가능합니다.</span>
                </div>
                <div class="button_wrap">
                    <button class="cancel_btn close_btn">확인</button>
                    <button class="apply_btn">로그인</button>
                </div>
            </div>
        </div>

        <!-- 필수 입력 안내 모달 -->
        <div class="modal_bg required_modal">
            <div class="message_modal">
                <div class="text_area">
                    <span>
                        필수 입력 항목을 입력해주세요.
                    </span>
                </div>
                <div class="button_wrap">
                    <button class="apply_btn full close_btn">확인</button>
                </div>
            </div>
        </div>

        <!-- 내가 만든는 여행 모달 -->
        <div class="modal_bg myTrip_modal">
            <div class="modal_box">
                <div class="text_area">
                    <span>
                        내가 만드는 여행
                    </span>
                </div>
                <div class="info_wrap">
                    <!-- 비행날짜 -->
                    <div class="flight_date info_part">
                        <p class="title depart">
                            출발일
                        </p>
                        <p class="title return">
                            귀국일
                        </p>
                        <label>
                            <input type="text" id="departDay" readonly>
                        </label>
                        <label>
                            <input type="text" id="returnDay" readonly>
                        </label>
                        <div class="chk_wrap">
                            <input type="checkbox" id="not_sure" class="chk">
                            <label for="not_sure">
                                여행 날짜 미정
                            </label>
                        </div>
                    </div>
                    <!-- 여행 분류 -->
                    <div class="trip_type info_part">
                        <p class="title">
                            여행 분류
                        </p>
                        <button type="button" class="big_btn family">
                            가족 여행
                        </button>
                        <button type="button" class="big_btn friend">
                            우정 여행
                        </button>
                        <button type="button" class="big_btn couple">
                            커플 여행
                        </button>
                        <button type="button" class="big_btn amity">
                            신혼 여행
                        </button>
                        <button type="button" class="big_btn amity">
                            친목 여행
                        </button>
                        <button type="button" class="big_btn amity">
                            나만의 여행
                        </button>
                        <button type="button" class="big_btn amity">
                            기타 여행
                        </button>
                    </div>
                    <!-- 항공권 유무 -->
                    <div class="ticket info_part">
                        <p class="title">
                            항공권 유무
                        </p>
                        <button type="button" class="big_btn possess">
                            항공권 소지
                        </button>
                        <button type="button" class="big_btn expected">
                            직접 구매 예정
                        </button>
                        <button type="button" class="big_btn agencies">
                            대행 요청
                        </button>
                        <div class="content possess">
                            <div class="depart_ticket">
                                <span>
                                    출발편
                                </span>
                                <input type="date" class="departDate" placeholder="출발 날짜">
                                <div class="time_wrap">
                                    <input type="text" class="timepicker departTime" readyonly/>
                                    <div class="holder_text">출발 시간</div>
                                </div>
                                <input type="text" class="upperCase" placeholder="편명">
                                <input type="text" placeholder="출발 공항 ">
                                <input type="date" class="arriveDate" placeholder="도착 날짜">
                                <div class="time_wrap">
                                    <input type="text" class="timepicker arriveTime" readyonly/>
                                    <div class="holder_text">도착 시간</div>
                                </div>
                                <input type="text" class="upperCase" placeholder="편명">
                                <input type="text" placeholder="도착 공항">
                            </div>
                            <div class="return_ticket">
                                <span>
                                    귀국편
                                </span>
                                <input type="date" class="departDate" placeholder="출발 날짜">
                                <div class="time_wrap">
                                    <input type="text" class="timepicker departTime" readyonly/>
                                    <div class="holder_text">출발 시간</div>
                                </div>
                                <input type="text" class="upperCase" placeholder="편명">
                                <input type="text" placeholder="출발 공항 ">
                                <input type="date" class="arriveDate" placeholder="도착 날짜">
                                <div class="time_wrap">
                                    <input type="text" class="timepicker arriveTime" readyonly/>
                                    <div class="holder_text">도착 시간</div>
                                </div>
                                <input type="text" class="upperCase" placeholder="편명">
                                <input type="text" placeholder="도착 공항">
                            </div>
                            </div>
                        <div class="content agencies">
                            <div class="button_list">
                                <button type="button" class="small_btn">
                                    직항
                                </button>
                                <button type="button" class="small_btn">
                                    경유
                                </button>
                                <button type="button" class="small_btn">
                                    무관
                                </button>
                            </div>
                            <div class="button_list">
                                <button type="button" class="small_btn">
                                    Business 좌석
                                </button>
                                <button type="button" class="small_btn">
                                    Economy 좌석
                                </button>
                                <button type="button" class="small_btn">
                                    무관
                                </button>
                            </div>
                            <div class="button_list">
                                <button type="button" class="small_btn">
                                    오전 ~ 낮 출발
                                </button>
                                <button type="button" class="small_btn">
                                    저녁 ~ 늦은 밤 출발
                                </button>
                                <button type="button" class="small_btn">
                                    무관
                                </button>
                            </div>
                            <div class="button_list">
                                <button type="button" class="small_btn">
                                    국적기
                                </button>
                                <button type="button" class="small_btn">
                                    외항기
                                </button>
                                <button type="button" class="small_btn">
                                    무관
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- 선호 출발 시간 -->
                    <div class="fav_time info_part">
                        <p class="title">
                            선호 출발 시간
                        </p>
                        <button type="button" class="big_btn family">
                            낮 출발
                        </button>
                        <button type="button" class="big_btn family">
                            밤 출발
                        </button>
                        <button type="button" class="big_btn family">
                            상관 없음
                        </button>
                    </div>
                    <!-- 여행 인원 -->
                    <div class="personnel info_part">
                        <p class="title">
                            여행 인원
                        </p>
                        <div class="person adult">
                            <p class="text">
                                성인&ensp;<span>만 00세 이상</span>
                            </p>
                            <div class="num_wrap">
                                <button type="button" class="minus"></button>
                                <button type="button" class="plus"></button>
                                <input type="text" value="0" maxlength="2" numberOnly readonly>
                            </div>
                        </div>
                        <div class="person child">
                            <p class="text">
                                소아&ensp;<span>00세 - 00세</span>
                            </p>
                            <div class="num_wrap">
                                <button type="button" class="minus"></button>
                                <button type="button" class="plus"></button>
                                <input type="text" value="0" maxlength="2" numberOnly readonly>
                            </div>
                        </div>
                        <div class="person baby">
                            <p class="text">
                                유아&ensp;<span>00세 - 00세</span>
                            </p>
                            <div class="num_wrap">
                                <button type="button" class="minus"></button>
                                <button type="button" class="plus"></button>
                                <input type="text" value="0" maxlength="2" numberOnly readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button_wrap">
                    <button class="cancel_btn close_btn">
                        취소
                    </button>
                    <button class="apply_btn" onclick="location.href='${urlVal !== null ? '../' : ''}makeTrip/make_trip.html'">
                        확인
                    </button>
                </div>
            </div>
        </div>
        `;
    }
};

window.customElements.define('trendy-mytripmodal', myTripModal);