const header = document.querySelector("header");
const btnTop = document.querySelector(".btn-top");
const gnb = document.querySelector(".gnb");
// const bannerShadow = document.querySelector(".banner .swiper-slide");
// const bannerShadow = document.querySelector(".")

//상단 메뉴 풀다운 동작
gnb.addEventListener("mouseenter", function () {
  //console.log("마우스가 올라갔습니다.");
  header.classList.add("over");
});

//상단 메뉴 풀다운 동작
gnb.addEventListener("mouseleave", function () {
  //console.log("마우스가 올라갔습니다.");
  header.classList.remove("over");
});

btnTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

//css 안에 내용 불러올때 . 을 찍으면 불러올 수 있음 .btn-top처럼

document.addEventListener("scroll", function () {
  //스크롤이 일어날 때 조취를 취함
  // "나는 이제 사용자가 일으키는 스크롤 이벤트를 들을 수 있습니다."
  const scrollY = Math.floor(window.scrollY); // 변수
  if (scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  if (scrollY > 300) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

//중복되는 코드는 분리가 원칙임
