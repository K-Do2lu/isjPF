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

    const iconClass = gnbMenuMobile.classList.contains("show")
      ? "close"
      : "menu";
    const removeClass = gnbMenuMobile.classList.contains("show")
      ? "menu"
      : "close";

    iconMenu.classList.remove(removeClass);
    iconMenu.classList.add(iconClass);
  });
});

/*--------------------------------------------------------------
    @최상단 버튼 + header scroll 감지 border-bottom 추가
--------------------------------------------------------------*/
window.addEventListener("scroll", function () {
  // 스크롤 시 버튼을 나타내거나 숨김
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";

  //  header scroll 감지 border-bottom 추가
  let scrollPosition = $(window).scrollTop();
  let header = $(".header");

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
  @관리자 select
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // DOMContentLoaded 이벤트가 발생하면 실행

  // 모든 .select-wrap 클래스를 가진 요소를 선택
  const customSelects = document.querySelectorAll(".select-wrap");

  // 각 .select-wrap 요소에 대해 반복
  customSelects.forEach((customSelect) => {
    // .select-wrap 요소 내에서 선택된 옵션을 나타내는 요소를 선택
    const selectedOption = customSelect.querySelector(".selected");
    // .select-wrap 요소 내에서 옵션 목록을 나타내는 요소를 선택
    const optionsList = customSelect.querySelector(".options");
    // .select-wrap 요소 내에서 옵션 제목을 나타내는 모든 요소를 선택
    const optionTit = customSelect.querySelectorAll(".option-tit");

    // 현재 선택된 옵션을 저장할 변수를 선언
    let currentSelectedOption = "";

    // 옵션을 클릭했을 때 처리할 함수를 정의
    const handleOptionClick = (event) => {
      // 클릭된 요소를 가져옵니다.
      const clickedOption = event.target;
      // 만약 클릭된 요소가 <li> 요소이면,
      if (clickedOption.tagName === "LI") {
        // 선택된 옵션의 텍스트를 클릭된 옵션의 텍스트로 변경
        selectedOption.textContent = clickedOption.textContent;
        // 선택된 옵션이면 텍스트 색상을 검정색으로 변경
        selectedOption.style.color = "#000";
        // 옵션 목록을 숨깁니다.
        optionsList.style.display = "none";
        // document 전역 객체에서 이벤트 리스너를 제거
        document.removeEventListener("click", handleOptionClick);
        // 선택된 옵션을 현재 선택된 옵션 변수에 저장
        currentSelectedOption = clickedOption.textContent;
      }
    };

    // 선택된 옵션을 클릭했을 때 처리할 함수를 정의
    selectedOption.addEventListener("click", (event) => {
      // 이벤트 버블링을 막습니다.
      event.stopPropagation();
      // 옵션 목록이 표시되는지 확인
      const isDisplayed = optionsList.style.display === "block";

      // 모든 .select-wrap 요소에 대해 반복
      customSelects.forEach((select) => {
        // 현재 .select-wrap 요소가 아닌 다른 요소의 옵션 목록을 숨김
        const otherOptionsList = select.querySelector(".options");
        otherOptionsList.style.display = "none";

        // 다른 .select-wrap 요소 내에서 선택된 옵션을 나타내는 요소를 선택
        const otherSelectedOption = select.querySelector(".selected");
        // 다른 .select-wrap 요소 내에서 선택된 옵션의 회전 효과 클래스를 제거
        otherSelectedOption.classList.remove("rotate");

        // 다른 .select-wrap 요소에 .focus 클래스를 제거
        select.classList.remove("focus");
      });

      // 현재 .select-wrap 요소의 옵션 목록을 표시하거나 숨김
      optionsList.style.display = isDisplayed ? "none" : "block";

      // 선택된 옵션의 화살표 아이콘에 회전 효과 클래스를 토글
      selectedOption.classList.toggle("rotate", !isDisplayed);

      // 현재 .select-wrap 요소에 .focus 클래스를 토글
      customSelect.classList.toggle("focus", !isDisplayed);

      // 옵션 목록이 표시되지 않는 경우, document 전역 객체에 이벤트 리스너를 추가
      if (!isDisplayed) {
        document.addEventListener("click", handleOptionClick);
      } else {
        // 옵션 목록이 표시되는 경우, document 전역 객체에서 이벤트 리스너를 제거
        document.removeEventListener("click", handleOptionClick);
      }
    });

    // 각 옵션 제목을 클릭했을 때 처리할 함수를 정의
    optionTit.forEach((item) => {
      item.addEventListener("click", (event) => {
        // 이벤트 버블링을 막습니다.
        event.stopPropagation();

        // 현재 클릭한 옵션 제목의 하위 옵션 목록을 가져옴
        const subOptions = item.nextElementSibling;
        // 하위 옵션 목록을 표시하거나 숨깁니다.
        subOptions.style.display =
          subOptions.style.display === "block" ? "none" : "block";

        // 다른 옵션 제목에 대해 반복
        optionTit.forEach((otherItem) => {
          // 현재 클릭한 옵션 제목이 아닌 경우,
          if (otherItem !== item) {
            // 해당 옵션 제목의 하위 옵션 목록을 숨깁니다.
            const otherSubOptions = otherItem.nextElementSibling;
            otherSubOptions.style.display = "none";
            // 해당 옵션 제목의 회전 효과 클래스를 제거
            otherItem.classList.remove("rotate");
          }
        });

        // 클릭된 옵션 제목에 회전 효과 클래스를 토글
        item.classList.toggle("rotate", subOptions.style.display === "block");
      });
    });

    // 옵션 목록에서 옵션을 클릭했을 때 처리할 함수를 정의
    optionsList.addEventListener("click", (event) => {
      // 클릭된 요소를 가져옵니다.
      const clickedOption = event.target;
      // 만약 클릭된 요소가 <li> 요소이면,
      if (clickedOption.tagName === "LI") {
        // 선택된 옵션의 텍스트를 클릭된 옵션의 텍스트로 변경
        selectedOption.textContent = clickedOption.textContent;
        // 선택된 옵션이면 텍스트 색상을 검정색으로 변경
        selectedOption.style.color = "#000";
        // 옵션 목록을 숨깁니다.
        optionsList.style.display = "none";
        // 선택된 옵션을 현재 선택된 옵션 변수에 저장
        currentSelectedOption = clickedOption.textContent;
        // 선택된 옵션이 포함된 .selected 요소에서 회전 효과 클래스를 제거
        selectedOption.classList.remove("rotate");
        // .select-wrap 요소에 .focus 클래스를 제거
        customSelect.classList.remove("focus");
      }
    });
  });
});

