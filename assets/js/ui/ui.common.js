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
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".btn-modal");

  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modalId = button.dataset.modal;
      toggleModal(modalId);
    });
  });

  const modals = document.querySelectorAll(".modal-overlay");

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal-overlay")) {
        const modalId = modal.id;
        toggleModal(modalId);
      }
    });
  });

  window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      modals.forEach(function (modal) {
        modal.style.display = "none";
      });
    }
  });
});

/*--------------------------------------------------------------
      @header | mo toggle menu, side toggle menu
  --------------------------------------------------------------*/
// window.onload = function () {
//   const headerLoad = document.getElementById("header-load");

//   // 헤더를 불러옴
//   fetch("/pages/_include/_header.html")
//     .then((response) => response.text())
//     .then((html) => {
//       headerLoad.innerHTML = html;

//       // 모달 버튼 이벤트 처리
//       const modalButtonsInHeader =
//         document.querySelectorAll(".btn-modal-header");

//       modalButtonsInHeader.forEach(function (button) {
//         button.addEventListener("click", function () {
//           const modalId = button.dataset.modal;
//           toggleModal(modalId); // 모달 열고 닫는 함수 호출
//         });
//       });
//     });

//   // 모달 불러오기
//   // 이 부분은 수정이 필요할 수 있습니다. toggleModal 함수가 어떻게 구현되었는지에 따라 달라질 수 있습니다.
//   toggleModal();
// };

document.addEventListener("click", function (e) {
  let 클릭한요소 = e.target;
  let 클릭한요소부모li = 클릭한요소.parentNode;

  // 아이콘 메뉴 클릭 시 모바일 메뉴 toggle 시키기
  const 아이콘메뉴 = document.querySelector("header .icon.menu");
  const 모바일메뉴 = document.querySelector(".gnb-wrap.mo");

  if (클릭한요소 == 아이콘메뉴) {
    모바일메뉴.classList.toggle("show");
  } else {
  }

  // 큰 메뉴 클릭 시 작은 메뉴 toggle로 나오게 하기
  const 큰메뉴메뉴li들 = document.querySelectorAll(".menu > li");
  const 작은메뉴li들 = document.querySelectorAll(".menu-sub > li");

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
