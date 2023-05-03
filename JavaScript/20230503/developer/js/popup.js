const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const dim = document.querySelector(".dim");
// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
  document.documentElement.style.overflow = "hidden";
}

function closePopup() {
  article.classList.remove("active");
  document.documentElement.style.overflow = "auto";
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key);
  // tab만 눌렀을때 (Shift+tab일땐 실행되지 않음.)
  if (!e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  // Shift+tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);

window.addEventListener("keydown", (e) => {
  if (article.classList.value === "popup active" && e.key === "Escape") {
    closePopup();
  }
});
