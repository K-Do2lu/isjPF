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
document.addEventListener("DOMContentLoaded", function () {
  // header menu hover, click event
  const subMenuItems = document.querySelectorAll("header .menu-sub li");

  const slideDown = (e) => {
    const clicked = e.currentTarget;
    subMenuItems.forEach((item) => {
      if (item !== clicked) {
        item.classList.remove("active");
      }
    });
    clicked.classList.toggle("active");
  };

  subMenuItems.forEach((item) => {
    item.addEventListener("click", slideDown);
  });

  // mo headermenu
  const gnb_menu = document.querySelector(".gnb button.menu");
  const gnb_wrap_mo = document.querySelector(".gnb-wrap.mo");
  const gnb_wrap_mo_menu = document.querySelectorAll(".gnb-wrap.mo .menu > li");
  const menuSubTit = document.querySelectorAll(".gnb-wrap.mo .menu-sub > li");

  const showMenu = () => {
    gnb_wrap_mo.classList.toggle("active");

    // 만약 .gnb-wrap.mo에 active 클래스가 없다면 모든 하위 요소의 active 클래스 제거
    if (!gnb_wrap_mo.classList.contains("active")) {
      gnb_wrap_mo_menu.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      menuSubTit.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });
    }
  };

  gnb_menu.addEventListener("click", showMenu);

  // mo headermenu
  let currentActiveItem = null;

  const handleMenuItemClick = (event) => {
    const clickedItem = event.currentTarget;
    const hasSubMenu = clickedItem.querySelector(".menu-sub");

    if (hasSubMenu) {
      event.preventDefault();
    }

    // 현재 활성화된 요소를 해제
    if (currentActiveItem && currentActiveItem !== clickedItem) {
      currentActiveItem.classList.remove("active");
      // 현재 활성화된 요소의 하위 .menu-sub > li의 활성 클래스 제거
      currentActiveItem
        .querySelectorAll(".menu-sub > li.active")
        .forEach((subMenuItem) => {
          subMenuItem.classList.remove("active");
        });
    }

    // 클릭한 요소를 활성화하거나 해제
    clickedItem.classList.toggle("active");

    // 클릭한 요소가 현재 활성화된 요소가 되도록 설정
    if (clickedItem.classList.contains("active")) {
      currentActiveItem = clickedItem;
    } else {
      currentActiveItem = null;
    }
  };

  gnb_wrap_mo_menu.forEach((item) => {
    item.addEventListener("click", handleMenuItemClick);
  });

  // 서브메뉴
  menuSubTit.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // 이벤트 버블링 중지

      const clickedSubMenu = event.currentTarget;

      // 모든 메뉴 항목의 활성 클래스 제거
      menuSubTit.forEach((menuItem) => {
        if (menuItem !== clickedSubMenu) {
          menuItem.classList.remove("active");
        }
      });

      // 클릭된 메뉴 항목에만 활성 클래스를 토글
      clickedSubMenu.classList.toggle("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // side headermenu
  const gnb_wrap_mo_menu = document.querySelectorAll(
    ".gnb-wrap.side-toggle .menu > li"
  );
  const menuSubTit = document.querySelectorAll(
    ".gnb-wrap.side-toggle .menu-sub > li"
  );

  // side headermenu
  let currentActiveItem = null;

  const handleMenuItemClick = (event) => {
    const clickedItem = event.currentTarget;
    const hasSubMenu = clickedItem.querySelector(".menu-sub");

    if (hasSubMenu) {
      event.preventDefault();
    }

    // 현재 활성화된 요소를 해제
    if (currentActiveItem && currentActiveItem !== clickedItem) {
      currentActiveItem.classList.remove("active");
      // 현재 활성화된 요소의 하위 .menu-sub > li의 활성 클래스 제거
      currentActiveItem
        .querySelectorAll(".menu-sub > li.active")
        .forEach((subMenuItem) => {
          subMenuItem.classList.remove("active");
        });
    }

    // 클릭한 요소를 활성화하거나 해제
    clickedItem.classList.toggle("active");

    // 클릭한 요소가 현재 활성화된 요소가 되도록 설정
    if (clickedItem.classList.contains("active")) {
      currentActiveItem = clickedItem;
    } else {
      currentActiveItem = null;
    }
  };

  gnb_wrap_mo_menu.forEach((item) => {
    item.addEventListener("click", handleMenuItemClick);
  });

  // 서브메뉴
  menuSubTit.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // 이벤트 버블링 중지

      const clickedSubMenu = event.currentTarget;

      // 모든 메뉴 항목의 활성 클래스 제거
      menuSubTit.forEach((menuItem) => {
        if (menuItem !== clickedSubMenu) {
          menuItem.classList.remove("active");
        }
      });

      // 클릭된 메뉴 항목에만 활성 클래스를 토글
      clickedSubMenu.classList.toggle("active");
    });
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