/*--------------------------------------------------------------
  @drag
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // 할 일을 추가하는 함수
  const addTodo = () => {
    // 입력된 할 일과 할 일 목록 요소 가져오기
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("drag-wrap");
    const todoText = todoInput.value.trim(); // 입력된 텍스트에서 양 끝의 공백 제거

    // 입력된 텍스트가 비어있지 않을 경우에만 실행
    if (todoText !== "") {
      // 새로운 할 일을 위한 리스트 아이템 생성
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "drag-item");
      listItem.setAttribute("draggable", "true");

      // 드래그 아이콘을 위한 버튼 요소 생성
      const dragIconBtn = document.createElement("button");
      dragIconBtn.setAttribute("type", "button");
      dragIconBtn.setAttribute("class", "drag-icon");
      dragIconBtn.innerHTML = '<i class="icon drag"></i>';

      // 할 일 텍스트를 담는 p 요소 생성
      const dragTxt = document.createElement("p");
      dragTxt.setAttribute("class", "drag-txt");
      dragTxt.textContent = todoText; // 할 일 텍스트 설정

      // 삭제 버튼을 위한 버튼 요소 생성
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("type", "button");
      deleteBtn.setAttribute("class", "control-btn delete");
      // 삭제 버튼 클릭 시 리스트 아이템 제거
      deleteBtn.addEventListener("click", function () {
        listItem.remove();
        updateMargin(); // 리스트 아이템이 제거될 때마다 마진 조정
      });

      // 생성한 요소들을 리스트 아이템에 추가
      listItem.appendChild(dragIconBtn);
      listItem.appendChild(dragTxt);
      listItem.appendChild(deleteBtn);

      // 할 일 목록에 리스트 아이템 추가
      todoList.appendChild(listItem);

      // 입력 필드 초기화
      todoInput.value = "";

      updateMargin(); // 리스트 아이템이 추가될 때마다 마진 조정
    }
  };

  var selected; // 드래그된 아이템

  // 드래그 시작 이벤트 핸들러
  const dragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", null);
    selected = e.target;
  };

  // 드래그 오버 이벤트 핸들러
  const dragOver = (e) => {
    // 위쪽으로 이동했을 때
    if (isBefore(selected, e.target)) {
      if (e.target.className == "drag-item") {
        e.target.parentNode.insertBefore(selected, e.target);
      }
    } else {
      // 아래쪽으로 이동했을 때
      if (e.target.className == "drag-item") {
        e.target.parentNode.insertBefore(selected, e.target.nextSibling);
      }
    }
  };

  // 드래그 종료 이벤트 핸들러
  const dragEnd = () => {
    selected = null;
  };

  // 두 요소 사이에 위치하는지 확인하는 함수
  const isBefore = (el1, el2) => {
    let cur;

    if (el2.parentNode === el1.parentNode) {
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el2) return true;
      }
    }
    return false;
  };

  // 마진을 조정하는 함수
  const updateMargin = () => {
    const todoList = document.getElementById("drag-wrap");
    const itemCount = todoList.childElementCount;
    // 리스트 아이템이 1개 이상일 때만 마진 적용
    if (itemCount > 0) {
      todoList.style.marginTop = "10px";
    } else {
      todoList.style.marginTop = "0";
    }
  };

  // 할 일 입력 필드와 할 일 목록, 추가 버튼 요소 가져오기
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("drag-wrap");
  const addBtn = document.querySelector(".control-btn.add");

  // 할 일 입력 필드에서 Enter 키 입력 시 할 일 추가
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  // 추가 버튼 클릭 시 할 일 추가
  addBtn.addEventListener("click", addTodo);

  // 드래그 앤 드롭 이벤트 설정
  todoList.addEventListener("dragstart", dragStart); // 드래그 시작
  todoList.addEventListener("dragover", dragOver); // 드래그 오버
  todoList.addEventListener("dragend", dragEnd); // 드래그 종료
});

/*--------------------------------------------------------------
  @file upload
--------------------------------------------------------------*/
function openFileUploader() {
  document.getElementById("fileUpload").click();
}

