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
  let clickedElement = e.target;
  const ACTIVE = "active";

  // click시 active toggle
  const clickedElement_parent = clickedElement.parentNode;
  clickedElement_parent.classList.toggle(ACTIVE);

  //확인용
  console.log(clickedElement_parent);
  //확인용

  const menu_li_all = document.querySelectorAll(".menu li");
  const gnb_wrap_mo = document.querySelector(".gnb-wrap.mo");

  menu_li_all.forEach((item) => {
    // 선택한 요소 외 다른 요소 active remove
    if (item !== clickedElement_parent) {
      item.classList.remove(ACTIVE);
    }

    // 선택한 요소의 상위 요소가 side-toggle 포함하면 .menu > li active add (toggle x)
    const item_grand_parent = item.parentNode.parentNode.parentNode;

    if (item_grand_parent.classList.contains("side-toggle")) {
      item.classList.add(ACTIVE);
    }

    // 선택한 요소의 상위 요소가 gnb-wrap.mo이면 gnb-wrap.mo .active add
    // const 선택한 요소의 상위 요소
    // const gnb-wrap.mo
    // 선택한 요소의 상위 요소 == gnb-wrap.mo 이면 gnb-wrap.mo .active add
    const gnb_wrap_mo = document.querySelector(".gnb-wrap.mo");

    if (
      item_grand_parent.classList.contains("gnb-wrap") &&
      item_grand_parent.classList.contains("mo")
    ) {
      item.classList.add(ACTIVE);
    }
  });

  const icon_menu = document.querySelector("header .icon.menu");

  if (clickedElement == icon_menu) {
    gnb_wrap_mo.classList.toggle(ACTIVE);
  }
});
// document.addEventListener("DOMContentLoaded", function () {
//   const subMenuItems = document.querySelectorAll("header .menu-sub li");
//   const gnb_menu = document.querySelector(".gnb button.menu");
//   const gnb_wrap_mo = document.querySelector(".gnb-wrap.mo");
//   const gnb_wrap_mo_menu = document.querySelectorAll(".gnb-wrap.mo .menu > li");
//   const menuSubTit = document.querySelectorAll(".gnb-wrap.mo .menu-sub > li");
//   let currentActiveItem = null;

//   const slideDown = (e) => {
//     const clicked = e.currentTarget;
//     subMenuItems.forEach((item) => {
//       if (item !== clicked) {
//         item.classList.remove("active");
//       }
//     });
//     clicked.classList.toggle("active");
//   };

//   const showMenu = () => {
//     gnb_wrap_mo.classList.toggle("active");
//     if (!gnb_wrap_mo.classList.contains("active")) {
//       gnb_wrap_mo_menu.forEach((menuItem) =>
//         menuItem.classList.remove("active")
//       );
//       menuSubTit.forEach((menuItem) => menuItem.classList.remove("active"));
//     }
//   };

//   const handleClick = (event) => {
//     const clickedItem = event.currentTarget;
//     clickedItem.classList.toggle("active");
//     if (currentActiveItem && currentActiveItem !== clickedItem) {
//       currentActiveItem.classList.remove("active");
//       currentActiveItem
//         .querySelectorAll(".menu-sub > li.active")
//         .forEach((menuItem) => menuItem.classList.remove("active"));
//     }
//     document.querySelectorAll(".menu > li").forEach((menuItem) => {
//       if (menuItem !== clickedItem) {
//         menuItem.classList.remove("active");
//         menuItem
//           .querySelectorAll(".menu-sub > li.active")
//           .forEach((subMenuItem) => subMenuItem.classList.remove("active"));
//       }
//     });
//     document.querySelectorAll(".menu > li").forEach((menuItem) => {
//       menuItem.style.color = clickedItem.classList.contains("active")
//         ? "#ccc"
//         : "";
//     });
//     if (clickedItem.classList.contains("active")) {
//       currentActiveItem = clickedItem;
//     } else {
//       currentActiveItem = null;
//     }
//     //-----------------------------------------------
//     var parent_node = clickedItem.parentNode.parentNode.parentNode;
//     if (
//       parent_node.classList.contains("mo") &&
//       clickedItem.querySelector(".menu-sub")
//     ) {
//       event.preventDefault(); // 모바일 이벤트 prevent
//     }
//   };

//   subMenuItems.forEach((item) => item.addEventListener("click", slideDown));
//   gnb_menu.addEventListener("click", showMenu);

//   document
//     .querySelectorAll(".menu > li")
//     .forEach((item) => item.addEventListener("click", handleClick));

//   document.querySelectorAll(".menu-sub > li").forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.stopPropagation();
//       const clickedSubMenu = event.currentTarget;
//       document
//         .querySelectorAll(".menu > li .menu-sub > li.active")
//         .forEach((menuItem) => menuItem.classList.remove("active"));
//       clickedSubMenu.classList.toggle("active");
//       const parentMenuItem = clickedSubMenu.closest(".menu > li");
//       if (parentMenuItem && parentMenuItem.classList.contains("active")) {
//         parentMenuItem.style.color = "";
//       }
//     });
//   });
// });
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
