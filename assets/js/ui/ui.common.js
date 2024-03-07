/*--------------------------------------------------------------
    분류순서
    @Variables  : 전역변수
    @Settings   : 기본설정
    @Utility    : 유틸리티
    @Layout     : 레이아웃
    @Components : 공통모듈
    @Content    : 컨텐츠
    @Init       : 초기실행
--------------------------------------------------------------*/
/*--------------------------------------------------------------
    @Variables
--------------------------------------------------------------*/
//현재 해상도 너비 반응형 test
window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  const fontSize = calculateFontSize(screenWidth);
  document.documentElement.style.fontSize = `${fontSize}px`; // HTML의 font-size 변경
});

function calculateFontSize(screenWidth, screenHeight) {
  // screenWidth와 screenHeight를 모두 고려하여 폰트 크기를 계산하는 로직을 작성합니다.
  if (screenWidth >= 1025) {
    return 16; // PC에서는 폰트 크기를 18px로 설정
  } else if (screenWidth >= 768 && screenWidth <= 1024) {
    return 15; // 태블릿에서는 폰트 크기를 16px로 설정
  } else if (screenWidth >= 360 && screenWidth <= 767) {
    return 14; // 모바일에서는 폰트 크기를 14px로 설정
  } else {
    return 14; // 그 외의 경우에는 폰트 크기를 14px로 설정 (기본값)
  }
}

/*--------------------------------------------------------------
    @Settings
--------------------------------------------------------------*/

/*--------------------------------------------------------------
    @Utilites
--------------------------------------------------------------*/

/*--------------------------------------------------------------
    @Layouts
--------------------------------------------------------------*/
// swiper
// var swiper = new Swiper('.swiper-container', {
//     // 옵션 설정
//     slidesPerView: 'auto', // 화면에 보이는 슬라이드 개수를 자동으로 설정
//     spaceBetween: 10, // 슬라이드 간의 간격 설정
//     scrollbar: {
//       // 수직 스크롤바 활성화
//       el: '.swiper-scrollbar',
//       draggable: true // 스크롤바를 드래그하여 스와이프할 수 있도록 설정
//     }
//   });
// swiper html
// <!-- Swiper 컨테이너 -->
// <div class="swiper-container">
//     <!-- 슬라이드를 담는 wrapper 요소 -->
//     <div class="swiper-wrapper">
//     <!-- 각 탭 버튼 및 탭 콘텐츠 -->
//     <div class="swiper-slide">Tab 1 Content</div>
//     <div class="swiper-slide">Tab 2 Content</div>
//     <div class="swiper-slide">Tab 3 Content</div>
//     <div class="swiper-slide">Tab 4 Content</div>
//     <div class="swiper-slide">Tab 5 Content</div>
//     <div class="swiper-slide">Tab 6 Content</div>
//     <div class="swiper-slide">Tab 7 Content</div>
//     <!-- 필요한 만큼 탭 콘텐츠를 추가 -->
//     </div>
// </div>

// 모달 - 열기
function modalOn(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}
// 모달 - 닫기
function modalOff(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}
// 모달 - 각 요소에 대해 클릭 이벤트 추가, 외부 클릭 시 닫기
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".btn-modal");

  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modalId = button.dataset.modal;
      modalOn(modalId);
    });
  });

  const modals = document.querySelectorAll(".modal-overlay");

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal-overlay")) {
        const modalId = modal.id;
        modalOff(modalId);
      }
    });
  });
  // 모달 - esc로 닫기
  window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      modals.forEach(function (modal) {
        modal.style.display = "none";
      });
    }
  });
});

//토글 메뉴
const menuItems = document.querySelectorAll(".menu, .menu-tit");
const toggleMenu = (event) => {
  event.preventDefault(); // 기본 동작 중지
  const clickedMenu = event.currentTarget.closest(".menu"); // 클릭된 요소의 부모 .menu 요소 가져오기
  if (clickedMenu.classList.contains("menu")) {
    clickedMenu.classList.toggle("active");
  }
};
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

// GNB
function guideGnbSet(_this, n1, n2) {
  // _this - .header
  // n1 - depth1 n번째 메뉴
  // n2 - depth2 n번째 메뉴
}

/*--------------------------------------------------------------
    @Components
--------------------------------------------------------------*/
// 최상단 이동 버튼
window.addEventListener("scroll", function () {
  // 스크롤 시 버튼을 나타내거나 숨김
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";

  // 헤더를 고정시킴
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

function scrollToTop() {
  // 페이지의 최상단으로 스크롤
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
/*--------------------------------------------------------------
    @Contents
--------------------------------------------------------------*/

/*--------------------------------------------------------------
    @Inits
--------------------------------------------------------------*/
/* Setting */
function set_init() {}

/* UI */
function ui_init() {}

/* Ready */
// $(function () {
//   set_init();
//   ui_init();
// });
