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
    @modal
--------------------------------------------------------------*/
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
/*--------------------------------------------------------------
      @toggle menu
  --------------------------------------------------------------*/
//토글 메뉴
// const menuItems = document.querySelectorAll(".menu, .menu-tit");
// const toggleMenu = (event) => {
//   event.preventDefault(); // 기본 동작 중지
//   const clickedMenu = event.currentTarget.closest(".menu"); // 클릭된 요소의 부모 .menu 요소 가져오기
//   if (clickedMenu.classList.contains("menu")) {
//     clickedMenu.classList.toggle("active");
//   }
// };
// menuItems.forEach((menuItem) => {
//   menuItem.addEventListener("click", toggleMenu);
// });
/*--------------------------------------------------------------
      @header | mo toggle menu, side toggle menu
  --------------------------------------------------------------*/

document.addEventListener("click", function (e) {
  let 클릭한요소 = e.target;
  let 클릭한요소부모li = 클릭한요소.parentNode;

  // 아이콘 메뉴 클릭 시 모바일 메뉴 toggle 시키기
  const 아이콘메뉴 = document.querySelector("header .icon.menu");
  const 모바일메뉴 = document.querySelector(".gnb-wrap.mo");
  if (클릭한요소 == 아이콘메뉴) {
    모바일메뉴.classList.toggle("show");
  }

  // 큰 메뉴 클릭 시 작은 메뉴 toggle로 나오게 하기
  const 큰메뉴메뉴li들 = document.querySelectorAll(".menu > li");
  const 작은메뉴li들 = document.querySelectorAll(".menu-sub > li");
  let 큰메뉴토글 = false;

  큰메뉴메뉴li들.forEach((큰메뉴메뉴li) => {
    // 1. 클릭한 요소 active toggle
    // 2. li 안에 클릭한 요소 포함되어있으면 li active 활성화
    // 3. 둘 다 아니라면 li active remove
    if (큰메뉴메뉴li == 클릭한요소부모li) {
      큰메뉴메뉴li.classList.toggle("active");
    } else if (큰메뉴메뉴li.contains(클릭한요소)) {
      큰메뉴메뉴li.classList.add("active");
    } else {
      큰메뉴메뉴li.classList.remove("active");
    }
  });

  // 작은 메뉴 클릭 시 안에 작작메뉴 toggle로 나오게 하기
  작은메뉴li들.forEach((작은메뉴li) => {
    if (작은메뉴li == 클릭한요소부모li) {
      작은메뉴li.classList.toggle("active");
    } else {
      작은메뉴li.classList.remove("active");
    }
  });
});

/*--------------------------------------------------------------
      @최상단 버튼 + header scroll 감지 border-bottom 추가
  --------------------------------------------------------------*/
window.addEventListener("scroll", function () {
  // 스크롤 시 버튼을 나타내거나 숨김
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";

  //  header scroll 감지 border-bottom 추가
  var scrollPosition = $(window).scrollTop();
  var header = $(".header");

  if (scrollPosition > 0) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
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
      @pagination 페이징 갯 수
  --------------------------------------------------------------*/
// 페이지네이션 갯수를 조절하는 JavaScript 코드
// 페이지네이션 갯수를 조절하는 JavaScript 코드
function updatePagination() {
  var pages = document.querySelectorAll(".pages .page");
  var displayCount = window.innerWidth <= 767 ? 3 : pages.length;
  pages.forEach(function (page, index) {
    page.style.display = index < displayCount ? "inline-block" : "none";
  });
}

// 페이지 로드시와 윈도우 크기 변경시 페이지네이션 갯수 업데이트
window.addEventListener("DOMContentLoaded", updatePagination);
window.addEventListener("resize", updatePagination);
