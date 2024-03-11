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
/*--------------------------------------------------------------
    @header | mo header
--------------------------------------------------------------*/

/*--------------------------------------------------------------
    @최상단 버튼
--------------------------------------------------------------*/
// 최상단 이동 버튼
window.addEventListener("scroll", function () {
  // 스크롤 시 버튼을 나타내거나 숨김
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
});

function scrollToTop() {
  // 페이지의 최상단으로 스크롤
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