/*--------------------------------------------------------------
  @인풋 안에 특수기호 입력 시 none 처리
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const uploadTitInput = document.getElementById("uploadTitInput");
  const importantSymbol = document.querySelector(".important-symbol");

  uploadTitInput.addEventListener("click", () => {
    importantSymbol.style.display = "none";
  });
});
/*--------------------------------------------------------------
  @이미지 설명글 붙어있는거  close 클릭 시  삭제
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const crossButtons = document.querySelectorAll(".choice-item button");

  crossButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceWrap = button.closest(".choice-wrap");
      if (choiceWrap) {
        choiceWrap.remove();
      }
    });
  });
});
/*--------------------------------------------------------------
  @test
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const m_1depth = document.querySelectorAll(".m-1depth > li");
  const m_2depth = document.querySelectorAll(".m-2depth > li");

  m_1depth.forEach((item) => {
    item.addEventListener("click", (e) => {
      const li = e.currentTarget;

      const ul = li.querySelector(".m-2depth");

      if (ul) {
        e.preventDefault();
      }
    });
  });

  m_2depth.forEach((item) => {
    item.addEventListener("click", (e) => {
      const li = e.currentTarget;
      m_2depth.forEach((otherItem) => {
        if (li !== otherItem) {
          otherItem.classList.remove("active");
        }
      });
      li.classList.toggle("active");
    });
  });
});
