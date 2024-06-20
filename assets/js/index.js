
// top 버튼 클릭시
document.getElementById('top_btn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


$('a').click(function (e) {
  e.preventDefault();
})




// 상단팝업
var popSlide = new Swiper('.pop-slide', {
    slidesPerView:"auto",
    loop:true,
    direction : 'vertical',
    autoplay : {
      delay : 2000,
    },
});
  


$('#header #gnb .gnb-item > a').hover(function() {
  var Indx = $(this).parent('li').index();
  $('#header #gnb .gnb-item').find('a').addClass('hover');
  $('#header #gnb .gnb-item').eq(Indx).find('a').removeClass('hover');
}) 

$('#header #gnb .gnb-list').off('mouseenter').hover(function () {
  $('#header #gnb .gnb-item').find('a').removeClass('hover');
});




// 스크롤 시 상단팝업
let lastScroll = 0;
$(window).scroll(function(){
    var curr = $(this).scrollTop();
    var visual_top = $('#visual').offset().top;

    var main_Height = $('#main').outerHeight();
    var main_top = $('#main').offset().top;
    var main_bot = main_top + main_Height;


    var footer_top = $('#footer').offset().top;
    console.log('footer_top' + footer_top)

    console.log("main_bot" + main_bot, "curr" + curr, "main_Height" + main_Height)

    // pop-area
    if(curr > 0) {
        $('#header').addClass('slide');
    } else {
        $('#header').removeClass('slide');
    }

    // top_btn
    if(curr > visual_top) {
      $('#top_btn').addClass('on');
    } else if(curr <= visual_top) {
      $('#top_btn').removeClass('on');
    } 

    if (curr > 7700) {
      $('#top_btn').addClass('sticky');
    } else {
      $('#top_btn').removeClass('sticky');
    }


})





// 서브메뉴
$('#header .gnb-item').hover(function() {
  $(this).find('.depth1-wrap').addClass('on');
  $('.layer').addClass('on');
  // $('#header #gnb .depth1-wrap').addClass('on');
}, function() {
  $(this).find('.depth1-wrap').removeClass('on');
  $('.layer').removeClass('on');
// $('#header #gnb .depth1-wrap').removeClass('on');
})

$('#header .depth1-item').hover(function() {
  $(this).find('.depth2-wrap').addClass('on');
  $('.layer').addClass('on');
  // $('#header #gnb .depth2-wrap').addClass('on');
}, function() {
  $(this).find('.depth2-wrap').removeClass('on');
  $('.layer').removeClass('on');
// $('#header #gnb .depth1-wrap').removeClass('on');
})

// $('.depth1-item').hover(function() {
// $('#header #gnb .depth2-wrap').addClass('on');
// }, function() {
// $('#header #gnb .depth2-wrap').removeClass('on');
// })








// 메인비주얼 
var mainimgSlide = new Swiper('.sc-visual .mainimg-slide', {
    slidesPerView:"auto",
    effect: 'fade',
    loop:true,
    autoplay : {
      delay : 4000,
    },
    navigation: {
      nextEl: ".sc-visual .mainimg-slide .navi-next",
      prevEl: ".sc-visual .mainimg-slide .navi-prev",
    },
    pagination: {
      el: ".sc-visual .fraction",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return `<span class="curr">${current}</span> /
                <span class="total">${total}</span>`;
      }
    },
    on: {
      "init" : function() {
        $('.sc-visual .curr').text(this.realIndex+1);
      },
      "slideChange" : function() {
        $('.sc-visual .curr').text(this.realIndex+1);
      },

    }
});



var rankSlide = new Swiper('.sc-rank .rank-slide', {
  slidesPerView: "auto",
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  allowTouchMove:false,
  on: {
    "slideChange": function () {
      var Indx = this.realIndex;
      $('.rank-list .rank-item').off('mouseenter').hover(function () {
        var Indx = $(this).index();
        rankSlide.slideToLoop(Indx);
        rankSlide.autoplay.stop(); 
        
      }, function() {
        rankSlide.autoplay.start(); 
    });
      $('.rank-list .rank-item').find('.rank_num').removeClass('on');
      $('.rank-list .rank-item').eq(Indx).find('.rank_num').addClass('on');
    }
  }
});

// 좋아요 클릭 후
$('.sc-rank .rank-slide .swiper-slide .btn-like').click(function(){
  $(this).toggleClass('on');
})












