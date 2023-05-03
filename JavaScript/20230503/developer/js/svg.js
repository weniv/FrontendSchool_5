// path 선택하기
const path = document.querySelector("#path");

// 버튼 선택하기
const button = document.querySelector(".btn-open");

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();

// stroke-dasharray: 1588 1588; 형태로 css 설정하기
path.style.strokeDasharray = pathLength + " " + pathLength;

// stroke-dashoffset: 1588; 형태로 css 초기값 설정하기
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  const drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;

  button.style.opacity = scrollPercentage;
}

window.addEventListener("scroll", scrollHandler);
