


// 모바일메뉴
// .ham 클릭했을때
// .mgnb_wrap {left : 0} animate 되어라
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: "0"
  });
});

$(".mgnb_colse").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});
// -100%  왼쪽에서 슬라이드로 나옴

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
  // 클릭 외는 닫히게
});



// 2차 메뉴
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

// 배너 슬라이드
const banner_list = new Swiper('.banner_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true, // 기본값 false, 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next", // 다음
    prevEl: ".swiper-button-prev", // 이전
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
})

// 메뉴
const menu_list = new Swiper(".menu_list", {
  // 한 슬라이드에 보여줄 갯수
  centeredSlides: true, // 활성화된 슬라이드가 가운데, 주변은 자연스럽게 잘림
  loop: true, // 빈 공간 채워줌 - 슬라이드 반복
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,

  // 반응형 슬라이드 옵션
  breakpoints: {
    0: { // 모바일
      slidesPerView: 1.5,
    },
    768: {// 768픽셀 이상에서 - min-width / 테블릿
      slidesPerView: 2.5,
    },
    1200: { // 데스크탑
      slidesPerView: 4,
    },
  },


});