// 카테고리 - 전체
var cateSlide = new Swiper('.cate-fade-slide', {
  speed:1,
  loop:true,
  // effect: 'fade',
  autoplay : {
    delay : 2000,
    disableOnInteraction:false
  },
  allowTouchMove:false,
  // nested:true,
});



// 카테고리 - 카테고리별 상품리스트
var catecontSlide = new Swiper('.sc-cate .cont-slide', {
  slidesPerView:"auto",
  spaceBetween:16,
  loop:true,
  navigation: {
    nextEl: ".sc-cate .navi-next",
    prevEl: ".sc-cate .navi-prev",
  },
});


cateSlide.on("slideChange",function(){
  $('.sc-cate .menu-area .cate-list li').eq(this.realIndex).addClass('on').siblings().removeClass('on')
})

$('.sc-cate .menu-area .cate-list a').click(function(e){
  e.preventDefault();
  idx = $(this).parent().index();
  cateSlide.slideToLoop(idx);
})


// $('.cont-slide a').click(function(e){
//   e.preventDefault();
// })


var cate_autoplay = cateSlide.params.autoplay.enabled;
$('.cont-slide').hover(function() {
  if(cate_autoplay) {
    cateSlide.autoplay.stop(); 
    cate_autoplay = false;
  } else {
    cateSlide.autoplay.start(); 
    cate_autoplay = true;
  }
});



// 좋아요 클릭 후
$('.sc-cate .cont-slide .swiper-slide .btn-like').click(function(){
  $(this).toggleClass('on');
})
















// 배너영역
var bannerSlide = new Swiper('.sc-banner .banner-slide', {
    slidesPerView:"auto",
    speed : 1000,
    navigation: {
      nextEl: ".sc-banner .banner-slide .navi-next",
      prevEl: ".sc-banner .banner-slide .navi-prev",
    },
});










// lookbook
var lookSlide = new Swiper('.sc-look .look-slide', {
  slidesPerView:"auto",
  centeredSlides: true,
  loop: true,
  autoplay : {
    delay : 3000,
  },
  navigation: {
    nextEl: ".sc-look .look-slide .navi-next",
    prevEl: ".sc-look .look-slide .navi-prev",
  },
});






// denim
var daySlide = new Swiper('.sc-day .day-slide', {
  slidesPerView:"auto",
  centeredSlides: true,
  loop: true,
  speed: 1500,
  // autoplay : {
  //   delay : 3000,
  // },
  navigation: {
    nextEl: ".sc-day .day-slide .navi-next",
    prevEl: ".sc-day .day-slide .navi-prev",
  },
});








// sc-media
var mediaSlide = new Swiper('.sc-media .media-slide', {
  slidesPerView:"auto",
  centeredSlides: true,
  spaceBetween:80,
  speed : 1000,
  navigation: {
    nextEl: ".sc-media .media-slide .navi-next",
    prevEl: ".sc-media .media-slide .navi-prev",
  },
});















// sc-issue
var tagmenuSlide = new Swiper('.sc-issue .tagmenu-slide', {
  slidesPerView:"auto",
  spaceBetween:180,
  centeredSlides: true,
  loop: true,
  autoplay : {
    delay : 2000,
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: ".sc-issue .tagmenu-slide .menu-navi-next",
    prevEl: ".sc-issue .tagmenu-slide .menu-navi-prev",
  },
});

tagmenuSlide.on('slideChange', function(){
  tagcontSlide.slideToLoop(this.realIndex);
})


var tagcontSlide = new Swiper('.sc-issue .tagcont-slide', {
  slidesPerView:"auto",
  centeredSlides: true,
  loop: true,
  on : {
    slideChange: function() {
      var Idx = this.realIndex;
      $('.sc-issue .tab-item').eq(Idx).addClass('on').siblings().removeClass('on');
      tagmenuSlide.slideToLoop(Idx);
    }
  }
});


$('.sc-issue .tagcont-slide .slide-wrap').off('mouseenter').hover(function () {
  tagmenuSlide.autoplay.stop(); 
  }, function() {
    tagmenuSlide.autoplay.start(); 
});


var taginnerSlide = new Swiper('.sc-issue .taginner-slide', {
  slidesPerView:"auto",
  loop: true,
  spaceBetween:16,
  nested:true,
  navigation: {
    nextEl: ".sc-issue .taginner-slide .navi-next",
    prevEl: ".sc-issue .taginner-slide .navi-prev",
  },
});




// 좋아요 클릭 후
$('.sc-issue .taginner-slide .swiper-slide .btn-like').click(function(){
  $(this).toggleClass('on');
})


