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
const toggleModal = (modalId) => {
  const modal = document.getElementById(modalId);

  if (modal.style.display === "flex") {
    modal.style.display = "none";
    removeEventListeners(modal); // 모달이 닫힐 때 이벤트 리스너 제거
  } else {
    closeAllModals(); // 모든 모달을 닫음
    modal.style.display = "flex";
    addEventListeners(modal); // 모달이 열릴 때 이벤트 리스너 추가
  }
};

const addEventListeners = (modal) => {
  const inputArea = modal.querySelector("#inputArea");
  inputArea.addEventListener("keydown", handleKeyDown);
};

const removeEventListeners = (modal) => {
  const inputArea = modal.querySelector("#inputArea");
  inputArea.removeEventListener("keydown", handleKeyDown);
};

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    // 상대 경로로 이동
    const relativePath = "/pages/search_result.html"; // 이동할 상대 경로를 지정
    window.location.href = relativePath; // 상대 경로로 이동
  }
};

const closeAllModals = () => {
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll(".btn-modal");

  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modal;
      toggleModal(modalId);
    });
  });

  const modals = document.querySelectorAll(".modal-overlay");

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        const modalId = modal.id;
        toggleModal(modalId);
      }
    });
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeAllModals(); // 모든 모달을 닫음
    }
  });
});

/*--------------------------------------------------------------
    @header | mo toggle menu, side toggle menu
--------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const iconMenu = document.querySelector("header .icon.menu");
  const gnbMenuMobile = document.querySelector(".gnb-wrap.mo");
  const menuItems = document.querySelectorAll(".menu > li");
  const subMenuItems = document.querySelectorAll(".menu-sub > li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((otherItem) => {
        if (otherItem !== item) {
          subMenuItems.forEach((subItem) => {
            subItem.classList.remove("active");
          });
          otherItem.classList.remove("active");
          otherItem.style.color = "#ccc";
        } else {
          otherItem.style.color = "#111";
        }
      });
      item.classList.toggle("active");
    });
  });

  subMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      subMenuItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });

  iconMenu.addEventListener("click", () => {
    gnbMenuMobile.classList.toggle("show");
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

/*--------------------------------------------------------------
  @slide
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  // 요소 선택
  const slideBtn = document.querySelectorAll(".slide-btn");
  const slideWrap = document.querySelector(".slide-wrap");
  const slideContThumb = document.querySelector(".slide-cont.thumb");
  let currentIndex = 0; // 현재 슬라이드 인덱스
  const thumbSlides = slideContThumb.children[0].children; // 썸네일 슬라이드 요소들
  thumbSlides[0].classList.add("active"); // 초기 썸네일 슬라이드에 active 클래스 추가

  // PC 클릭 이벤트
  slideBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.parentNode.classList.contains("next")) {
        // 다음 버튼 클릭
        currentIndex++;
        if (currentIndex >= slideWrap.children.length) {
          // 마지막 슬라이드일 경우
          currentIndex = 0; // 처음으로 돌아가기
        }
      } else {
        // 이전 버튼 클릭
        currentIndex--;
        if (currentIndex < 0) {
          // 첫 번째 슬라이드일 경우
          currentIndex = slideWrap.children.length - 1; // 마지막으로 이동
        }
      }
      updateSlide(); // 슬라이드 업데이트
    });
  });

  // 모바일 터치 이벤트
  let startX, endX;
  slideWrap.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].clientX; // 터치 시작 좌표 저장 (변경)
  });
  slideWrap.addEventListener("touchmove", (e) => {
    endX = e.changedTouches[0].clientX; // 터치 움직임 좌표 저장 (변경)
  });
  slideWrap.addEventListener("touchend", (e) => {
    const diff = endX - startX; // 터치 시작과 종료 좌표의 차이
    if (diff > 0) {
      // 오른쪽에서 왼쪽으로 스와이프
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slideWrap.children.length - 1;
      }
    } else {
      // 왼쪽에서 오른쪽으로 스와이프
      currentIndex++;
      if (currentIndex >= slideWrap.children.length) {
        currentIndex = 0;
      }
    }
    updateSlide(); // 슬라이드 업데이트
  });

  // 썸네일 클릭 이벤트 추가
  Array.from(thumbSlides).forEach((slide, index) => {
    slide.addEventListener("click", () => {
      currentIndex = index;
      updateSlide();
    });
  });

  function updateSlide() {
    const translateX = -100 * currentIndex + "%"; // 슬라이드 이동 거리 계산
    slideWrap.style.transform = `translateX(${translateX})`; // 슬라이드 이동
    // 썸네일 슬라이드 active 클래스 업데이트
    Array.from(thumbSlides).forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
});

/*--------------------------------------------------------------
  @search input enter 막기
--------------------------------------------------------------*/
// const inputArea = document.getElementById("inputArea");

// inputArea.addEventListener("keydown", function (event) {
//   if (event.keyCode === 13) {
//     // 엔터 키 코드는 13
//     event.preventDefault(); // 기본 동작(새로운 줄 추가)을 막기
//   }
// });
